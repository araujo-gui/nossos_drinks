import React, { Component } from 'react'

export default class Form extends Component {
    render() {
        return (
            <div className="contato">
                <h1 className="tituloContato">Contato</h1>
                <section className="conteudoContato">
                    <img className="imagem" src="https://bonsdrinks.netlify.app/static/media/contact-pic.689e126c.jpg"></img>
                <form className="formContato">
                    <label for="" className="label">Nome:</label>
                    <input type="text" className="inputs" />

                    <label for="" className="label">Email:</label>
                    <input type="text" class="inputs" />

                    <label for="" className="label">Mensagem</label>
                    <textarea type="text" class="textarea" rows="5" cols="50"/>

                    <button type="submit" className="botao">Enviar</button>
                </form>
                </section>
            </div>
        )
    }
}
