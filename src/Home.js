import React, { useEffect } from 'react';
import './App.css';

export default function Home() {

  useEffect(() => {
    var mainDom = document.querySelector('.card-item img');
    console.log(mainDom);
  }, []);

  return (
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
  )
}
