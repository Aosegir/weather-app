const API_KEY = 'df7eff5bf8be42a18c022953241406';
const BASE_URL = 'http://api.weatherapi.com/v1';

async function helloLocation(location) {
    try {
        let data = await fetch(`${BASE_URL}/current.json?key=${API_KEY}&q=${location}`, {
            mode: 'cors'
        });
        let json_data = await data.json();
        console.log(json_data.location);
    } catch {
        console.log("You fucked up!");
    };
};

export { helloLocation };