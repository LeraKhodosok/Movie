import MovieAPI from './api';

const movieAPI = new MovieAPI();

let popularContainer = document.querySelector('.popular .item_container');
let premiereContainer = document.querySelector('.premiere .item_container');
let newContainer = document.querySelector('.premiere .item_container');

function newMovie() {
    let bgr = document.querySelector('.main');
   bgr.setAttribute('background', 'scr');
   bgr.style.background = 'https://image.tmdb.org/t/p/original/zvpR6rIS5Mjkg2ryuIkFfuiN1s5.jpg';
}

function addItems(name, img, container) {
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

    container.appendChild(movieItem);
}

movieAPI.getPopularMovies()
  .then((res) => {
    console.log(res)
      res.forEach((item) => {
          addItems(item.original_title, item.poster_path, popularContainer);
      })
  })
  .catch((err) => {
    console.log(err)
  })

movieAPI.getLatestMovies()
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
    })


movieAPI.getPremiereMovies()
    .then((res) => {
        console.log(res)
        res.forEach((item) => {
            addItems(item.original_title, item.poster_path, premiereContainer);
        })
    })
    .catch((err) => {
        console.log(err)
    })