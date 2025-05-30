---
title: "Towards Evaluating Explanations of Vision Transformers for Medical Imaging"
authors: "Piotr Komorowski, Hubert Baniecki, Przemyslaw Biecek"
collection: publications
permalink: /publication/2023-06-17-transformer
hashtags: '<font color="red">#Red-Teaming</font> <font color="blue">#BioMed</font>'
excerpt: "This paper evaluates the interpretability of Vision Transformers (ViTs) in medical imaging by comparing explanation methods on chest X-ray classification tasks. It introduces criteria like faithfulness, sensitivity, and complexity, and finds that Layerwise Relevance Propagation outperforms other techniques, offering more accurate and reliable insights into ViT decision-making."
date: 2023-06-17
venue: 'Conference on Computer Vision and Pattern Recognition Workshops (CVPRW)'
paperurl: 'https://openaccess.thecvf.com/content/CVPR2023W/XAI4CV/html/Komorowski_Towards_Evaluating_Explanations_of_Vision_Transformers_for_Medical_Imaging_CVPRW_2023_paper.html'
---

As deep learning models increasingly find applications in critical domains such as medical imaging, the need for transparent and trustworthy decision-making becomes paramount. Many explainability methods provide insights into how these models make predictions by attributing importance to input features. As Vision Transformer (ViT) becomes a promising alternative to convolutional neural networks for image classification, its interpretability remains an open research question. This paper investigates the performance of various interpretation methods on a ViT applied to classify chest X-ray images. We introduce the notion of evaluating faithfulness, sensitivity, and complexity of ViT explanations. The obtained results indicate that Layerwise relevance propagation for transformers outperforms Local interpretable model-agnostic explanations and Attention visualization, providing a more accurate and reliable representation of what a ViT has actually learned. Our findings provide insights into the applicability of ViT explanations in medical imaging and highlight the importance of using appropriate evaluation criteria for comparing them.

