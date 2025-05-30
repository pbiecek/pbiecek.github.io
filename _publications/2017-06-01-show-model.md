---
title: "Show Me Your Model: tools for visualisation of statistical models"
authors: "Przemyslaw Biecek"
collection: publications
permalink: /publication/2017-06-01-show-model
hashtags: '<font color="#00006B">#R</font> <font color="#006B00">#software</font>'
excerpt: 'This talk explores the evolving landscape of statistical model visualization, highlighting the diversity of existing R packages and the lack of a unified structure across them. It advocates for a consistent grammar of model visualization—akin to ggplot2 grammar of graphics—enabled by tools like broom and supported by emerging theoretical frameworks.'
date: 2017-06-01
venue: 'UseR'
paperurl: 'https://www.r-project.org/nosvn/conferences/useR-2017/uploads/abstract_booklet.pdf#page=132'
---

The ggplot2 (Wickham 2009) package changed the way how we approach to data visualisation. Instead of looking for suitable type of a plot out of dozens of predefined templates now we express the relation among variables with a well defined grammar based on the excellent book The Grammar of Graphics (Wilkinson 2006). Similar revolution is happening with tools for visualisation of statistical models. In the CRAN repository, one may find a lot of great packages that graphically explain a structure or diagnostic for some family of statistical models. Just to mention few known and powerful packages: rms, forestmodel and regtools (regression models), survminer (survival models), ggRandomForests (random forest based models), factoextra (multivariate structure exploration), factorMerger (one-way ANOVA) and many, many others. They are great, but they do not share same logic nor structure. New packages from the tidyverse, like broom (Robinson 2017), creates an opportunity to build an unified interface for model exploration and visualisation for large collection of statistical models. And there is more and more articles that set theoretical foundations for unified grammar of model visualization (see for example Wickham, Cook, and Hofmann 2015). In this talk I am going to present various approaches to the model visualisation, give an overview of selected existing packages for visualisation of statistical models and discuss proposition for a unified grammar of model visualisation.

