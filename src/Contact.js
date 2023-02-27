import React, {useEffect, useState} from 'react';
import './Contact.css';

export default function Contact() {
  const [mainDom, setMainDom] = useState()

  useEffect(() => {
    let mainDom = document.getElementById('main-container');
    setMainDom(mainDom);

    console.log(mainDom);
  }, []);

  function onIncrease() {
    let fontSizeStr = window.getComputedStyle(mainDom).fontSize;
    console.log(fontSizeStr);
    var fontSize = parseInt(fontSizeStr.slice(0, fontSizeStr.length - 2));
    console.log(fontSize);
    fontSize += 4; 
    // mainStyle.fontSize = size + "px";
    mainDom.style.fontSize = fontSize + "px";
  }

  function onDecrease() {
    let fontSizeStr = window.getComputedStyle(mainDom).fontSize;
    console.log(fontSizeStr);

    var fontSize = parseInt(fontSizeStr.slice(0, fontSizeStr.length - 2));

    console.log(fontSize);

    if (fontSize >= 4) {
      fontSize -= 4;
    }
    // mainStyle.fontSize = size + "px";
    mainDom.style.fontSize = fontSize + "px";

  }


  return (
    <div id='grid-container'>
      <div id='header'>
        <button className='button-style' type='button' onClick={onIncrease}>Increase</button>
        <button className='button-style' type='button' onClick={onDecrease}>Decrease</button>
      </div>
      <div id='main-container'>Main</div>
      <div id='left'>Left</div>
      <div id='right'>Right</div>
      <div id='footer'>Footer</div>
    </div>
  )
}
