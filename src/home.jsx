import React from 'react'

function Home() {
  return (
  
    <div className='home'>
  <h1 className ="item"> Reccomender</h1>
  <form className="new-item-form">
    <div className="form-row">
      <label htmlFor="item"> Item</label>
      <input type ="text" id="item"/>
    </div>

    <div id="container">
    <button className ="anime-btn">Anime</button>
    <button className ="manga-btn">Manga</button>
    </div>

  </form>
  </div>
  
  )
}

export default Home