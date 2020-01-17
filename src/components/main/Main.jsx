import React from "react";
import uuid from "uuid";

import "./Main.css";
import Article from "../article/Article.jsx";

let articles = [
    {
        header: "Neuron",
        meta: "4 min",
        summury:
            "A neuron (also called neurone or nerve cell) is a cell that carries electrical impulses. Neurons are the basic (functional and structural) units of our nervous system.",
        url: "imgs/neuron.png"
    },
    {
        header: "Artificial neural network",
        meta: "9 min",
        summury:
            "Artificial neural networks (ANN) or connectionist systems are computing systems vaguely inspired by the biological neural networks that constitute animal brains.",
        url: "imgs/NeuralNetwork.png"
    },
    {
        header: "Convolutional neural network",
        meta: "7 min",
        summury:
            "In deep learning, a convolutional neural network (CNN, or ConvNet) is a class of deep neural networks, most commonly applied to analyzing visual imagery.",
        url: "imgs/LeNet-5.png"
    }
];

const Main = () => {
    const getArticles = () => {
        return articles.map(articleData => <Article key={uuid.v1()} data={articleData} />);
    };

    return <main>{getArticles()}</main>;
};

export default Main;
