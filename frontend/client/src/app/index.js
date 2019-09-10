import React from 'react';
import Articulos from '../components/articlulos';
import 'bootstrap/dist/css/bootstrap.min.css';
import CrearArticulo from '../components/crearArticulo';

function App() {
  return (
    <div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <CrearArticulo></CrearArticulo>
        <Articulos></Articulos>
    </div>
  );
}

export default App;
