import React from "react";

import "./Article.css";

const Article = () => {
    return (
        <>
            <article>
                <header>
                    <h3>Neuron</h3>
                    <div>
                        <p>10 min</p>
                    </div>
                </header>
                <p>
                    A neuron (also called neurone or nerve cell) is a cell that
                    carries electrical impulses. Neurons are the basic
                    (functional and structural) units of our nervous system.
                </p>
                <img src="imgs/neuron.png" alt="neuron" />
            </article>
            <article>
                <header>
                    <h3>Artificial neural network</h3>
                    <div>
                        <p>4 min</p>
                    </div>
                </header>
                <p>
                    Artificial neural networks (ANN) or connectionist systems
                    are computing systems vaguely inspired by the biological
                    neural networks that constitute animal brains.
                </p>
                <img src="imgs/NeuralNetwork.png" alt="neuron" />
            </article>
        </>
    );
};

export default Article;
