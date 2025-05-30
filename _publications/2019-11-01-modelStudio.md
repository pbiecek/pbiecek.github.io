---
title: "modelStudio: Interactive Studio with Explanations for ML Predictive Models"
authors: "Hubert Baniecki, Przemyslaw Biecek"
collection: publications
permalink: /publication/2019-11-01-modelStudio
hashtags: '<font color="#00006B">#R</font> <font color="#006B00">#software</font>'
excerpt: 'This paper discusses the growing need for automating the explanation of machine learning models, paralleling trends in AutoML and AutoEDA, due to the complexity and time demands of interpretability tasks. While tools like DALEX, lime, and shap support interpretability, the paper critiques current automation solutions like modelDown for focusing only on global explanations and lacking interactivity, highlighting the need for more dynamic and accessible XAI tools.'
date: 2019-11-01
venue: 'The Journal of Open Source Software'
paperurl: 'https://joss.theoj.org/papers/10.21105/joss.01798.pdf'
---

Machine learning predictive models are widely used in many areas of business and research.
Their rising popularity is due to them being effective but often leads to problems with explaining their prediction. This has led to development of many Interpretable Machine Learning
tools, e.g., DALEX (Biecek, 2018) R package, lime (Ribeiro, Singh, & Guestrin, 2016) and
shap (Lundberg & Lee, 2017) Python packages and H2o.ai Driverless AI (Hall, Gill,
Kurka, & Phan, 2017).
Nowadays, we can see a huge demand for automation in many areas. This is how Automated
Machine Learning and Automated Exploratory Data Analysis came to existence. AutoML
(Truong et al., 2019) and AutoEDA (Staniak & Biecek, 2018) tools not only speed up the
model development process but also often lead to new discoveries or higher quality of models.
Explaining predictive models might be a time consuming and tedious task. Libraries for
interpretable machine learning (Biecek, 2018; Carme, 2019; Jenkins, Nori, Koch, & Caruana,
2019; Meudec, 2019; Molnar, Casalicchio, & Bischl, 2018) require high programing skills and
endless exploration of different aspects of a predictive model.
There are tools for automation of the XAI process like modelDown (Romaszko, Tatarynowicz,
Urbański, & Biecek, 2019) which produces static HTML site to compare and explain various models. Unfortunately, such tools are focused on global level explanations and deliver
monotonous experience.
