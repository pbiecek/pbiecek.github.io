---
title: "The Merging Path Plot: adaptive fusing of k-groups with likelihood-based model selection"
authors: "Agnieszka Sitko, Przemyslaw Biecek"
collection: publications
permalink: /publication/2017-08-01-factorMerger
hashtags: '<font color="#00006B">#R</font> <font color="#006B00">#software</font>'
excerpt: 'This article introduces the Merging Path Plot and the factorMerger R package, which provide an intuitive method to explore and visualize dissimilarities among k-groups after rejecting the global null hypothesis. Unlike traditional pairwise post hoc tests, this approach leverages Likelihood Ratio Tests to effectively summarize group differences, especially when dealing with many groups.'
date: 2017-08-01
venue: 'arxiv'
paperurl: 'https://arxiv.org/abs/1709.04412'
---

There are many statistical tests that verify the null hypothesis: the variable of interest has the same distribution among k-groups. But once the null hypothesis is rejected, how to present the structure of dissimilarity between groups? In this article, we introduce The Merging Path Plot - a methodology, and factorMerger - an R package, for exploration and visualization of k-group dissimilarities. Comparison of k-groups is one of the most important issues in exploratory analyses and it has zillions of applications. The classical solution is to test a~null hypothesis that observations from all groups come from the same distribution. If the global null hypothesis is rejected, a~more detailed analysis of differences among pairs of groups is performed. The traditional approach is to use pairwise post hoc tests in order to verify which groups differ significantly. However, this approach fails with a large number of groups in both interpretation and visualization layer. The~Merging Path Plot methodology solves this problem by using an easy-to-understand description of dissimilarity among groups based on Likelihood Ratio Test (LRT) statistic.

