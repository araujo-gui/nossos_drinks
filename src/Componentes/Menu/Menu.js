import React, { Component } from 'react'

export default class Menu extends Component {
    render() {
        return (
            <div className="header">
                <ul className="listaMenu">
                    <li className="itemListaMenu">Drinks</li>
                    <li className="itemListaMenu">Sobre nós</li>
                    <li className="itemListaMenu">Bons Drinks</li>
                    <li className="itemListaMenu">Nosso Time</li>
                    <li className="itemListaMenu">Contato</li>
                </ul>
            </div>
        )
    }
}
