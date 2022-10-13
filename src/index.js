import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';/* non c'è bisogno dell'estenzione perchè è un file nella stessa cartella */
/* import { ReactComponent as Waves} from './waves/Waves.svg'; */
import Header /* , {ProvaSecondaFunzioneHeader} */ from './header/Header.js';
import ToDoList from './toDoList/ToDoList';
import ButtonWithLoader from './button/ButtonLoader';
import Expertise from './expertise/Expertise.js';
import Button, {BottoneMain} from './button/Button';
import Main from './main/Main.js';
import Footer from './footer/Footer';
import Nav from './nav/nav';
import ToDoList from './toDoList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Nav />
    <Header />
    <ToDoList/>
    {/* <ProvaSecondaFunzioneHeader /> */}
    <ButtonLoader />
    <Waves />
    <Expertise />
    <Main />
    <Button />
    <Footer />

  </React.StrictMode>
);


