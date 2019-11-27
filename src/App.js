import React from 'react';
/*Bootstrap*/ 
import 'bootstrap/dist/css/bootstrap.min.css';

/*REDUX */
import store from '../src/store';
import { Provider } from 'react-redux';
 
/**  Components  **/
import Encabezado from './components/Encabezado';
import Formulario from './components/Formulario';
import Footer from './components/Footer';
import Main from './components/Main';
import ListPlaces from './components/ListPlaces';

function App() {
  return (
    
   <Provider store={store}>
    <div className="App">
        <Encabezado />
        <Main />
        <Formulario />
        <ListPlaces />
        <Footer />
    </div>
   </Provider>

  );
}

export default App;
