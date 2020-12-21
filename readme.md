# Random Quote Machine

We're going to use JavaScript to make a webpage that displays a random quote. We'll use the built-in `fetch` method to call an API that will give us quotes.

## Getting Started

* Fork and clone this repository
* Setup your HTML page, and don't forget to include links to the CSS and JS files!
* Be creative in your choice of styling. Think about all of those different CSS properties.

## Gathering Quotes

There are two possibilities we can use to get random quotes:
* Random Funny Dev Quotes by StormConsultancy (check out the [documentation](http://quotes.stormconsultancy.co.uk/api))
* Random Famous Quotes by Forismatic (check out the [documentation](https://forismatic.com/en/api/))
```
// Random Funny Dev Quotes
http://quotes.stormconsultancy.co.uk/random.json
// Random famous quote
https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json
```

Take one of those links and paste it into your browser. Check if you're getting results and see how they are coming back!

## Requirements

* Using HTML, CSS, and JavaScript, create a webpage that displays a random quote on the page when a button is clicked
* Every time the button is clicked, clear the old quote and replace it with a new random quote.
* Use the `fetch` function to obtain a quote from your chosen API.

## Bonus!

* Use the [dad joke API](https://icanhazdadjoke.com/api). 
  * Note that this requires you to send something in the request header!
  * Take a look at the [docs](https://icanhazdadjoke.com/api) and see if you can figure it out!
  * This API also allows you to use images! If you implement this, how will it change your code?

---

## Licensing
1. All content is licensed under a CC-BY-NC-SA 4.0 license.
2. All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.
