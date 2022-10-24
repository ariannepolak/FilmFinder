console.log(movies);


function resetDom(element) {
  element.textContent = ""; }
let parent = document.getElementById("allmovies");
resetDom(parent);


const ul = document.querySelector('#allmovies')


const addMoviesToDom = (movies) => {
  movies.map(movie => {
    let li = document.createElement('li');
    let a = document.createElement("a");
    let img = document.createElement('img');
    ul.appendChild(li);
    li.appendChild(a);
    a.appendChild(img);
    img.src = movie.poster;
    a.href = "https://www.imdb.com/title/"+movie.imdbID;
  })
}
addMoviesToDom(movies);


const addEventListeners = function(){
  const radioBtn = document.getElementsByName("filter");
  radioBtn.forEach(radio => radio.addEventListeners("change", handleOnChangeEvent))
}
 

function handleOnChangeEvent(event) {
  console.log(event.target.value)
  switch (event.target.value) {
    case "new":
      resetDom(parent)  
      const filterLatestMovies = movies.filter(function(movie){
        return movie.year >= 2014 })
        addMoviesToDom(filterLatestMovies)
    break;
    case "avengers":
      resetDom(parent)  
      function filterMovies(wordInMovie) {
        return movies.filter((movie) => {
        return movie.title.includes(wordInMovie)})}
        addMoviesToDom(filterMovies("Avengers"))
    break;
    case "xmen":
      resetDom(parent)  
      function filterMovies(wordInMovie) {
        return movies.filter((movie) => {
        return movie.title.includes(wordInMovie)})}
        addMoviesToDom(filterMovies("X-Men"))
    break;
    case "princess":
      resetDom(parent)  
      function filterMovies(wordInMovie) {
        return movies.filter((movie) => {
        return movie.title.includes(wordInMovie)})}
        addMoviesToDom(filterMovies("Princess"))
    break;
    case "batman":
      resetDom(parent)  
      function filterMovies(wordInMovie) {
        return movies.filter((movie) => {
        return movie.title.includes(wordInMovie)})}
        addMoviesToDom(filterMovies("Batman"))
    break;
    case "all":
      resetDom(parent)
      addMoviesToDom(movies)
    break;
}}
