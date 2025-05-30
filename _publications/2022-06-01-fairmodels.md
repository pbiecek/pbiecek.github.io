---
title: "fairmodels: a Flexible Tool for Bias Detection, Visualization, and Mitigation in Binary Classification Models"
authors: "Jakub Wiśniewski, Przemyslaw Biecek"
collection: publications
permalink: /publication/2022-06-01-fairmodels
hashtags: '<font color="#00006B">#R</font> <font color="#006B00">#software</font>'
excerpt: 'This article introduces fairmodels, an R package designed to assess and mitigate bias in binary classification models through a model-agnostic framework. It provides comprehensive tools for fairness validation, visualization, and comparison, enabling responsible development of predictive systems by addressing potential discrimination in historical data.'
date: 2022-06-01
venue: 'The R Journal'
paperurl: 'https://journal.r-project.org/articles/RJ-2022-019/RJ-2022-019.pdf'
---

Machine learning decision systems are becoming omnipresent in our lives. From dating apps
to rating loan seekers, algorithms affect both our well-being and future. Typically, however, these
systems are not infallible. Moreover, complex predictive models are eager to learn social biases present
in historical data that may increase discrimination. If we want to create models responsibly, we need
tools for in-depth validation of models also from potential discrimination. This article introduces an R
package fairmodels that helps to validate fairness and eliminate bias in binary classification models
quickly and flexibly. The fairmodels package offers a model-agnostic approach to bias detection,
visualization, and mitigation. The implemented functions and fairness metrics enable model fairness
validation from different perspectives. In addition, the package includes a series of methods for bias
mitigation that aim to diminish the discrimination in the model. The package is designed to examine a
single model and facilitate comparisons between multiple models.
