import React from 'react';
import ReactDOM from 'react-dom/client';
import ObjelerdeInecekVar from './components/ObjelerdeInecekVar';
import Fonki from './components/Fonki';


const degisken="bir takım degiskenlikler";
const objeDisardan={game:"of thrones", markus:"Babel"};

function antonyo(){
  console.log("antonyo");
}

function moritanyaliAdam(){
  console.log("moritanyalı adam");
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
<ObjelerdeInecekVar degiskenPropu={degisken} objeDisardanPropu={objeDisardan} objeIcerdenPropu={{ad:"Hüseyin", soyad:"Baki"}}/>

<ObjelerdeInecekVar degiskenPropu={degisken} />

{console.log("merhaba")}
{7+3}

<Fonki islem={antonyo} moritanyaliAdam={moritanyaliAdam}/>
  </>

);


