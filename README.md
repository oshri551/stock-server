Stock server side based on Express & ES6 REST API Boilerplate
==================================


- ES6 support via [babel](https://babeljs.io)
- REST resources as middleware via [resource-router-middleware](https://github.com/developit/resource-router-middleware)
- CORS support via [cors](https://github.com/troygoode/node-cors)
- Body Parsing via [body-parser](https://github.com/expressjs/body-parser)


Getting Started
---------------

```sh
# clone it
git clone https://github.com/oshri551/stock-server.git
cd stock-server

# Make it your own
rm -rf .git && git init && npm init

# Install dependencies
npm install

# Start development live-reload server
PORT=8080 npm run dev

# Start production server:
PORT=8080 npm start
```
API's
------
```sh
# returns list of the stocks in market
/api/listofstocks

#returns data of specific stock per symbol
/api/stockdata/symbol

#Send email with the stock you purchesed
/api/buy/symbol
```

License
-------

MIT
