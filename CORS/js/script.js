// example

const resultsContainer = document.querySelector('.results');
const URL = 'https://elephant-api.herokuapp.com/elephants';

// mt proxy server
const proxy = 'https://noroffcors.herokuapp.com/';

const corsFixUrl = proxy + URL;
async function makeApiCall() {
  try {
    const response = await fetch(corsFixUrl);
    // convert the response to JSON data

    const elephantsData = await response.json();
    console.log(elephantsData);
    resultsContainer.innerHTML = alert('success', 'successful');
  } catch (e) {
    console.log(e);
    resultsContainer.innerHTML = alert('error', e);
  }
}
makeApiCall();
