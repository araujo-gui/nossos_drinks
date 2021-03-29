import React, {useState} from 'react';
import style from './Contato.module.css';
import FieldSet from './fieldSet/FieldSet';

function Contato() {
    const [nome, setNome] = useState('')

    return (
        <div className={style.containerContato}>
            <h2 className={style.tituloContato}>Contato</h2>
            <section className={style.sectionForm}>
                <img src="img/contato.png" className={style.imgContato}/>
                <form className={style.form}>
                    <FieldSet
                    type="text"
                    id="nome"
                    name="nome">Nome</FieldSet>
                    <FieldSet
                    type="email"
                    id="email"
                    name="email">E-mail</FieldSet>
                    <FieldSet
                    type="textarea"
                    id="mensagem"
                    name="mensagem">Mensagem</FieldSet>
                    <button className={style.button}>Enviar</button>
                </form>
            </section>
        </div>
    )
}

export default Contato
