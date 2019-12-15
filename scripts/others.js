var myothers = '<h2>In press</h2> \
<ul> \
  <li> \
  <a href="https://artsetmetiers.fr/fr/actualites/lintelligence-artificielle-vue-par-joris-guerin-doctorant-sur-le-campus-arts-et-metiers"> \
  L’intelligence artificielle vue par Joris Guerin, doctorant sur le campus Arts et Métiers de Lille</a> \
  </li> \
  <li> \
  <a href="https://artsetmetiers.fr/fr/actualites/de-lille-atlanta-le-doctorat-de-joris-guerin"> \
  De Lille à Atlanta: Le doctorat de Joris Guérin</a> \
  </li> \
</ul> \
<br> \
<h2>Reviewer</h2> \
<ul> \
  <li> \
  <a href="http://www.mat.puc-rio.br/sibgrapi2019/"> \
  32nd Conference on Graphics, Patterns and Images (SIBGRAPI) 2019</a> \
  </li> \
  <li> \
  <a href="https://aiforsocialgood.github.io/icml2019/index.htm"> \
  AI for Social Good ICML2019 workshop </a> \
  </li> \
</ul> \
<br>'

$(document).ready(function(){
  $("#others").click(function(){
    $(".content").empty();
    $(".content").append(myothers);
  });
});
