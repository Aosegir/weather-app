let main = document.getElementById('main');
import { helloLocation } from './weather.js';

function searchLoader() {
    let input = document.createElement('input');
    let button = document.createElement('button');
    button.innerText = "Submit";
    button.addEventListener('click', () => {
        helloLocation(input.value);
    });
    main.appendChild(input);
    main.appendChild(button);
}

searchLoader();