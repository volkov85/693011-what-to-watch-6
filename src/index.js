import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const MOVIE_TITLES = [`Fantastic Beasts: The Crimes of Grindelwald`, `Bohemian Rhapsody`, `Macbeth`, `Aviator`, `We need to talk about Kevin`, `What We Do in the Shadows`, `Revenant`, `Johnny English`, `Shutter Island`, `Pulp Fiction`, `No Country for Old Men`, `Snatch`, `Moonrise Kingdom`, `Seven Years in Tibet`, `Midnight Special`, `War of the Worlds`, `Dardjeeling Limited`, `Orlando`, `Mindhunter`, `Midnight Special`];
const MAIN_TITLE = `The Grand Budapest Hotel`;
const MAIN_GENRE = `Drama`;
const MAIN_YEAR = `2014`;

ReactDOM.render(
    <App
      title = {MAIN_TITLE}
      genre = {MAIN_GENRE}
      year = {MAIN_YEAR}
      titles = {MOVIE_TITLES}
    />,
    document.querySelector(`#root`)
);
