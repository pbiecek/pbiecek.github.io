---
title: "Red Teaming Models for Hyperspectral Image Analysis Using Explainable AI"
authors: "Vladimir Zaigrajew, Hubert Baniecki, Lukasz Tulczyjew, Agata M. Wijata, Jakub Nalepa, Nicolas Longépé, Przemyslaw Biecek"
collection: publications
permalink: /publication/2024-03-12-RED-Hyperspectral
hashtags: '<font color="red">#Red-Teaming</font> <font color="#003300">#Hyperspectral</font>'
excerpt: "This paper presents a red-teaming methodology for evaluating machine learning models in remote sensing, specifically targeting hyperspectral image analysis in the HYPERVIEW challenge. By applying explainable AI techniques, the authors expose critical model weaknesses, propose a more efficient alternative using only 1% of input features with minimal performance loss, and introduce a domain-informed visualization approach tailored for hyperspectral data interpretation."
date: 2024-03-12
venue: 'ICLR Machine Learning for Remote Sensing (ML4RS) Workshop'
paperurl: 'https://arxiv.org/abs/2403.08017'
---

Remote sensing (RS) applications in the space domain demand machine learning (ML) models that are reliable, robust, and quality-assured, making red teaming a vital approach for identifying and exposing potential flaws and biases. Since both fields advance independently, there is a notable gap in integrating red teaming strategies into RS. This paper introduces a methodology for examining ML models operating on hyperspectral images within the HYPERVIEW challenge, focusing on soil parameters' estimation. We use post-hoc explanation methods from the Explainable AI (XAI) domain to critically assess the best performing model that won the HYPERVIEW challenge and served as an inspiration for the model deployed on board the INTUITION-1 hyperspectral mission. Our approach effectively red teams the model by pinpointing and validating key shortcomings, constructing a model that achieves comparable performance using just 1% of the input features and a mere up to 5% performance loss. Additionally, we propose a novel way of visualizing explanations that integrate domain-specific information about hyperspectral bands (wavelengths) and data transformations to better suit interpreting models for hyperspectral image analysis.
