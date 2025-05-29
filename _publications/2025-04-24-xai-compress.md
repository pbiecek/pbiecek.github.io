---
title: "Efficient and Accurate Explanation Estimation with Distribution Compression"
authors: "Hubert_Baniecki, Giuseppe Casalicchio, Bernd Bischl, Przemyslaw Biecek"
collection: publications
permalink: /publication/2025-04-24-xai-compress
hashtags: '<font color="#B5651D">#post-hoc</font> <font color="#1B1B1B">#Theory-XAI</font>'
excerpt: 'This paper presents Compress Then Explain (CTE), a novel paradigm that enhances the efficiency and accuracy of post-hoc explanation methods by replacing i.i.d. sampling with kernel-based distribution compression. CTE reduces computational overhead and improves approximation quality of feature attributions, achieving comparable results with 2–3× fewer model evaluations across various explanation techniques.'
date: 2025-04-24
venue: 'International Conference on Learning Representations (ICLR) Spotlight'
paperurl: 'https://openreview.net/forum?id=LiUfN9h0Lx'
---

We discover a theoretical connection between explanation estimation and distribution compression that significantly improves the approximation of feature attributions, importance, and effects. While the exact computation of various machine learning explanations requires numerous model inferences and becomes impractical, the computational cost of approximation increases with an ever-increasing size of data and model parameters. We show that the standard i.i.d. sampling used in a broad spectrum of algorithms for post-hoc explanation leads to an approximation error worthy of improvement. To this end, we introduce Compress Then Explain (CTE), a new paradigm of sample-efficient explainability. It relies on distribution compression through kernel thinning to obtain a data sample that best approximates its marginal distribution. CTE significantly improves the accuracy and stability of explanation estimation with negligible computational overhead. It often achieves an on-par explanation approximation error 2-3x faster by using fewer samples, i.e. requiring 2-3x fewer model evaluations. CTE is a simple, yet powerful, plug-in for any explanation method that now relies on i.i.d. sampling.
