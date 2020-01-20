import React from "react";
import uuid from "uuid";

import Article from "../article/Article.jsx";

let articles = [
  {
    header: "Neuron",
    meta: "4 min",
    summury:
      "A neuron (also called neurone or nerve cell) is a cell that carries electrical impulses. Neurons are the basic (functional and structural) units of our nervous system.",
    url: "imgs/neuron.png",
    date: "2019-11-14",
    path: "neuron"
  },
  {
    header: "Artificial neural network",
    meta: "9 min",
    summury:
      "Artificial neural networks (ANN) or connectionist systems are computing systems vaguely inspired by the biological neural networks that constitute animal brains.",
    url: "imgs/NeuralNetwork.png",
    date: "2019-01-19",
    path: "artificial_neural_network"
  },
  {
    header: "Convolutional neural network",
    meta: "7 min",
    summury:
      "In deep learning, a convolutional neural network (CNN, or ConvNet) is a class of deep neural networks, most commonly applied to analyzing visual imagery.",
    url: "imgs/LeNet-5.png",
    date: "2019-05-01",
    path: "convolutional_neural_network"
  }
];

const Articles = () => {
  const getArticles = () => {
    return articles.map(articleData => <Article data={articleData} />);
  };

  return <main>{getArticles()}</main>;
};

export default Articles;
