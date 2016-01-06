# Shop example

Demonstrates client-side rendering and dynamic filtering of product
data in JavaScript. Product-list is retrieved via Ajax get-call.


To run this use NodeJs version 4.1.2 or newer. After installation, run:

```
npm install
node server.js
```

Then load the shop page with from http://localhost:8080

## The key files

### server.js

Just a plain web server serving static files at this point.

### index.html

Mostly plain HTML, only dynamic part is the product list HTML table.

### products.js

Handles fetching products via ajax, rendering it and filtering of the product list when search field is changed.

### throttledinput.js

Throttles the keystrokes from an input field so that we don't do too much work too fast.
In practice we want a small quiet period before we start filtering the product list.

[Some basic styles are used from](http://www.basscss.com/)
