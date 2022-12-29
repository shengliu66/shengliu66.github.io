---
layout: archive
title: ""
permalink: /projects/
author_profile: true
---

{% include base_path %}


## [Avoiding Spurious Correlations via Logit Correction](https://arxiv.org/abs/2212.01433)

We propose the logit correction (LC) loss, a simple yet effective improvement on the softmax cross-entropy loss, to correct the sample logit. We demonstrate that minimizing the LC loss is equivalent to maximizing the group-balanced accuracy, so the proposed LC could mitigate the negative impacts of spurious correlations.

<p float="left" align="center">
<img src="{{ site.baseurl }}/images/two-branch.png" width="700" /> 
<figcaption align="center">
The overview of our proposed logit correction approach on the
Waterbirds dataset, where the background (water/land) is spuriously correlated with the foreground (waterbird/landbird). Most training samples belong to the group where the background matches the bird type (highlighted in red); While only a small fraction belongs to the groups where the background mismatches the bird type (highlighted in green). 
The ERM network and the robust network are trained simultaneously. The ERM network is trained with a generalized cross-entropy (GCE) loss to be intentionally biased toward the majority group. The logit correction loss corrects the logits of the robust network by a term $\hat{p}$ which is produced by the predictions of the ERM network. The robust network is trained with the standard cross entropy loss after logit correction.
</figcaption>
</p>



## [Deep Probability Estimation](https://arxiv.org/abs/2111.10734)
<b> ICML 2022 </b>

Reliable probability estimation is of crucial importance in many real-world applications where there is inherent (aleatoric) uncertainty. Probabilityestimation models are trained on observed outcomes (e.g. whether it has rained or not, or whether a patient has died or not), because the ground-truth probabilities of the events of interest are typically unknown. The problem is therefore analogous to binary classification, with the difference that the objective is to estimate probabilities rather than predicting the specific outcome. This work investigates probability estimation from high-dimensional data using deep neural
networks.

<p float="left" align="center">
<img src="{{ site.baseurl }}/images/DPE.png" width="700" /> 
<figcaption align="center">
The probability-estimation problem. In probability estimation, we assume that each observed outcome <img src="https://latex.codecogs.com/gif.latex?y_i" /> (e.g. death or survival in cancer patients) in the training set is randomly generated from a latent unobserved probability <img src="https://latex.codecogs.com/gif.latex?p_i" /> associated to the corresponding data <img src="https://latex.codecogs.com/gif.latex?x_i" /> (e.g. histopathology images).Training (left): Only <img src="https://latex.codecogs.com/gif.latex?x_i" /> and <img src="https://latex.codecogs.com/gif.latex?y_i" /> can be used for training, because <img src="https://latex.codecogs.com/gif.latex?p_i" /> is not observed. Inference (right): Given new data <img src="https://latex.codecogs.com/gif.latex?x" />, the trained network <img src="https://latex.codecogs.com/gif.latex?f" /> produces a probability estimate <img src="https://latex.codecogs.com/gif.latex?\hat{p}" /> in [0,1].
</figcaption>
</p>



## [Adaptive Early-Learning Correction for Semantic Segmentation](https://openaccess.thecvf.com/content/CVPR2022/html/Liu_Adaptive_Early-Learning_Correction_for_Segmentation_From_Noisy_Annotations_CVPR_2022_paper.html)
<b> CVPR 2022 Oral </b>

Deep learning in the presence of noisy annotations has been studied extensively in classification, but much less in segmentation tasks. In this project, we study the learning dynamics of deep segmentation networks trained on inaccurately-annotated data and propose a new method for semantic segmentation ADaptive Early-Learning corrEction (ADELE).

<p float="left" align="center">
<img src="{{ site.baseurl }}/images/ADELE.png" width="500" /> 
<figcaption align="center">
Visualization of the segmentation results of the baseline method SEAM and the baseline combined with the proposed ADaptive Early-Learning corrEction (ADELE).
</figcaption>
</p>

## [Early-learning Regularization Prevents Memorization of Noisy Labels](https://proceedings.neurips.cc/paper/2020/hash/ea89621bee7c88b2c5be6681c8ef4906-Abstract.html) 
<b> NeurIPS 2020 </b>

We propose a novel framework to perform classification via deep learning in the presence of noisy annotations. When trained on noisy labels, deep neural networks have been observed to first fit the training data with clean labels during an early learning phase, before eventually memorizing the examples with false labels. Our technique exploits the progress of the early learning phase via regularization to perform classification from noisy labels. 

<p float="left" align="center">
<img src="{{ site.baseurl }}/images/clean_label_simplexheatmap2.gif" width="400" /> 
<img src="{{ site.baseurl }}/images/false_label_simplexheatmap.gif" width="400" /> 
<figcaption align="center">
Learning path of sample with correct label (left) and sample with wrong label (right). Corners correspond to one-hot
vectors. Bright green represents model's prediction: when the example is wrongly labeled, the clean label is predicted at initialization, and then wrong label is predicted at the end of training. The model is trained with first 3 classes in CIFAR10.
</figcaption>
</p>


## [Normalization Layer Improve Robustness of Convolutional Neural Networks](https://proceedings.neurips.cc/paper/2021/hash/f23d125da1e29e34c552f448610ff25f-Abstract.html)
<b> NeurIPS 2021 </b>

Normalization techniques have become a basic component in modern convolutional neural networks (ConvNets). In particular, many recent works demonstrate that promoting the orthogonality of the weights helps train deep models and improve robustness. For ConvNets, most existing methods are based on penalizing or normalizing weight matrices derived from concatenating or flattening the convolutional kernels. These methods often destroy or ignore the benign convolutional structure of the kernels; therefore, they are often expensive or impractical for deep ConvNets. In contrast, we introduce a simple and efficient Convolutional Normalization (ConvNorm) method that can fully exploit the convolutional structure in the Fourier domain and serve as a simple plug-and-play module to be conveniently incorporated into any ConvNets. 

<p float="left" align="center">
<img
    src="{{ site.baseurl }}/images/ConvNorm.jpg"
    alt="ConvNorm"
    width="500"
>
<figcaption align="center">
Comparison between BatchNorm and ConvNorm on activations of $k = 1,...,C$ channels. BatchNorm subtracts and multiplies the activations of each channel by computed scalars: mean $\mu$ and variance $\sigma^2$, before a per-channel affine transform parameterized by learned parameters $\beta$ and $\gamma$; ConvNorm performs per-channel convolution with precomputed kernel $v$ to normalize the spectrum of the weight matrix for the convolution layer, following with a channel-wise convolution with learned kernel $r$ as the affine transform.</figcaption>
</p>


## [Early Detection of Alzheimer's Disease with Convoltuional Neural Networks](http://proceedings.mlr.press/v116/liu20a) 
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

