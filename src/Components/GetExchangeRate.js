const URL = `https://data.fixer.io/api/latest?access_key=eff15d471c7ba065a8cb7ebc4672cb30`;

export function getExchangeRates() {
  return fetch(URL)
    .then(response => response.json())

}
