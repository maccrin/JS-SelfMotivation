const countriesContainer = document.querySelector('.countries');
const renderCountry = function (data, className = '') {
    const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
        ).toFixed(1)} people</p>
     <p class="country__row"><span>🗣️</span>${data.languages.por}</p>
      <p class="country__row"><span>💰</span>${data.currencies.EUR.name}</p>
    </div>
  </article>
  `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
};

const whereAmI = (lat, long) => {
    fetch(`https://geocode.xyz/${lat},${long}?geoit=json`).then(res => {
        if (!res.ok) throw new Error(`problem is with ${res.status}`)
        return res.json();
    }).then(data => {
        console.log(data)
        console.log(`You are in ${data.city}`)
        return fetch(`https://restcountries.com/v3.1/name/portugal`)
    }).then(data => {
        if (!data.ok) throw new Error(`Country not found ${data.status}`)
        return data.json()
    }).then(output => {
        console.log(output[0])
        renderCountry(output[0])
    }).catch(err => console.log`${err.message}`)
}

whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);