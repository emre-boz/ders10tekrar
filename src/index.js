import React from 'react';
import ReactDOM from 'react-dom/client';
import ObjelerdeInecekVar from './components/ObjelerdeInecekVar';
import Fonki from './components/Fonki';
import BenazirButton from './components/BenazirButton';
import D1 from './components/D1';


const degisken="bir takım degiskenlikler";
const objeDisardan={game:"of thrones", markus:"Babel"};

function antonyo(){
  console.log("antonyo");
}

function moritanyaliAdam(){
  console.log("moritanyalı adam");
}

function yazanzi(){
  console.log("yazanzir");
  return(
    <>
    <p>yaziyor</p>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
<ObjelerdeInecekVar degiskenPropu={degisken} objeDisardanPropu={objeDisardan} objeIcerdenPropu={{ad:"Hüseyin", soyad:"Baki"}}/>

<ObjelerdeInecekVar degiskenPropu={degisken} />

{console.log("merhaba")}
{7+3}

<Fonki islem={antonyo} moritanyaliAdam={moritanyaliAdam}/>

<div>
  <h1>bende ben bir click olmaya geldim</h1>
  <button onClick={()=>{console.log("yazzanzi")}}>yazzanzi</button>
</div>

<BenazirButton yazanzi={yazanzi}/>

<D1 />

  </>

  

);


