import './App.css';

function App() {

  return (
    <div className='container'>
      <header id='header'>
        <nav class="topnav" id="myTopnav">
          <div class="topnav-centered">
            <a href="#home" class="active">Home</a>
          </div>
          <div class="topnav-right">
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
            <a href="#search">Search</a>
          </div>
        </nav>
      </header>
      <main id='main'>
        {/* <div id='header-container'>
          <header id='header-bar'>
            <nav id='navbar' className='top-navbar'>
              <div id='left-navbar'>
                <p id='logo'>
                  PVNGHE
                </p>
                <p className='item'>
                  Flashbytes
                </p>
                <p className='item'>
                  Categories
                </p>
                <p className='item'>
                  Upload video
                </p>
              </div>
              <div id='right-navbar'>
                <div id='search-container'>
                  <input type={'text'} name='search-box' />
                  <img src='search' alt='search icon' />
                </div>
                <img id='notification' src='https://lh3.googleusercontent.com/ogw/AAEL6sjTgpxR3yQY5uy5T9gmcU2ru0jWYX7fdueedNl7=s64-c-mo' alt='profile-pic' />
                <img src='https://lh3.googleusercontent.com/ogw/AAEL6sjTgpxR3yQY5uy5T9gmcU2ru0jWYX7fdueedNl7=s64-c-mo' alt='profile' />
              </div>
            </nav>
          </header>
        </div> */}
        <div id='list-container'>
          <div id='section'>
            <article className='card-item'>
              <img className='img-item' src='https://picsum.photos/300/200' alt='card' />
              <p className='card-title'>title hello world!, i'm Nghe. I can learn and work on everything in the world! Good luck!</p>
            </article>
            <article className='card-item'>
              <img className='img-item' src='https://picsum.photos/300/200' alt='card' />
              <p className='card-title'>title</p>
            </article>
            <article className='card-item'>
              <img className='img-item' src='https://picsum.photos/300/200' alt='card' />
              <p className='card-title'>title</p>
            </article>
            <article className='card-item'>
              <img className='img-item' src='https://picsum.photos/300/200' alt='card' />
              <p className='card-title'>title</p>
            </article>
            <article className='card-item'>
              <img className='img-item' src='https://picsum.photos/300/200' alt='card' />
              <p className='card-title'>title</p>
            </article>
            <article className='card-item'>
              <img className='img-item' src='https://picsum.photos/300/200' alt='card' />
              <p className='card-title'>title</p>
            </article>
            <article className='card-item'>
              <img className='img-item' src='https://picsum.photos/300/200' alt='card' />
              <p className='card-title'>title</p>
            </article>
            <article className='card-item'>
              <img className='img-item' src='https://picsum.photos/300/200' alt='card' />
              <p className='card-title'>title</p>
            </article>
            <article className='card-item'>
              <img className='img-item' src='https://picsum.photos/300/200' alt='card' />
              <p className='card-title'>title</p>
            </article>
            <article className='card-item'>
              <img className='img-item' src='https://picsum.photos/300/200' alt='card' />
              <p className='card-title'>title</p>
            </article>
            <article className='card-item'>
              <img className='img-item' src='https://picsum.photos/300/200' alt='card' />
              <p className='card-title'>title</p>
            </article>
            <article className='card-item'>
              <img className='img-item' src='https://picsum.photos/300/200' alt='card' />
              <p className='card-title'>title</p>
            </article>
            <article className='card-item'>
              <img className='img-item' src='https://picsum.photos/300/200' alt='card' />
              <p className='card-title'>title</p>
            </article>
            <article className='card-item'>
              <img className='img-item' src='https://picsum.photos/300/200' alt='card' />
              <p className='card-title'>title</p>
            </article>
          </div>

        </div>
      </main>
    </div>
  );
}

export default App;
