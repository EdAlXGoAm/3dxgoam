import React, { useState } from 'react';
import './Carousel3D.css';

const Carousel3D = () => {
    const tarjetas = [
        { id: 1, imagen: 'https://i.imgur.com/PqLHRLZ.jpeg', titulo: 'Llavero de Taza o Cupcake', precio: '$35' },
        { id: 2, imagen: 'https://i.imgur.com/TtI0876.jpeg', titulo: 'Llavero de Caramelo', precio: '$35' },
        { id: 3, imagen: 'https://i.imgur.com/yUNT22Q.jpeg', titulo: 'Esfera de Muñeco de Nieve', precio: '$35' },
        { id: 4, imagen: 'https://i.imgur.com/PhK1IS1.png', titulo: 'Arbol de Navidad', precio: '$35' },
        { id: 5, imagen: 'https://i.imgur.com/J7axiT4.png', titulo: 'Trineo para intercambio', precio: '$120' },
        { id: 6, imagen: 'https://i.imgur.com/N5uVQm4.jpeg', titulo: 'Hombre de Jengibre', precio: '$200' },
        { id: 7, imagen: 'https://i.imgur.com/PHgWyi7.jpeg', titulo: 'Casa de Jengibre', precio: '$850' }
    ];

    const [current, setCurrent] = useState(0);

    const prevCard = () => {
        setCurrent((prev: number) => (prev === 0 ? tarjetas.length - 1 : prev - 1));
    };

    const nextCard = () => {
        setCurrent((prev) => (prev === tarjetas.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="carousel3d-container">
            <div className="carousel3d">
                {tarjetas.map((tarjeta, index) => (
                    <div
                        key={tarjeta.id}
                        className={`card ${index === current ? 'visible' : ''}`}
                        style={{ '--i': (360 / tarjetas.length) * index } as React.CSSProperties}
                    >
                        <img src={tarjeta.imagen} alt={tarjeta.titulo} />
                        <h3>{tarjeta.titulo}</h3>
                        <p>{tarjeta.precio}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel3D;