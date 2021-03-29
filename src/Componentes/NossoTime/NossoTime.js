import React from 'react';
import style from './NossoTime.module.css';

function NossoTime() {
    return (
        <div className={style.containerNossoTime}>
            <h2 className={style.tituloNossoTime}>Nosso Time</h2>
            <section className={style.todosCards}>
            <div className={style.card}>
                    <img src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" />
                    <div className={style.texto}>
                        <h3>Alex</h3>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce egestas tortor lectus, sed congue eros egestas nec. Vivamus nulla orci, finibus sit amet augue sit amet, pharetra scelerisque velit. Quisque nec libero a dui facilisis condimentum non elementum ante. Pellentesque tincidunt quam id fermentum ultrices. Donec ac feugiat nisl. Phasellus dictum justo a risus ullamcorper, nec auctor ex accumsan. Donec quis tempus nunc. </p>
                    </div>
                </div>
                <div className={style.card}>
                    <img src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" />
                    <div className={style.texto}>
                        <h3> Bella </h3>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce egestas tortor lectus, sed congue eros egestas nec. Vivamus nulla orci, finibus sit amet augue sit amet, pharetra scelerisque velit. Quisque nec libero a dui facilisis condimentum non elementum ante. Pellentesque tincidunt quam id fermentum ultrices. Donec ac feugiat nisl. Phasellus dictum justo a risus ullamcorper, nec auctor ex accumsan. Donec quis tempus nunc. </p>
                    </div>
                </div>
                <div className={style.card}>
                    <img src="https://images.unsplash.com/photo-1592978609703-20ca5c33c076?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=821&q=80" />
                    <div className={style.texto}>
                        <h3>Jess</h3>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce egestas tortor lectus, sed congue eros egestas nec. Vivamus nulla orci, finibus sit amet augue sit amet, pharetra scelerisque velit. Quisque nec libero a dui facilisis condimentum non elementum ante. Pellentesque tincidunt quam id fermentum ultrices. Donec ac feugiat nisl. Phasellus dictum justo a risus ullamcorper, nec auctor ex accumsan. Donec quis tempus nunc. </p>
                    </div>
                </div>
                <div className={style.card}>
                    <img src="https://images.unsplash.com/photo-1611367540679-d94566094025?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" />
                    <div className={style.texto}>
                        <h3>Lua</h3>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce egestas tortor lectus, sed congue eros egestas nec. Vivamus nulla orci, finibus sit amet augue sit amet, pharetra scelerisque velit. Quisque nec libero a dui facilisis condimentum non elementum ante. Pellentesque tincidunt quam id fermentum ultrices. Donec ac feugiat nisl. Phasellus dictum justo a risus ullamcorper, nec auctor ex accumsan. Donec quis tempus nunc. </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default NossoTime
