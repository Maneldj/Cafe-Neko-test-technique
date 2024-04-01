import '../App.css'
import catLogo from '../../public/images/logo.svg';
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 640);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  window.addEventListener('resize', () => {
    setIsSmallScreen(window.innerWidth <= 640);
  });

  const handleAboutUs = () => {
    const aboutUsSection = document.getElementById('aboutUsSection');
    if(aboutUsSection) {
      aboutUsSection.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  }

  return (
    <header>
      <nav className='navbar'>
        <img src={catLogo} alt='Cat icon' className='catLogo' />
        {isSmallScreen ? (
          isMenuOpen ? (
            <GrClose onClick={toggleMenu} className='burgerMenu' />
          ) : (
            <GiHamburgerMenu onClick={toggleMenu} className='burgerMenu' />
          )
        ) : (
          <div className='menuLinks'>
            <a href='#' onClick={handleAboutUs}> Qui sommes-nous ? </a>
            <a href='#'> Nos valeurs </a>
            <a href='#' className='reserveLink'> Réservez ! </a>
          </div>
        )}
      </nav>
      {isMenuOpen && (
        <div className='menuLinks'>
          <a href='#' onClick={handleAboutUs}> Qui sommes-nous ? </a>
          <a href='#'> Nos valeurs </a>
          <a href='#' className='reserveLink'> Réservez ! </a>
        </div>
      )}
    </header>
  )
}

export default Header;