---
title: "Consolidated learning: a domain-specific model-free optimization strategy with validation on metaMIMIC benchmarks"
authors: "Katarzyna Woźnica, Mateusz Grzyb, Zuzanna Trafas, Przemyslaw Biecek "
collection: publications
permalink: /publication/2023-07-08-consolidated-learning
hashtags: '<font color="#00008B">#AutoML</font> <font color="blue">#BioMed</font>'
excerpt: 'This paper introduces consolidated learning, a novel approach to hyperparameter tuning that optimizes across multiple similar tasks rather than focusing on single-task performance, addressing practical challenges in real-world model development. By leveraging static portfolios of hyperparameter configurations and effective transfer across tasks, the method demonstrates strong anytime performance and efficiency, validated on XGBoost using the metaMIMIC benchmark derived from MIMIC-IV medical data.'
date: 2023-07-08
venue: 'Machine Learning'
paperurl: 'https://link.springer.com/article/10.1007/s10994-023-06359-0'
---

For many machine learning models, a choice of hyperparameters is a crucial step towards achieving high performance. Prevalent meta-learning approaches focus on obtaining good hyperparameter configurations with a limited computational budget for a completely new task based on the results obtained from the prior tasks. This paper proposes a new formulation of the tuning problem, called consolidated learning, more suited to practical challenges faced by model developers, in which a large number of predictive models are created on similar datasets. In such settings, we are interested in the total optimization time rather than tuning for a single task. We show that a carefully selected static portfolio of hyperparameter configurations yields good results for anytime optimization, while maintaining the ease of use and implementation. Moreover, we point out how to construct such a portfolio for specific domains. The improvement in the optimization is possible due to the more efficient transfer of hyperparameter configurations between similar tasks. We demonstrate the effectiveness of this approach through an empirical study for the XGBoost algorithm and the newly created metaMIMIC benchmarks of predictive tasks extracted from the MIMIC-IV medical database. In the paper, we show that the potential of consolidated learning is considerably greater due to its compatibility with many machine learning application scenarios.

