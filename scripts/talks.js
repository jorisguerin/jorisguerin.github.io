var mytalks = '<h2>Talks</h2> \
<table width="100%" align="center" border="0" cellspacing="0" cellpadding="20"> \
<tr> \
<td width="40%" valign="middle"> \
<iframe width="350" height="250" src="https://www.youtube.com/embed/gPATyKlvNz4" frameborder="0" allow="accelerometer; \
autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\
<td width="60%" valign="middle"> \
<p align="justify"> \
<b><papertitle>Robust Detection of Objects under Periodic Motion with Gaussian Process Filtering</papertitle></b> \
<br><br> \
Object Detection (OD) is an important task in Computer Vision with many practical applications.\
For some use cases, OD must be done on videos, where the object of interest has a periodic motion.\
In this paper, we formalize the problem of periodic OD, which consists in improving the performance\
of an OD model in the specific case where the object of interest is repeating similar spatio-temporal\
trajectories with respect to the video frames. The proposed approach is based on training a\
Gaussian Process to model the periodic motion, and use it to filter out the erroneous predictions\
of the OD model. By simulating various OD models and periodic trajectories, we demonstrate that\
this filtering approach, which is entirely data-driven, improves the detection performance by a large margin.</p> \
</td></tr> \
<tr> \
<td width="25%" valign="top"> \
<img src="images/icmla20.png" alt="Very good image summarizing the course" width="280"> \
</td> \
<td width="60%" valign="middle"> \
<p align="justify"> \
<b><papertitle>Robust vision for robotics:  leveraging movementto improve perception skills</papertitle></b> \
<br> \
<i>This talk was given to the Humanoid Sensing and Perception, Instituto Italiano di Tecnologia (IIT), Genova, Italy, \
& at the Kick-Off of the ANITI chair CertifAI, Toulouse, France. <i>\
<br><br> \
Abstract: Among the Robotics community, Computer Vision is often regarded as a tool to guide Movements of the robotic system.\
In this talk, a reflexion is proposed regarding the opposite view: how movement can be used to improve the \
performance of visual perception functions.\
<br><br> \
[<a href="./presentations/talk_kickOff_certifAI.pdf">Slides</a>]\
</p> \
</td></tr> \
</table>'
$(document).ready(function(){
  $("#talks").click(function(){
    $(".content").empty();
    $(".content").append(mytalks);
  });
});
