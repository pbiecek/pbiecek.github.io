---
title: "Exploring local explanations of nonlinear models using animated linear projections"
authors: "Nicholas Spyrison, Dianne Cook, Przemyslaw Biecek "
collection: publications
permalink: /publication/2025-01-31-shap-explore
hashtags: '<font color="#add8e6">#model-exploration</font> <font color="#ffa500">#shap</font>'
excerpt: 'This paper addresses limitations of local variable attributions (LVAs) in handling predictor interactions by introducing a method that converts LVAs into linear projections, visualized via radial tours. Implemented in the R package cheem, this approach enhances interpretability of complex models by revealing interaction effects, outliers, and prediction errors across diverse categorical and quantitative datasets.'
date: 2025-01-31
venue: 'Computational Statistics'
paperurl: 'https://link.springer.com/article/10.1007/s00180-023-01453-2'
---

The increased predictive power of machine learning models comes at the cost of increased complexity and loss of interpretability, particularly in comparison to parametric statistical models. This trade-off has led to the emergence of eXplainable AI (XAI) which provides methods, such as local explanations (LEs) and local variable attributions (LVAs), to shed light on how a model use predictors to arrive at a prediction. These provide a point estimate of the linear variable importance in the vicinity of a single observation. However, LVAs tend not to effectively handle association between predictors. To understand how the interaction between predictors affects the variable importance estimate, we can convert LVAs into linear projections and use the radial tour. This is also useful for learning how a model has made a mistake, or the effect of outliers, or the clustering of observations. The approach is illustrated with examples from categorical (penguin species, chocolate types) and quantitative (soccer/football salaries, house prices) response models. The methods are implemented in the R package cheem, available on CRAN.
