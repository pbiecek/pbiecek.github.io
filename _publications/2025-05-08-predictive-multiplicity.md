---
title: "Investigating the impact of balancing, filtering, and complexity on predictive multiplicity: A data-centric perspective"
authors: "Mustafa Cavus, Przemyslaw Biecek"
collection: publications
permalink: /publication/2025-05-08-predictive-multiplicity
hashtags: '<font color="red">#Rashomon</font> <font color="#00008B">#AutoML</font>'
excerpt: 'This paper explores how data preprocessing techniques, particularly balancing and filtering, influence predictive multiplicity and model stability under the Rashomon effect across 21 real-world datasets. The findings highlight the trade-offs in data-centric AI approaches, revealing that while filtering can enhance generalization, certain balancing methods may exacerbate predictive multiplicity, especially in complex datasets.'
date: 2025-05-08
venue: 'Information Fusion'
paperurl: 'https://www.sciencedirect.com/science/article/abs/pii/S1566253525003161'
---

The Rashomon effect presents a significant challenge in model selection. It occurs when multiple models achieve similar performance on a dataset but produce different predictions, resulting in predictive multiplicity. This is especially problematic in high-stakes environments, where arbitrary model outcomes can have serious consequences. Traditional model selection methods prioritize accuracy and fail to address this issue. Factors such as class imbalance and irrelevant variables further complicate the situation, making it harder for models to provide trustworthy predictions. Data-centric AI approaches can mitigate these problems by prioritizing data optimization, particularly through preprocessing techniques. However, recent studies suggest preprocessing methods may inadvertently inflate predictive multiplicity. This paper investigates how data preprocessing techniques like balancing and filtering methods impact predictive multiplicity and model stability, considering the complexity of the data. We conduct the experiments on 21 real-world datasets, applying various balancing and filtering techniques, and assess the level of predictive multiplicity introduced by these methods by leveraging the Rashomon effect. Additionally, we examine how filtering techniques reduce redundancy and enhance model generalization. The findings provide insights into the relationship between balancing methods, data complexity, and predictive multiplicity, demonstrating how data-centric AI strategies can improve model performance.
