function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


  function getMangaRecc(){
    fetch('https://api.jikan.moe/v4/manga/1')
    .then(res => res.json())
    .then(data => console.log(data))
  }

  let id = 25700
  getMangaRecc();
  console.log(id)


