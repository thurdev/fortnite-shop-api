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
