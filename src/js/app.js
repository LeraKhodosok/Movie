import MovieAPI from './api';

const movieAPI = new MovieAPI();

let itemContainer = document.querySelector('.item_container');

function addItems(name, img) {
    let movieItem = document.createElement('div');
    movieItem.classList.add('film-slide');

    let picture = document.createElement('div');
    picture.classList.add('picture');

    let baseImgPath = 'https://image.tmdb.org/t/p/original';
    let filmImg = document.createElement('img');
    filmImg.src = `${baseImgPath}${img}`;
    filmImg.setAttribute('width', '100%');
    filmImg.setAttribute('height', '400px');

    let filmInfo = document.createElement('div');
    filmInfo.classList.add('film_info');

    let filmName = document.createElement('h3');
    filmName.classList.add('film_name');
    filmName.innerText = name;

    let moreBtn = document.createElement('button');
    moreBtn.classList.add('more');
    moreBtn.textContent = 'more';

    picture.appendChild(filmImg);
    filmInfo.appendChild(filmName);
    filmInfo.appendChild(moreBtn);

    movieItem.appendChild(picture);
    movieItem.appendChild(filmInfo);

    itemContainer.appendChild(movieItem);
}

movieAPI.getPopularMovies()
  .then((res) => {
    console.log(res)
      res.forEach((item) => {
          addItems(item.original_title, item.poster_path);
      })
  })
  .catch((err) => {
    console.log(err)
  })

movieAPI.getLatestMovies()
    .then((res) => {
        console.log(res)
        res.forEach((item) => {
            addItems(item.original_title, item.poster_path);
        })
    })
    .catch((err) => {
        console.log(err)
    })


movieAPI.getPremiereMovies()
    .then((res) => {
        console.log(res)
        res.forEach((item) => {
            addItems(item.original_title, item.poster_path);
        })
    })
    .catch((err) => {
        console.log(err)
    })