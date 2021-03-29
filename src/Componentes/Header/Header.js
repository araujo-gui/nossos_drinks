import React from 'react';
import styles from './Header.module.css';
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';

function Header() {
    return (
        <div className={styles.containerHeader}>
            <nav className={styles.navHeader}>
                <NavLink to='/drinks' activeStyle={{ color: "var(--amarelo)" }} className={styles.itemListaMenu}>
                    <li >
                        Drinks
                    </li>
                </NavLink >
                <NavLink to='/sobre-nos' activeStyle={{ color: "var(--amarelo)" }} className={styles.itemListaMenu}>
                    <li >
                        Sobre Nós
                    </li>
                </NavLink>
                <NavLink to='/' activeStyle={{ color: "var(--amarelo)" }} className={styles.itemListaMenu}>
                    <li >
                        Bons Drinks
                    </li>
                </NavLink>
                <NavLink to='/nosso-time' activeStyle={{ color: "var(--amarelo)" }} className={styles.itemListaMenu}>
                    <li >
                        Nosso Time
                    </li>
                </NavLink>
                <NavLink to='/contato' activeStyle={{ color: "var(--amarelo)" }} className={styles.itemListaMenu}>
                    <li >
                        Contato
                    </li>
                </NavLink>
            </nav>
        </div>
    )
}

export default Header
