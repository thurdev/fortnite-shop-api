const request = require('request'); 
const cheerio = require('cheerio'); 
const chalk = require('chalk');
module.exports = {
    getDailyShop(){
        return new Promise((resolve, reject) => {
            var body = new Promise((resolve,reject) => {
                request("https://fnbr.co/shop", (err,res,body) => { if (err) reject(err); resolve(body) })
            })
            
            body.then((b) => {
                const $ = cheerio.load(b);
                var dailyShop = [];
                $('div[class="row daily-shop-row"]').each(function() {
                    $(this).find('div[class="col-md-3 col-md-6"]').each(function() {
                        var imageURL = $(this).find('a picture source[media="(max-width: 568px)"]').attr('srcset');
                        var rarity = $(this).find('a').attr('class').split(' ')[2].replace(/(rarity-)/gm, '');
                        var itemPrice = $(this).find('div[class="col-md-3 col-md-6"] a div[class="card-img-overlay"] div[class="card-body itemdesc-box"] p[class="card-text itemprice"]');
                        $(this).find('div[class="col-md-3 col-md-6"] a div[class="card-img-overlay"] div[class="card-body itemdesc-box"] h4[class="card-title itemname"]').each(function() {
                            var itemName = $(this).text();
                            dailyShop.push({
                                imageURL: imageURL,
                                itemName: itemName,
                                price: parseInt(itemPrice.text().split(/\n/g)[2].replace(/\,/g, '')),
                                rarity: rarity
                            })
                        })
                        
                    })
                });
                resolve(dailyShop);
            }).catch((err) => {
                if(err.syscall == 'getaddrinfo'){
                    reject(
                        chalk.red("Verify your internet connection.")
                    );
                }else{
                    chalk.red(err);
                }
            })
        })
        
    },
    getFeaturedShop(){
        return new Promise((resolve, reject) => {
            var body = new Promise((resolve,reject) => {
                request("https://fnbr.co/shop", (err,res,body) => { if (err) reject(err); resolve(body) })
            })
            body.then((b) => {
                const $ = cheerio.load(b);
                var featuredShop = [];
                $('div[class="row featured-shop-row"]').each(function() {
                    $(this).find('div[class="col-md-3 col-md-6"]').each(function() {
                        var imageURL = $(this).find('a picture source[media="(max-width: 568px)"]').attr('srcset');
                        var rarity = $(this).find('a').attr('class').split(' ')[2].replace(/(rarity-)/gm, '');
                        var itemPrice = $(this).find('div[class="col-md-3 col-md-6"] a div[class="card-img-overlay"] div[class="card-body itemdesc-box"] p[class="card-text itemprice"]');
                        $(this).find('div[class="col-md-3 col-md-6"] a div[class="card-img-overlay"] div[class="card-body itemdesc-box"] h4[class="card-title itemname"]').each(function() {
                            var itemName = $(this).text();
                            featuredShop.push({
                                imageURL: imageURL,
                                itemName: itemName,
                                price: parseInt(itemPrice.text().split(/\n/g)[2].replace(/\,/g, '')),
                                rarity: rarity
                            })
                        })
                        
                    })
                });
                resolve(featuredShop);
            }).catch((err) => {
                if(err.syscall == 'getaddrinfo'){
                    reject(
                        chalk.red("Verify your internet connection.")
                    );
                }else{
                    chalk.red(err);
                }
            })
        })
    }
}