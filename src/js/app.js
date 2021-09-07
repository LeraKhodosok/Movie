import MovieAPI from './api';

const movieAPI = new MovieAPI();

const popularContainer = document.querySelector('.popular .item_container');
const premiereContainer = document.querySelector('.premiere .item_container');
const newContainer = document.querySelector('.premiere .item_container');
const main = document.querySelector('.main');
const mainTitle = document.querySelector('.main .main_title');
const mainText = document.querySelector('.main .main_text');
const popup = document.querySelector('.popup');
const close = document.querySelector('.fa.fa-window-close-o');
const popupTitle = document.querySelector('.popup_title');
const popupText = document.querySelector('.popup_text');
const popupImg = document.querySelector('.popup_img');

const baseImgPath = 'https://image.tmdb.org/t/p/original';

function newMovie(title, overview, url) {
    main.style.backgroundImage = `url(${baseImgPath}${url})`;
    mainTitle.innerText = title;
    mainText.innerText = overview;
}

function defImg() {
    main.style.backgroundImage = `url(./src/img/main.png)`;
}

function addItems(name, img, container, id) {
    let movieItem = document.createElement('div');
    movieItem.classList.add('film-slide');
    movieItem.id = id;

    let picture = document.createElement('div');
    picture.classList.add('picture');

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

function checkParent(element, parent) {
    return element.closest(parent);
}

function popupBlocks(title, overview, url, id) {
    popupTitle.innerText = title;
    popupText.innerText = overview;
    popupImg.src = `${baseImgPath}${url}`;
    popupImg.setAttribute('width', '100%');
    popupImg.setAttribute('height', '600px');
    popup.id = id;
}

movieAPI.getPopularMovies()
  .then((res) => {
    console.log(res)
      res.forEach((item) => {
          addItems(item.original_title, item.poster_path, popularContainer, item.id);
          document.addEventListener('click', (e) => {
              let click = e.target;
              if (checkParent(click, '.more')){
                  popup.classList.add('active');
              }
          })
          popupBlocks(item.original_title, item.overview, item.poster_path, item.id);
      })
  })
  .catch((err) => {
    console.log(err)
  })

movieAPI.getLatestMovie()
    .then((res) => {
        console.log(res);
        console.log(res.poster_path);
        !!(res.poster_path) ? newMovie(res.title, res.overview, res.poster_path) : defImg();
    })
    .catch((err) => {
        console.log(err)
    })


movieAPI.getPremiereMovies()
    .then((res) => {
        console.log(res);
        res.forEach((item) => {
            addItems(item.original_title, item.poster_path, premiereContainer, item.id);
            document.addEventListener('click', (e) => {
                let click = e.target;
                if (checkParent(click, '.more')){
                    popup.classList.add('active');
                }
            })
            popupBlocks(item.original_title, item.overview, item.poster_path, item.id);
        })
    })
    .catch((err) => {
        console.log(err)
    })

close.addEventListener('click', () => {
    popup.classList.remove('active');
})