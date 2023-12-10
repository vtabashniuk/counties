import countriesList from "../assets/euro-countries.json";
import cities from "../assets/cities.json";

const countrySelect = document.getElementById("country");
const citySelect = document.getElementById("city");

function getFlagEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

countriesList.forEach((country) => {
  const option = document.createElement("option");
  option.value = country.name;
  option.text = `${country.name} ${getFlagEmoji(country.code)}`;
  countrySelect.appendChild(option);
});

countrySelect.addEventListener("change", () => {
  const selectedCountry = countrySelect.value;
  const selectedCountryObject = countriesList.find(
    (country) => country.name === selectedCountry
  );

  citySelect.innerHTML = "";

  if (selectedCountryObject) {
    cities.forEach((city) => {
      if (city.country === selectedCountryObject.code) {
        const option = document.createElement("option");
        option.value = city.name;
        option.text = city.name;
        citySelect.appendChild(option);
      }
    });
  }
});
