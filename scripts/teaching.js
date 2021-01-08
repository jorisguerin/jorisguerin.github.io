var myteaching = '<h2>Teaching</h2>\
<table width="100%" align="center" border="0" cellspacing="0" cellpadding="20"> \
<tr> \
  <td width="25%" valign="top"> \
  <img src="images/ml_intro.png" alt="Very good image summarizing the course" width="280"> \
  </td> \
  <td width="75%" valign="top"> \
  <p align="justify"> \
  <b><papertitle>Introduction to Machine Learning: Python application using Scikit-learn</papertitle></b> \
  <br> \
  [<a href="documents/mlIntro_notes.pdf">Lecture notes</a>] \
  [<a href="https://github.com/jorisguerin/machine_learning_introduction">Coding assignments</a>] \
  <br><br> \
  These lecture notes are intended to give the reader all the necessary material to \
  get started quickly with Machine Learning. It provides some pointers to understand \
  the kind of problems that are solved using Machine Learning as well as the underlying ideas behind a few algorithms.\
  Purposely, these notes do not go into the mathematics of ML. However, it provides \
  implementation exercises using Python and Scikit-learn, so that the reader can start \
  making practical use of Machine Learning quickly. The supplementary material for these \
  notes can be downloaded on this page. It contains solutions to each problem presented \
  in these notes in the form of python files. It also contains some example code to get \
  started with python, numpy and scikit-learn. Note that each correction file has a list \
  of useful functions at the beginning of the file. They can be used to complete the different assignments.\
  </p></td> \
</tr> \
<tr> \
  <td width="25%" valign="top"> \
  <img src="images/covid_map.png" alt="Very good image summarizing the course" width="280"> \
  </td> \
  <td width="75%" valign="top"> \
  <p align="justify"> \
  <b><papertitle>Grouping Countries and Regions to Improve Covid-19 Dynamics Predictions</papertitle></b> \
  <br> \
  [<a href="documents/covid.pdf">Slides</a>]&nbsp/&nbsp \
  [<a href="https://github.com/jorisguerin/clustering_covid">Code</a>] \
  <br><br> \
  This tutorial was presented as a 4 hours short course for the <i>COVID 19</i> cours, Departamento de Engenharia de \
  Computação e Automção (DCA), Universidade Federal do Rio Grande do Norte (UFRN), Natal, Brazil.\
  It intends to show how simple clustering techniques can be used to group different countries and regions,\
  which can serve as a useful precrocessing step to improve time series prediction results.\
  </p></td> \
</tr> \
<tr> \
  <td width="25%" valign="top"> \
  <img src="images/tutoIC.png" alt="Very good image summarizing the course" width="280"> \
  </td> \
  <td width="75%" valign="top"> \
  <p align="justify"> \
  <b><papertitle>Tutorial on Image Clustering</papertitle></b> \
  <br> \
  Slides: [<a href="documents/tutoIC1.pdf">part 1</a>][<a href="documents/tutoIC2.pdf">part 2</a>] &nbsp/&nbsp \
  [<a href="https://github.com/jorisguerin/tutorial_IC">Accompanying code</a>] \
  <br><br> \
  This tutorial was presented as a 4 hours short course for the PPGC/UFF 2019 summer school, Instituto da Computação, \
  Universidade Federal Fluminense (UFF), Niterói, Brazil. It intends to provide some insight on how pretrained deep \
  Convolutional Neural Networks can be used and combined to address unsupervised image classification problems.\
  </p></td> \
</tr> \
</table>'

$(document).ready(function(){
  $("#teaching").click(function(){
    $(".content").empty();
    $(".content").append(myteaching);
  });
});
