import React, { useState, useEffect } from 'react';
import './model.css';
import Carousel3D from './Carrucel3D';
const Model = () => {
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingIndex, setTypingIndex] = useState(0);
    const animatedText = 'A partir de febrero 2025 ofreceremos servicios de impresión 3d en 3DXGoAm, mientras tanto les deseamos feliz navidad';
    const typingSpeed = 10; // Velocidad de escritura en ms
    const deletingSpeed = 50; // Velocidad de borrado en ms
    const staticTime = 10000; // Tiempo estático de 5 segundos en ms

    useEffect(() => {
        let typingTimeout: NodeJS.Timeout;
        if (!isDeleting && typingIndex < animatedText.length) {
            typingTimeout = setTimeout(() => {
                setDisplayedText(prev => prev + animatedText.charAt(typingIndex));
                setTypingIndex(prev => prev + 1);
            }, typingSpeed);
        } else if (!isDeleting && typingIndex === animatedText.length) {
            typingTimeout = setTimeout(() => {
                setIsDeleting(true);
            }, staticTime);
        } else if (isDeleting && typingIndex > 0) {
            typingTimeout = setTimeout(() => {
                setDisplayedText(prev => prev.slice(0, -1));
                setTypingIndex(prev => prev - 1);
            }, deletingSpeed);
        } else if (isDeleting && typingIndex === 0) {
            setIsDeleting(false);
        }

        return () => clearTimeout(typingTimeout);
    }, [displayedText, isDeleting, typingIndex, animatedText]);

    return (
        <div className="model-container">
            <h2 className="animatedText top-banner">
                {displayedText}
            </h2>
            {/* <Carousel3D /> */}
            <h2 className="animatedText bottom-banner">
                {displayedText}
            </h2>
        </div>
    );
};

export default Model;

