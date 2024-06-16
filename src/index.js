import './style.css';
import { helloLocation } from './weather.js';

let content = document.getElementById('content');
let search = document.getElementById('search');

let locationData = ['country', 'region', 'localtime', 'tz_id'];
let currentData = ['temp_c', 'feelslike_c', 'wind_kph'];
let lastSearchedArea = '';

function searchLoader() {
    let input = document.createElement('input');
    let button = document.createElement('button');
    button.innerText = "Submit";
    button.addEventListener('click', () => {
        lastSearchedArea = input.value;
        helloLocation(input.value);
    });
    search.appendChild(input);
    search.appendChild(button);
}

function buttonLoader() {
    let label = document.createElement('label');
    label.classList.add('switch');
    let input = document.createElement('input');
    input.type = 'checkbox';
    input.id = 'myToggle';
    let span = document.createElement('span');
    span.classList.add('slider', 'round');

    input.addEventListener("change", function (event) {
        if (event.target.checked) {
            currentData = ['temp_f', 'feelslike_f', 'wind_mph'];
        } else {
            currentData = ['temp_c', 'feelslike_c', 'wind_kph'];
        }
        if(content.lastChild) {
            helloLocation(lastSearchedArea);
        };
    });

    label.appendChild(input);
    label.appendChild(span);
    search.appendChild(label);
};

function locationDisplay(data) {
    while(content.lastChild) {
        content.removeChild(content.lastChild);
    };
    console.log(data);

    let name = document.createElement('p');
    name.innerText = `Name: ${lastSearchedArea}`;
    content.appendChild(name);

    for(let item of locationData) {
        let dataElement = document.createElement('p');
        dataElement.innerText = `${item}: ${data.location[item]}`;
        content.appendChild(dataElement);
    };

    for(let item of currentData) {
        let dataElement = document.createElement('p');
        dataElement.innerText = `${item}: ${data.current[item]}`;
        content.appendChild(dataElement);
    };

    let dataElement = document.createElement('p');
    dataElement.innerText = `Condition: ${data.current.condition.text}`;
    content.appendChild(dataElement);

    /*for(let [key, value] of Object.entries(data.location)) {
        let item = document.createElement('p');
        item.innerText = `${key}: ${value}`;
        content.appendChild(item);
    };*/
};

searchLoader();
buttonLoader();

export { locationDisplay };