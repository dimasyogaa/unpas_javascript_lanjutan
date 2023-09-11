/* Jquery
$(".search-button").on("click", function () {

  $.ajax({
    url:
      "http://www.omdbapi.com/?apikey=b236e4a4&s=" + $(".input-keyword").val(),
    success: (results) => {
      // console.log(results);

      const movies = results.Search;
      // console.log(movies);

      let cards = "";

      movies.forEach((m) => {
        cards += showCards(m);
      });

      $(".movie-container").html(cards);

      // ketika tombol detail di-klik
      $(".modal-detail-button").on("click", function () {
        //   console.log($(this).data("imdbid"));

        $.ajax({
          url:
            "http://www.omdbapi.com/?apikey=b236e4a4&i=" +
            $(this).data("imdbid"),
          success: (m) => {
            const movieDetail = showMovieDetail(m);

            $(".modal-body").html(movieDetail);
          },
          error: (e) => {
            console.log(e.responseText);
          },
        });
      });
    },
    error: (e) => {
      console.log(e.responseText);
    },
  });

  
}); */

//FETCH
// Sebuah method pada API javascript untuk mengambil resources dari jaringan
// dan mengembalikan promise yang selesai(fullfilled)ketika ada response yang tersedia
// https://www.notion.so/Fetch-fc01020f9d4e405b966224e23857ded1?pvs=4

const searchButton = document.querySelector(".search-button");
searchButton.addEventListener("click", function () {
  const inputKeyword = document.querySelector(".input-keyword");

  fetch("http://www.omdbapi.com/?apikey=b236e4a4&s=" + inputKeyword.value)
    .then((response) => {
      // console.log(response);
      // console.log(response.json());
      return response.json(); // promise
    })
    .then((response) => {
      // console.log(response);
      // console.log(response.Search);

      const movies = response.Search;
      let cards = "";
      movies.forEach((m) => (cards += showCards(m)));
      const movieContainer = document.querySelector(".movie-container");
      movieContainer.innerHTML = cards;

      // ketika tombol detail di-klik
      const modalDetailButton = document.querySelectorAll(
        ".modal-detail-button"
      );
      modalDetailButton.forEach((btn) => {
        btn.addEventListener("click", function () {
          // console.log(this);

          const imdbid = this.dataset.imdbid;
          // console.log(imdbid);

          fetch("http://www.omdbapi.com/?apikey=b236e4a4&i=" + imdbid)
            .then((response) => response.json())
            .then((m) => {
              const movieDetail = showMovieDetail(m);
              const modalBody = document.querySelector(".modal-body");
              modalBody.innerHTML = movieDetail;
            });
        });
      });
    });
});

function showCards(m) {
  return `<div class="col-md-4 my-3">
    <div class="card">
        <img src="${m.Poster}" class="card-img-top" >
        <div class="card-body">
        <h5 class="card-title">${m.Title}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">${m.Year}</h6>
        <a href="#" class="btn btn-primary modal-detail-button"  data-bs-toggle="modal"
        data-bs-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show Details</a>
        </div>
    </div>
</div>`;
}

function showMovieDetail(m) {
  return `<div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${m.Poster}" class="img-fluid" />
                    </div>
                    <div class="col-md">
                        <ul class="list-group">
                            <li class="list-group-item"><h4>${m.Title} (${m.Year})</h4></li>
                            <li class="list-group-item">
                                <strong>Director : </strong> ${m.Director}
                            </li>
                            <li class="list-group-item">
                                <strong>Actors : </strong> ${m.Actors}
                            </li>
                            <li class="list-group-item">
                                <strong>Writer : </strong> ${m.Writer}
                            </li>
                            <li class="list-group-item">
                                <strong>Plot : </strong> <br />
                                ${m.Plot}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>`;
}
