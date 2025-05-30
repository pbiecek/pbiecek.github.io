---
title: "Models in the Wild: On Corruption Robustness of Neural NLP Systems"
authors: "Barbara Rychalska, Dominika Basaj, Alicja Gosiewska, Przemyslaw Biecek"
collection: publications
permalink: /publication/2019-12-01-WildModels
hashtags: '<font color="#B59410">#NLP</font> <font color="#FFD8B2">#benchmark</font>'
excerpt: 'This paper introduces WildNLP, a framework for evaluating the robustness of NLP models against natural text corruptions like typos and keyboard errors across four major tasks. The study reveals that high-performing models often lack robustness, though modern embedding techniques and adversarial training can improve stability; the framework is publicly available for further research.'
date: 2019-12-01
venue: 'International Conference on Neural Information Processing (ICONIP)'
paperurl: 'https://link.springer.com/chapter/10.1007/978-3-030-36718-3_20'
---

Natural Language Processing models lack a unified approach to robustness testing. In this paper we introduce WildNLP - a framework for testing model stability in a natural setting where text corruptions such as keyboard errors or misspelling occur. We compare robustness of deep learning models from 4 popular NLP tasks: Q&A, NLI, NER and Sentiment Analysis by testing their performance on aspects introduced in the framework. In particular, we focus on a comparison between recent state-of-the-art text representations and non-contextualized word embeddings. In order to improve robustness, we perform adversarial training on selected aspects and check its transferability to the improvement of models with various corruption types. We find that the high performance of models does not ensure sufficient robustness, although modern embedding techniques help to improve it. We release the code of WildNLP framework for the community.
