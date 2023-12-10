import countriesList from "../assets/euro-countries.json";
import cities from "../assets/cities.json";

const countries = document.querySelector(".countries");

function getFlagEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

const list = `<ul>${countriesList
  .map((country) => {
    return `<li class="${country.name} country"><p>${
      country.name
    }</p><p>${getFlagEmoji(country.code)}</p><ul class="cities">${cities
      .filter((city) => city.country === country.code)
      .map((city) => `<li>${city.name}</li>`)
      .join("")}</ul></li>`;
  })
  .join("")}</ul>`;

countries.insertAdjacentHTML("afterbegin", list);

const countryRef = document.querySelectorAll(".country");

countryRef.forEach((country) => {
  country.addEventListener("click", () => {
    country.querySelector(".cities").classList.toggle("is-open");
  });
});