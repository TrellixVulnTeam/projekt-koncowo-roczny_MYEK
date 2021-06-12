import './style.css';

import Main from './components/Main';

function init() {

    const container = document.getElementById('root');

    new Main(container);

}


window.onload = () => {

    init();

}