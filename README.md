# google-holi
A Javascript package similar to google Holi.

## Demo
[Click here](https://google-holi.netlify.com/)

## Installation
### Install via npm:

`$ npm install google-holi`

## Usage
To use Google Holi in your website, import `initHoli` from `google-holi`, add the appropriate class to the button.

`$ import initHoli from 'google-holi'`

or use a CDN version by [jsDelivr](https://cdn.jsdelivr.net/npm/google-holi/index.js)

## Code detail

`initHoli` method expects three argument `canvas` element, element to trigger holi splash and element to reset/clear the splash

```
  const canvas = document.getElementById('myCanvas')
  const triggerElement = document.getElementById('holi-img')
  const resetElement = document.getElementById('holi-div')

  initHoli(canvas, triggerElement, resetElement)
```

