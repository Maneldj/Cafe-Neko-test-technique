import aboutUs from '../../public/images/image-about-us.png';

function AboutUs() {

  return (
    <div className='containerAboutUs' id='aboutUsSection'>
      <div className='firstPartAboutUs'>
      <h2 className='titleAboutUs'>Qui sommes-nous ?</h2>
        <span>Bienvenue chez Café Neko, l'endroit où le café et les chats se rencontrent pour créer une expérience unique en son genre.</span>
        <p>Chez Café Neko, nous sommes passionnés par deux choses : le café de qualité et le bien-être des chats. Fondé par des amoureux des félins et des aficionados du café, Café Neko est bien plus qu'un simple café. C'est un refuge pour les amoureux des chats, un havre de paix où l'on peut savourer une bonne tasse de café tout en câlinant nos adorables résidents à quatre pattes.</p>
      </div>
      <div className='secondPartAboutUs'>
      <img src={aboutUs} className='imgAboutUs' alt='About Us'/>
      </div>
    </div>
  )
};

export default AboutUs;
