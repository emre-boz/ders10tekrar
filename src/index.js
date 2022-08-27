import React from 'react';
import ReactDOM from 'react-dom/client';
import C1 from './compenents/C1';
import MinimalTekrar from './compenents/MinimalTekrar';
import Fonks from './compenents/Fonks';

function lemanSam(){
    console.log("lemanyak");
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
<C1 />
<MinimalTekrar />
<Fonks fonkalade={lemanSam}/>


</>
);




