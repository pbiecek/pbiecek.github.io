---
title: "Rethinking Visual Counterfactual Explanations Through Region Constraint"
collection: publications
permalink: /publication/2025-04-24-rethinking-vce
excerpt: 'This paper introduces region-constrained visual counterfactual explanations (RVCEs), which limit modifications to predefined image regions to enhance interpretability and reduce cognitive biases in classifier explanations. By leveraging a novel Region-Constrained Counterfactual Schrödinger Bridge (RCSB), the approach achieves state-of-the-art performance while enabling precise and interactive counterfactual reasoning.
	<font color="#8B0000 red">#GenXAI</font> <font color="#008B00">#counterfactuals</font>'
date: 2025-04-24
venue: 'International Conference on Learning Representations (ICLR)'
paperurl: 'https://openreview.net/forum?id=gqeXXrIMr0'
---

Visual counterfactual explanations (VCEs) have recently gained immense popularity as a tool for clarifying the decision-making process of image classifiers. This trend is largely motivated by what these explanations promise to deliver -- indicate semantically meaningful factors that change the classifier's decision. However, we argue that current state-of-the-art approaches lack a crucial component -- the region constraint -- whose absence prevents from drawing explicit conclusions, and may even lead to faulty reasoning due to phenomenons like confirmation bias. To address the issue of previous methods, which modify images in a very entangled and widely dispersed manner, we propose region-constrained VCEs (RVCEs), which assume that only a predefined image region can be modified to influence the model's prediction. To effectively sample from this subclass of VCEs, we propose Region-Constrained Counterfactual Schrödinger Bridge (RCSB), an adaptation of a tractable subclass of Schrödinger Bridges to the problem of conditional inpainting, where the conditioning signal originates from the classifier of interest. In addition to setting a new state-of-the-art by a large margin, we extend RCSB to allow for exact counterfactual reasoning, where the predefined region contains only the factor of interest, and incorporating the user to actively interact with the RVCE by predefining the regions manually.
