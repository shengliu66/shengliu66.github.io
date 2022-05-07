---
layout: archive
title: ""
permalink: /projects/
author_profile: true
---

{% include base_path %}

## Adaptive Early-Learning Correction for Semantic Segmentation
<b> CVPR Oral </b>
Deep learning in the presence of noisy annotations has been studied extensively in classification, but much less in segmentation tasks. In this work, we study the learning dynamics of deep segmentation networks trained on inaccurately-annotated data. We discover a phenomenon that has been previously reported in the context of classification: the networks tend to first fit the clean pixel-level labels during an "early-learning" phase, before eventually memorizing the false annotations. However, in contrast to classification, memorization in segmentation does not arise simultaneously for all semantic categories. Inspired by these findings, we propose a new method for segmentation from noisy annotations with two key elements. First, we detect the beginning of the memorization phase separately for each category during training. This allows us to adaptively correct the noisy annotations in order to exploit early learning. Second, we incorporate a regularization term that enforces consistency across scales to boost robustness against annotation noise. Our method outperforms standard approaches on a medical-imaging segmentation task where noises are synthesized to mimic human annotation errors. It also provides robustness to realistic noisy annotations present in weakly-supervised semantic segmentation, achieving state-of-the-art results on PASCAL VOC 2012.

<p float="left" align="center">
<img src="{{ site.baseurl }}/images/ADELE.png" width="500" /> 
<figcaption align="center">
Visualization of the segmentation results of the baseline method SEAM and the baseline combined with the proposed ADaptive Early-Learning corrEction (ADELE).
</figcaption>
</p>

## Early-learning Regularization Prevents Memorization of Noisy Labels 
<b> NeurIPS 2020 </b>
We propose a novel framework to perform classification via deep learning in the presence of noisy annotations. When trained on noisy labels, deep neural networks have been observed to first fit the training data with clean labels during an early learning phase, before eventually memorizing the examples with false labels. Our technique exploits the progress of the early learning phase via regularization to perform classification from noisy labels. There are two key elements to our approach. First, we leverage semi-supervised learning techniques to produce target probabilities based on the model outputs. Second, we design a regularization term that steers the model towards these targets, implicitly preventing memorization of the false labels. The resulting framework is shown to provide robustness to noisy annotations on several standard benchmarks and real-world datasets, where it achieves results comparable to the state of the art.

<p float="left" align="center">
<img src="{{ site.baseurl }}/images/clean_label_simplexheatmap2.gif" width="400" /> 
<img src="{{ site.baseurl }}/images/false_label_simplexheatmap.gif" width="400" /> 
<figcaption align="center">
Learning path of sample with correct label (left) and sample with wrong label (right). Corners correspond to one-hot
vectors. Bright green represents model's prediction: when the example is wrongly labeled, the clean label is predicted at initialization, and then wrong label is predicted at the end of training. The model is trained with first 3 classes in CIFAR10.
</figcaption>
</p>


## Normalization Layer Improve Robustness of Convolutional Neural Networks
<b> NeurIPS 2021 </b>
Normalization techniques have become a basic component in modern convolutional neural networks (ConvNets). In particular, many recent works demonstrate that promoting the orthogonality of the weights helps train deep models and improve robustness. For ConvNets, most existing methods are based on penalizing or normalizing weight matrices derived from concatenating or flattening the convolutional kernels. These methods often destroy or ignore the benign convolutional structure of the kernels; therefore, they are often expensive or impractical for deep ConvNets. In contrast, we introduce a simple and efficient Convolutional Normalization (ConvNorm) method that can fully exploit the convolutional structure in the Fourier domain and serve as a simple plug-and-play module to be conveniently incorporated into any ConvNets. Our method is inspired by recent work on preconditioning methods for convolutional sparse coding and can effectively promote each layer's channel-wise isometry. Furthermore, we show that our ConvNorm can reduce the layerwise spectral norm of the weight matrices and hence improve the Lipschitzness of the network, leading to easier training and improved robustness for deep ConvNets. Applied to classification under noise corruptions and generative adversarial network (GAN), we show that the ConvNorm improves the robustness of common ConvNets such as ResNet and the performance of GAN. We verify our findings via numerical experiments on CIFAR and ImageNet.

<p float="left" align="center">
<img
    src="{{ site.baseurl }}/images/ConvNorm.jpg"
    alt="ConvNorm"
    width="400"
>
<figcaption align="center">
Comparison between BatchNorm and ConvNorm on activations of $k = 1,...,C$ channels. BatchNorm subtracts and multiplies the activations of each channel by computed scalars: mean $\mu$ and variance $\sigma^2$, before a per-channel affine transform parameterized by learned parameters $\betta$ and $\gamma$; ConvNorm performs per-channel convolution with precomputed kernel $v$ to normalize the spectrum of the weight matrix for the convolution layer, following with a channel-wise convolution with learned kernel $r$ as the affine transform.</figcaption>
</p>


## Early Detection of Alzheimer's Disease with Convoltuional Neural Networks 
<b> Nature Scientific Reports </b>
Early diagnosis of Alzheimer’s disease plays a pivotal role in patient care and clinical trials. In this study, we have developed a new approach based on 3D deep convolutional neural networks to accurately differentiate mild Alzheimer’s disease dementia from mild cognitive impairment and cognitively normal individuals using structural MRIs. For comparison, we have built a reference model based on the volumes and thickness of previously reported brain regions that are known to be implicated in disease progression. We validate both models on an internal held-out cohort from The Alzheimer's Disease Neuroimaging Initiative (ADNI) and on an external independent cohort from The National Alzheimer's Coordinating Center (NACC).
<p float="left" align="center">
<img
    src="{{ site.baseurl }}/images/AD_all_slices.gif"
    alt="Feature Importance of Deep Learning model"
    width="400"
>
<figcaption align="center">
Visualization of the aggregated importance of each voxel (in yellow) in the deep learning model when classifying subjects into Cognitive Normal, Mild Cognitive Impairement, and Alzheimer's Disease.
</figcaption>
</p>

