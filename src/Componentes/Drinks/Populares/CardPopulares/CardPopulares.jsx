import React from 'react';
import style from './CardPopulares.module.css';


function CardPopulares(props) {
    return (
        <div className={style.cardPopulares}>
            <img src={props.src} alt=""/>
            <p>{props.id}</p>
        </div>
    )
}

export default CardPopulares
