import React from 'react';
import ReactDOM from 'react-dom/client';
import C1 from './components/C1'
import Cobje from './components/Cobje';
import Uyarimasu from './components/Uyarimasu';

function uyari(){
alert("Dikkat!");
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <p>Hello world</p>
  <C1 ozellik1 ozellik2 />
  <Uyarimasu aksiyon={uyari} />
  <C1 mesaj="mesajabivc" />
  <C1 mesaj={[2, 51, 73, 90]} />
  <Cobje susaj={{ad:"Emre", soyad:"Boz"}} />

  {console.log("emrelerde incek var.")}
  {5+6}
  </>

);


// function C1(){

// return "Merhaba";
// }

// function C1(){

//   return (
//   <p>Merhaba ben component 1</p>
//   );
//   }