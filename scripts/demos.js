var mydemos = '<h2>Demos</h2> \
<table width="100%" align="center" border="0" cellspacing="0" cellpadding="20"> \
<tr> \
<td width="40%" valign="middle"> \
<iframe width="350" height="250" src="https://www.youtube.com/embed/Ekda9q3vv6Y" \
frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> \
<td width="60%" valign="middle"> \
<p align="justify"> \
<b><papertitle>Learning local trajectories for high precision robotic tasks: application to \
KUKA LBR iiwa Cartesian positioning</papertitle></b> \
<br><br> \
To ease the development of robot learning in industry, two conditions need to be fulfilled. \
Manipulators must be able to learn high accuracy and precision tasks while being safe for workers in the factory. \
In this paper, we propose a method for rapid learning of local high accuracy behaviors. \
By exploration and regression, linear and quadratic models are learnt for respectively the dynamics \
and cost function. Iterative Linear Quadratic Gaussian Regulator \
combined with cost quadratic regression can converge rapidly in the final stages towards high accuracy \
behavior as the cost function is modelled quite precisely. This video is an experimental validation on \
a KUKA LBR iiwa robot. This collaborative robot manipulator can be easily programmed \
into safety mode, which makes it qualified for the second industry constraint stated above. \
</p> \
</td></tr> \
</table> \
<table width="100%" align="center" border="0" cellspacing="0" cellpadding="20"> \
<tr> \
<td width="40%" valign="middle"> \
<iframe width="350" height="250" src="https://www.youtube.com/embed/NpZIwY3H-gE" \
frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> \
<td width="60%" valign="middle"> \
<p align="justify"> \
<b><papertitle>CNN features are also great at unsupervised classification</papertitle></b> \
<br><br> \
This work provides an insight on the transferability of deep CNN features to unsupervised problems. \
We study the impact of different pretrained CNN feature extractors on the problem of image set clustering \
for object classification as well as fine-grained classification. We propose a rather straightforward \
pipeline combining deep-feature extraction using a CNN pretrained on ImageNet and a classic clustering \
algorithm to classify sets of images. This approach is compared to state-of-the-art algorithms in \
image-clustering and provides better results. These results strengthen the belief that supervised \
training of deep CNN on large datasets, with a large variability of classes, extracts better features \
than most carefully designed engineering approaches, even for unsupervised tasks. This video is an experimental \
validation of our approach on a robotic application, consisting in sorting and storing objects smartly based on clustering. \
</p> \
</td></tr> \
</table> \
<table width="100%" align="center" border="0" cellspacing="0" cellpadding="20"> \
<tr> \
<td width="40%" valign="middle"> \
<iframe width="350" height="250" src="https://www.youtube.com/embed/korkcYs1EHM" \
frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> \
<td width="60%" valign="middle"> \
<p align="justify"> \
<b><papertitle>Clustering for Different Scales of Measurement - the Gap-Ratio Weighted K-means Algorithm</papertitle></b> \
<br><br> \
This research introduces a method for clustering data that are spread out over large regions and which dimensions \
are on different scales of measurement. Such an algorithm was developed to implement a robotics application \
consisting in sorting and storing objects in an unsupervised way. The toy dataset used to validate such \
application consists of Lego bricks of different shapes and colors. The uncontrolled lighting conditions together \
with the use of RGB color features, respectively involve data with a large spread and different levels \
of measurement between data dimensions. To overcome the combination of these two characteristics in \
the data, we have developed a new weighted K-means algorithm, called gap-ratio K-means, which \
consists in weighting each dimension of the feature space before running the K-means algorithm. \
The weight associated with a feature is proportional to the ratio of the biggest gap between two \
consecutive data points, and the average of all the other gaps. This method is compared with two \
other variants of K-means on the Lego bricks clustering problem \
as well as two other common classification datasets. \
</p> \
</td></tr> \
</table>'

$(document).ready(function(){
  $("#demos").click(function(){
    $(".content").empty();
    $(".content").append(mydemos);
  });
});
