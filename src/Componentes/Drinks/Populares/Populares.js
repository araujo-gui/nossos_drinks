import React, {useState, useEffect} from 'react';
import CardPopulares from './CardPopulares/CardPopulares';
import style from './Populares.module.css';


function Populares() {
    const [drinks, setDrinks] = useState([]);
    
  
    useEffect(() => {
      fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail`)
        .then((response) => {
          return response.json();
        })
        .then((dados) => {
          dados = dados.drinks.slice(0,30);
          setDrinks(dados);
        });
    }, []);


  
    return (
      <div>
       
        <section className={style.sectionCards}>
        {drinks.map((drink, index) => {
          return (
              <li 
              key={index}>
                   <CardPopulares 
              src={drink.strDrinkThumb}
              id={drink.strDrink}
              className={style.card}/>
              </li>
              
          );
        })}
        </section>
        
      </div>
    );
  }

export default Populares
