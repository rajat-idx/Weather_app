async function weather(evt) {
    evt.preventDefault();
    const input = document.querySelector('input');
    const cityName = input.value;
    const appid = 'e1602adc17d40ad3a8a2b7fb581fd3b6';
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${appid}`, {
            mode: 'cors',
        });
        const value = await response.json();
    
        const temp = document.querySelector('.degrees');
        const condition = document.querySelector('.condition');
        const location = document.querySelector('.location');

        temp.textContent = parseInt(value.main.temp - 274.15);
        condition.textContent = value.weather[0].main;
        location.textContent = value.name;
        input.value = '';
    } catch {
        const error = document.querySelector('.error');
        error.style.display = 'block';
        console.log('Error in finding city');
        return;
    }
}

const form = document.querySelector('form');
form.addEventListener('submit', weather);