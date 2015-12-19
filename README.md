# Shop example

Demonstrates server-side rendering and dynamic filtering of product data in JavaScript.

To run this use NodeJs version 4.1.2 or newer. After installation, run:

```
npm install
node server.js
```

Then load the shop page with from http://localhost:8080

## The key files

### server.js

Fills the HTML template file ([handlebars template](http://handlebarsjs.com/)) with data from productData.json
and serves it from the root (http://localhost:8080).

### productListTemplate.handlebars

Mostly plain HTML, only dynamic part is the product list HTML table.

### products.js

Handles filtering of the product list when search field is changed.

### throttledinput.js

Throttles the keystrokes from an input field so that we don't do too much work too fast.
In practice we want a small quiet period before we start filtering the product list.

[Some basic styles are used from](http://www.basscss.com/)
