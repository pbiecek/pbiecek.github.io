---
title: "LIMEcraft: handcrafted superpixel selection and inspection for Visual eXplanations"
authors: "Weronika Hryniewska, Adrianna Grudzień, Przemyslaw Biecek "
collection: publications
permalink: /publication/2022-07-14-LIMEcraft
hashtags: '<font color="blue">#BioMed</font> <font color="#90ee90">#Interactive-XAI</font>'
excerpt: 'This paper presents LIMEcraft, an interactive tool designed to improve the interpretability and safety of deep learning models by enabling users to select and examine semantically meaningful image regions during explanation. By going beyond static saliency maps, LIMEcraft enhances bias detection and model fairness assessment, offering a more thorough understanding of image-based predictions.'
date: 2022-07-14
venue: 'Machine Learning'
paperurl: 'https://link.springer.com/article/10.1007/s10994-022-06204-w'
---

The increased interest in deep learning applications, and their hard-to-detect biases result in the need to validate and explain complex models. However, current explanation methods are limited as far as both the explanation of the reasoning process and prediction results are concerned. They usually only show the location in the image that was important for model prediction. The lack of possibility to interact with explanations makes it difficult to verify and understand exactly how the model works. This creates a significant risk when using the model. The risk is compounded by the fact that explanations do not take into account the semantic meaning of the explained objects. To escape from the trap of static and meaningless explanations, we propose a tool and a process called LIMEcraft. LIMEcraft enhances the process of explanation by allowing a user to interactively select semantically consistent areas and thoroughly examine the prediction for the image instance in case of many image features. Experiments on several models show that our tool improves model safety by inspecting model fairness for image pieces that may indicate model bias. The code is available at: http://github.com/MI2DataLab/LIMEcraft.
