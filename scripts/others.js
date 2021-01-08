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
<br>'

$(document).ready(function(){
  $("#others").click(function(){
    $(".content").empty();
    $(".content").append(myothers);
  });
});
