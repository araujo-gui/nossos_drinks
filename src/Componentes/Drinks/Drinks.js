import React from 'react';
import style from './Drinks.module.css';
import {Link, Switch, Route} from 'react-router-dom';
import Populares from './Populares/Populares';

function Drinks() {
    return (
        <div className={style.containerDrinks}>
            <h2 className={style.tituloDrinks}>Drinks</h2>
            <section className={style.sectionDrinks}>
                <button className={style.buttonDrinks}>
                    <Link to="/drinks/Populares" className={style.titulobtn}>Drinks Populares</Link>
                </button>
            </section>
            <div>
            <Switch>
                <Route path="/drinks/Populares">
                    <Populares />
                </Route>
            </Switch>
            </div>
        </div>
    )
}

export default Drinks
