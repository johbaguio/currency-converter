const URL = `https://api.exchangeratesapi.io/latest`;

export function getExchangeRates() {
  return fetch(URL)
    .then(response => response.json())

}
