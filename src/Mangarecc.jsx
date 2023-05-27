function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
let id = getRandomInt(100000)

  function getMangaRecc(){
    fetch("https://api.jikan.moe/v4/manga/{id}")
    .then(res => res.json())
    .then(data => console.log(data))
  }

  function Mangarecc(){
    return (
  
        <div className='Mangarecc'>
      <h1 className ="item"> You should read</h1>
      <p></p>
      <form className="new-item-form">
        <div className="form-row">
          <label htmlFor="item"> Item</label>
          <input type ="text" id="item"/>
        </div>
    
      </form>
      </div>
      
      )
  }