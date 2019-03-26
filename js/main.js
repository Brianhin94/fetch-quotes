var API_URL = 'http://quotes.rest/qod.json'

document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('new-button').addEventListener('click', getQuote)
})

function getQuote(){
  fetch(API_URL, {
    content: ''
  })
  .then(function(response) {
    return response.json()
  })
  .then(function(results) {
    console.log(results.contents.quotes)
    // We have an array of JSON objects - neat stuff.
    // Let's use it to populate the DOM!
    document.getElementById('quote').innerHTML = results.contents.quotes[0].quote
    document.getElementById('source').textContent = results.contents.quotes[0].author
    document.body.style.backgroundImage = 'url("' + results.contents.quotes[0].background + '")'
  })
  .catch(function(err){
    console.log('Well something went terribly wrong!', err)
  })
}
