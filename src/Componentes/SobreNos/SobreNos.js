import React from 'react';
import style from './SobreNos.module.css';

function SobreNos() {
    return (
        <div className={style.containerSobre}>
            <h2 className={style.tituloSobre}>Sobre Nós</h2>
            <section className={style.sectionSobre}>
            <img src="img/img_sobre.jpg" className={style.imgSobre}/>
            <p className={style.texto}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel sodales elit. Duis maximus arcu eget urna facilisis auctor. Ut ac lacinia nulla. Suspendisse vel tellus semper, accumsan enim sed, consectetur ante. Maecenas eleifend ante non ex luctus mattis. Vivamus eu sapien eu ipsum gravida aliquam eget at tellus. Ut ultricies convallis justo, nec eleifend erat sagittis vitae. Nullam nec sem vel tortor rutrum rutrum. Pellentesque cursus nunc porta neque dapibus porttitor at in purus. Pellentesque purus diam, luctus non venenatis commodo, fermentum ut eros. Morbi libero augue, ullamcorper vitae velit vitae, lacinia rhoncus mauris. Nam laoreet purus id augue hendrerit lacinia. Suspendisse eu lorem metus. Donec commodo, eros eget porta hendrerit, neque justo tempor eros, ac cursus lectus est quis tortor.

Donec nec consectetur lectus. Sed rhoncus justo eget dolor feugiat, quis mattis elit mattis. Nunc semper, sem vel tempor dictum, est lorem pretium nisi, eget scelerisque nisi arcu sit amet justo. Sed laoreet aliquam interdum. Maecenas volutpat pharetra leo, quis hendrerit eros semper at. Sed viverra hendrerit pellentesque. Donec et scelerisque mi.</p>  
            </section>
            
            
        </div>
    )
}

export default SobreNos
