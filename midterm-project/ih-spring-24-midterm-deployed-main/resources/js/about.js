const music = document.querySelector("#music");

const data = fetch("./resources/json/myJson.json")
  .then((response) => response.json())
  .then((json) => {
    document.querySelector("#john-name").innerHTML =
      json.personA.name + " " + json.personA.surname;
    document.querySelector("#john-city").innerHTML = json.personA.city;
    document.querySelector("#john-hobbies").innerHTML = json.personA.hobbies;
    document.querySelector("#john-bio").innerHTML =
      "Biography: " + json.personA.bio;
    document.querySelector("#john-img").style =
      "background-image: url(https://img.freepik.com/premium-photo/concept-people-with-young-man-yellow-background_185193-82016.jpg?w=2000)";

    /*Introduciremos ahora las canciones*/
    document.querySelector("#music-1").innerHTML =
      '<h2 class="music-title">Music!</h2><section class="music" id="music"><article class="music-piece"><h3 class="piece-title">' +
      json.musicA.band +
      '</h3><a href="' +
      json.musicA.url +
      '">' +
      json.musicA.song +
      "</a><p><strong>Duración:</strong> " +
      json.musicA.duration +
      "</p><p><strong>Estilo:</strong> " +
      json.musicA.genre +
      "</p>" +
      json.musicA.iframe +
      "</article>";

    document.querySelector("#music-2").innerHTML =
      '<h2 class="music-title">Music!</h2><section class="music" id="music"><article class="music-piece"><h3 class="piece-title">' +
      json.musicB.band +
      '</h3><a href="' +
      json.musicB.url +
      '">' +
      json.musicB.song +
      "</a><p><strong>Duración:</strong> " +
      json.musicB.duration +
      "</p><p><strong>Estilo:</strong> " +
      json.musicB.genre +
      "</p>" +
      json.musicB.iframe +
      "</article>";

    document.querySelector("#music-3").innerHTML =
      '<h2 class="music-title">Music!</h2><section class="music" id="music"><article class="music-piece"><h3 class="piece-title">' +
      json.musicC.band +
      '</h3><a href="' +
      json.musicC.url +
      '">' +
      json.musicC.song +
      "</a><p><strong>Duración:</strong> " +
      json.musicC.duration +
      "</p><p><strong>Estilo:</strong> " +
      json.musicC.genre +
      "</p>" +
      json.musicC.iframe +
      "</article>";
  });

/* Alternativas a las canciones
HTML Puro

<h2 class="music-title">Music!</h2>
<section class="music" id="music">
    <article class="music-piece">
        <h3 class="piece-title">Marea</h3>
        <a href="https://www.youtube.com/watch?v=HbXaVhuBMJ0&ab_channel=WarnerMusicSpain">El hijo de la inés</a>
        <p><strong>Duración:</strong> 4:54</p>
        <p><strong>Estilo:</strong> Rock</p>
        <iframe class="youtube" src="https://www.youtube.com/embed/WVJdv-s9QWg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </article>
    <article class="music-piece">
        <h3 class="piece-title">Robe</h3>
        <a href="https://www.youtube.com/watch?v=LuSf-Eadb2s&ab_channel=Robe">Ininteligible</a>
        <p><strong>Duración:</strong> 4:54</p>
        <p><strong>Estilo:</strong> Rock</p>
        <iframe class="youtube"src="https://www.youtube.com/embed/LuSf-Eadb2s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </article>
    <article class="music-piece">
        <h3 class="piece-title">Destripando la historia</h3>
        <a href="https://www.youtube.com/watch?v=GKnQGP67Xd0&ab_channel=PascuyRodri">Odín</a>
        <p><strong>Duración:</strong> 4:54</p>
        <p><strong>Estilo:</strong> Rock</p>
        <iframe class="youtube" src="https://www.youtube.com/embed/GKnQGP67Xd0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </article>
</section>
*/

/* InnerHTML
'<h2 class="music-title">Music!</h2><section class="music" id="music"><article class="music-piece"><h3 class="piece-title">Marea</h3><a href="https://www.youtube.com/watch?v=HbXaVhuBMJ0&ab_channel=WarnerMusicSpain">El hijo de la inés</a><p><strong>Duración:</strong> 4:54</p><p><strong>Estilo:</strong> Rock</p><iframe class="youtube" src="https://www.youtube.com/embed/WVJdv-s9QWg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></article><article class="music-piece"><h3 class="piece-title">Robe</h3><a href="https://www.youtube.com/watch?v=LuSf-Eadb2s&ab_channel=Robe">Ininteligible</a><p><strong>Duración:</strong> 4:54</p><p><strong>Estilo:</strong> Rock</p><iframe class="youtube"src="https://www.youtube.com/embed/LuSf-Eadb2s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></article><article class="music-piece"><h3 class="piece-title">Destripando la historia</h3><a href="https://www.youtube.com/watch?v=GKnQGP67Xd0&ab_channel=PascuyRodri">Odín</a><p><strong>Duración:</strong> 4:54</p><p><strong>Estilo:</strong> Rock</p> <iframe class="youtube" src="https://www.youtube.com/embed/GKnQGP67Xd0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></article></section>'
*/
