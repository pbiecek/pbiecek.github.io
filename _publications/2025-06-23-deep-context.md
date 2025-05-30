---
title: "Deep spatial context: when attention-based models meet spatial regression"
authors: "Paulina Tomaszewska, Elżbieta Sienkiewicz, Mai P. Hoang, Przemyslaw Biecek"
collection: publications
permalink: /publication/2025-06-23-deep-context
hashtags: '<font color="purple">#Spatial-XAI</font> <font color="blue">#BioMed</font>'
excerpt: 'This paper introduces DSCon, a method for analyzing attention-based vision models through quantitative spatial context measures—SCMfeatures, SCMtargets, and SCMresiduals—enabled by integrating spatial regression into the analysis pipeline. Inspired by histopathology but broadly applicable, DSCon reveals that spatial context plays a greater role in tumor classification than in normal tissues, with its influence diminishing as neighborhood size increases and being most prominent within the feature space.'
date: 2025-06-23
venue: 'International Conference on Artificial Intelligence in Medicine (AIME)'
paperurl: 'https://arxiv.org/abs/2401.10044'
---

We propose 'Deep spatial context' (DSCon) method, which serves for investigation of the attention-based vision models using the concept of spatial context. It was inspired by histopathologists, however, the method can be applied to various domains. The DSCon allows for a quantitative measure of the spatial context's role using three Spatial Context Measures: SCMfeatures, SCMtargets, SCMresiduals to distinguish whether the spatial context is observable within the features of neighboring regions, their target values (attention scores) or residuals, respectively. It is achieved by integrating spatial regression into the pipeline. The DSCon helps to verify research questions. The experiments reveal that spatial relationships are much bigger in the case of the classification of tumor lesions than normal tissues. Moreover, it turns out that the larger the size of the neighborhood taken into account within spatial regression, the less valuable contextual information is. Furthermore, it is observed that the spatial context measure is the largest when considered within the feature space as opposed to the

