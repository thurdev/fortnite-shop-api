# Fortnite Shop Api

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

A simple module to get fortnite featured/daily shop.

### Installation

Open your favorite Terminal and run these command.

First Step and Only Step:
```sh
$ npm i fortnite-shop-api
```

### Example usage

```js
var { getDailyShop, getFeaturedShop } =  require('./index');

getDailyShop().then((response) => {
    console.log(response);
}).catch((err) => {
    console.error(err);
})

getFeaturedShop().then((response) => {
    console.log(response);
}).catch((err) => {
    console.error(err);
})

// Example response:

/*
[
    {
        imageURL: 'https://image.fnbr.co/emote/5fd94fce4fd78c5a919b7727/icon_256.png',
        itemName: 'Party Favor',
        price: 300,
        rarity: 'uncommon'
    }
    ...
]
*/
```

----

### License

MIT



