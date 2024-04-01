import catDrinkCoffee from '../../public/images/cat-hero-section.png';

function Welcome() {

  return (
    <div className='container'>
      <div className='firstPart'>
        <h1 className='firstTitle'> Bienvenue <br /> chez Café Neko</h1>
        <h2 className='secondTitle'> L'endroit où le café rencontre les ronronnements </h2>
        <span className='description'> Bienvenue dans notre univers où chaque tasse de café est accompagnée d'une dose d'amour félin.</span>
        <button className='contactUs'> Nous contacter </button>
      </div>
      <div className='secondPart'>
        <img src={catDrinkCoffee} className="catDrinkCoffee" />
      </div>
    </div>
  )
};

export default Welcome;
