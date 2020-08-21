const express = require('express')
const request = require('request')
const url = require('url')
const app = express();
const cors = require('cors')

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(cors())
const PORT = process.env.PORT || 5000;
app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/nyTimes', (req, res) => {
    var data = [];
    request("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=8u0nyw8k50qb6obD2PYtxKkmgdl6SuLG", { json: true }, (err, response, body) => {
    if (err) { return console.log(err); }
    let results = body.results;
    let count = 0;
    for(let i = 0; i < results.length; i++){
        if(results[i] === undefined || results[i] === "undefined" || results[i] === null){
            continue;
        }

        let article = {};
        let urls = results[i].multimedia;
        let url = "";
        if(urls === null){
            continue;
        }
        for(let j = 0; j < urls.length; j++){
            if(urls[j].url != "" && urls[j].width >= 2000){
                url = urls[j].url;
                break;
            }
        }
        if(results[i].section != "" && results[i].title != "" && results[i].published_date != "" && results[i].abstract != "" && results[i].url != "" && results[i].section != undefined && results[i].title != undefined && results[i].published_date != undefined && results[i].abstract != undefined && results[i].url != undefined){
            article["title"] = results[i].title;
            article["section"] = results[i].section.toUpperCase();
            article["published_date"] = results[i].published_date.substring(0,10);
            article["abstract"] = results[i].abstract;
            if(url === undefined || url === "undefined" || url === ""){
                article["image"] = "https://upload.wikimedia.org/wikipedia/commons/0/0e/Nytimes_hq.jpg";
            }
            else{
                article["image"] = url;
            }
            article["id"] = results[i].url;
            article["url"] = results[i].url;
            data[count] = article;
            count++;
        }
    }
    res.send(data);
    });
  });

  app.get('/nyWorld', (req, res) => {
    var data = [];
    request("https://api.nytimes.com/svc/topstories/v2/world.json?api-key=8u0nyw8k50qb6obD2PYtxKkmgdl6SuLG", { json: true }, (err, response, body) => {
    if (err) { return console.log(err); }
    let results = body.results;
    let count = 0;
    for(let i = 0; i < results.length; i++){
        if(results[i] === undefined || results[i] === "undefined" || results[i] === null){
            continue;
        }

        let article = {};
        let urls = results[i].multimedia;
        let url = "";
        if(urls === null){
            continue;
        }
        for(let j = 0; j < urls.length; j++){
            if(urls[j].url != "" && urls[j].width >= 2000){
                url = urls[j].url;
                break;
            }
        }
        if(results[i].section != "" && results[i].title != "" && results[i].published_date != "" && results[i].abstract != "" && results[i].url != "" && results[i].section != undefined && results[i].title != undefined && results[i].published_date != undefined && results[i].abstract != undefined && results[i].url != undefined){
            article["title"] = results[i].title;
            article["section"] = results[i].section.toUpperCase();
            article["published_date"] = results[i].published_date.substring(0,10);
            article["abstract"] = results[i].abstract;
            if(url === undefined || url === "undefined" || url === ""){
                article["image"] = "https://upload.wikimedia.org/wikipedia/commons/0/0e/Nytimes_hq.jpg";
            }
            else{
                article["image"] = url;
            }      
            article["id"] = results[i].url;     
            article["url"] = results[i].url;
            data[count] = article;
            count++;
        }
    }
    res.send(data);
    });
  });

  app.get('/nyPolitics', (req, res) => {
    var data = [];
    request("https://api.nytimes.com/svc/topstories/v2/politics.json?api-key=8u0nyw8k50qb6obD2PYtxKkmgdl6SuLG", { json: true }, (err, response, body) => {
    if (err) { return console.log(err); }
    let results = body.results;
    let count = 0;

    for(let i = 0; i < results.length; i++){
        if(results[i] === undefined || results[i] === "undefined" || results[i] === null){
            continue;
        }

        let article = {};
        let urls = results[i].multimedia;
        let url = "";
        if(urls === null){
            continue;
        }
        for(let j = 0; j < urls.length; j++){
            if(urls[j].url != "" && urls[j].width >= 2000){
                url = urls[j].url;
                break;
            }
        }
        if(results[i].section != "" && results[i].title != "" && results[i].published_date != "" && results[i].abstract != "" && results[i].url != "" && results[i].section != undefined && results[i].title != undefined && results[i].published_date != undefined && results[i].abstract != undefined && results[i].url != undefined){
            article["title"] = results[i].title;
            article["section"] = results[i].section.toUpperCase();
            article["published_date"] = results[i].published_date.substring(0,10);
            article["abstract"] = results[i].abstract;
            if(url === undefined || url === "undefined" || url === ""){
                article["image"] = "https://upload.wikimedia.org/wikipedia/commons/0/0e/Nytimes_hq.jpg";
            }
            else{
                article["image"] = url;
            }
            article["id"] = results[i].url;
            article["url"] = results[i].url;
            data[count] = article;
            count++;
        }
    }
    res.send(data);
    });
  });

  app.get('/nyBusiness', (req, res) => {
    var data = [];
    request("https://api.nytimes.com/svc/topstories/v2/business.json?api-key=8u0nyw8k50qb6obD2PYtxKkmgdl6SuLG", { json: true }, (err, response, body) => {
    if (err) { return console.log(err); }
    let results = body.results;
    let count = 0;
    for(let i = 0; i < results.length; i++){
        if(results[i] === undefined || results[i] === "undefined" || results[i] === null){
            continue;
        }

        let article = {};
        let urls = results[i].multimedia;
        let url = "";
        if(urls === null){
            continue;
        }
        for(let j = 0; j < urls.length; j++){
            if(urls[j].url != "" && urls[j].width >= 2000){
                url = urls[j].url;
                break;
            }
        }
        if(results[i].section != "" && results[i].title != "" && results[i].published_date != "" && results[i].abstract != "" && results[i].url != "" && results[i].section != undefined && results[i].title != undefined && results[i].published_date != undefined && results[i].abstract != undefined && results[i].url != undefined){
            article["title"] = results[i].title;
            article["section"] = results[i].section.toUpperCase();
            article["published_date"] = results[i].published_date.substring(0,10);
            article["abstract"] = results[i].abstract;
            if(url === undefined || url === "undefined" || url === ""){
                article["image"] = "https://upload.wikimedia.org/wikipedia/commons/0/0e/Nytimes_hq.jpg";
            }
            else{
                article["image"] = url;
            }
            article["id"] = results[i].url;
            article["url"] = results[i].url;
            data[count] = article;
            count++;
        }
    }
    res.send(data);
    });
  });

  app.get('/nyTechnology', (req, res) => {
    var data = [];
    request("https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=8u0nyw8k50qb6obD2PYtxKkmgdl6SuLG", { json: true }, (err, response, body) => {
    if (err) { return console.log(err); }
    let results = body.results;
    let count = 0;
    for(let i = 0; i < results.length; i++){
        if(results[i] === undefined || results[i] === "undefined" || results[i] === null){
            continue;
        }
        let article = {};
        let urls = results[i].multimedia;
        let url = "";
        if(urls === null){
            continue;
        }
        for(let j = 0; j < urls.length; j++){
            if(urls[j].url != "" && urls[j].width >= 2000){
                url = urls[j].url;
                break;
            }
        }
        if(results[i].section != "" && results[i].title != "" && results[i].published_date != "" && results[i].abstract != "" && results[i].url != "" && results[i].section != undefined && results[i].title != undefined && results[i].published_date != undefined && results[i].abstract != undefined && results[i].url != undefined){
            article["title"] = results[i].title;
            article["section"] = results[i].section.toUpperCase();
            article["published_date"] = results[i].published_date.substring(0,10);
            article["abstract"] = results[i].abstract;
            if(url === undefined || url === "undefined" || url === ""){
                article["image"] = "https://upload.wikimedia.org/wikipedia/commons/0/0e/Nytimes_hq.jpg";
            }
            else{
                article["image"] = url;
            }
            article["id"] = results[i].url;
            article["url"] = results[i].url;
            data[count] = article;
            count++;
        }
    }
    res.send(data);
    });
  });

  app.get('/nySports', (req, res) => {
    var data = [];
    request("https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=8u0nyw8k50qb6obD2PYtxKkmgdl6SuLG", { json: true }, (err, response, body) => {
    if (err) { return console.log(err); }
    let results = body.results;
    let count = 0;
    for(let i = 0; i < results.length; i++){
        if(results[i] === undefined || results[i] === "undefined" || results[i] === null){
            continue;
        }
        let article = {};
        let urls = results[i].multimedia;
        let url = "";
        if(urls === null){
            continue;
        }
        for(let j = 0; j < urls.length; j++){
            if(urls[j].url != "" && urls[j].width >= 2000){
                url = urls[j].url;
                break;
            }
        }
        if(results[i].section != "" && results[i].title != "" && results[i].published_date != "" && results[i].abstract != "" && results[i].url != "" && results[i].section != undefined && results[i].title != undefined && results[i].published_date != undefined && results[i].abstract != undefined && results[i].url != undefined){
            article["title"] = results[i].title;
            article["section"] = results[i].section.toUpperCase();
            article["published_date"] = results[i].published_date.substring(0,10);
            article["abstract"] = results[i].abstract;
            if(url === undefined || url === "undefined" || url === ""){
                article["image"] = "https://upload.wikimedia.org/wikipedia/commons/0/0e/Nytimes_hq.jpg";
            }
            else{
                article["image"] = url;
            }
            article["id"] = results[i].url;
            article["url"] = results[i].url;
            data[count] = article;
            count++;
        }
    }
    res.send(data);
    });
  });

  app.get('/guardian', (req, res) => {
    var data = [];
    request("https://content.guardianapis.com/search?api-key=88c25341-0bf1-4241-a346-90a93f2090af&section=(sport|business|technology|politics)&show-blocks=all", { json: true }, (err, response, body) => {
    if (err) { return console.log(err); }
    let results = body.response.results;
    let count = 0;
    for(let i = 0; i < results.length; i++){
        if(results[i] === undefined || results[i] === "undefined" || results[i] === null){
            continue;
        }
        let article = {};
        let a = results[i].blocks;
        if(a === null || a === "undefined" || a === undefined)
            continue;
        let b = a.main;
        if(b === null || b === "undefined" || b === undefined)
            continue;
        let c = b.elements[0];
        if(c === null || c === "undefined" || c === undefined)
            continue;
        let urls = c.assets;
        if(urls.length == 0)
            continue;
        let img = urls[urls.length-1].file;
        let description = results[i].blocks.body[0].bodyTextSummary;
        //let url = "";
        //console.log(urls);
        if(results[i].webUrl != "" && results[i].id != "" && results[i].sectionId != "" && results[i].webTitle != "" && results[i].webPublicationDate != "" && description != "" && results[i].webUrl != undefined && results[i].id != undefined && results[i].sectionId != undefined && results[i].webTitle != undefined && results[i].webPublicationDate != undefined && description != undefined){
            article["title"] = results[i].webTitle;
            if(results[i].sectionId.toUpperCase() === "SPORT"){
                article["section"] = results[i].sectionId.toUpperCase() + "S";
            }
            else{
                article["section"] = results[i].sectionId.toUpperCase();
            }
            article["published_date"] = results[i].webPublicationDate.substring(0,10);
            let k;
            for(k = 360; k > 0; k-- ){
                if(description[k] === " ")
                break;
            }
            article["abstract"] = description.substring(0,k)+"...";
            if(img === undefined || img === "undefined" || img === ""){
                article["image"] = "https://assets.guim.co.uk/images/eada8aa27c12fe2d5afa3a89d3fbae0d/fallback-logo.png"
            }
            else{
                article["image"] = img;
            }
            article["id"] = results[i].id;
            article["url"] = results[i].webUrl;
            data[count] = article;
            count++;
        }
    }
    res.send(data);
    });
  });

  app.get('/guardianWorld', (req, res) => {
    var data = [];
    request("https://content.guardianapis.com/world?api-key=88c25341-0bf1-4241-a346-90a93f2090af&show-blocks=all", { json: true }, (err, response, body) => {
    if (err) { return console.log(err); }
    let results = body.response.results;
    let count = 0;
    for(let i = 0; i < results.length; i++){
        if(results[i] === undefined || results[i] === "undefined" || results[i] === null){
            continue;
        }
        let article = {};
        let a = results[i].blocks;
        if(a === null || a === "undefined" || a === undefined)
            continue;
        let b = a.main;
        if(b === null || b === "undefined" || b === undefined)
            continue;
        let c = b.elements[0];
        if(c === null || c === "undefined" || c === undefined)
            continue;
        let urls = c.assets;
        if(urls.length == 0)
            continue;
        let img = urls[urls.length-1].file;
        let description = results[i].blocks.body[0].bodyTextSummary;
        //let url = "";
        //console.log(urls);
        if(results[i].webUrl != "" && results[i].id != "" && results[i].sectionId != "" && results[i].webTitle != "" && results[i].webPublicationDate != "" && description != "" && results[i].webUrl != undefined && results[i].id != undefined && results[i].sectionId != undefined && results[i].webTitle != undefined && results[i].webPublicationDate != undefined && description != undefined){
            article["title"] = results[i].webTitle;
            if(results[i].sectionId.toUpperCase() === "SPORT"){
                article["section"] = results[i].sectionId.toUpperCase() + "S";
            }
            else{
                article["section"] = results[i].sectionId.toUpperCase();
            }
            article["published_date"] = results[i].webPublicationDate.substring(0,10);
            let k;
            for(k = 360; k > 0; k-- ){
                if(description[k] === " ")
                break;
            }
            article["abstract"] = description.substring(0,k)+"...";
            if(img === undefined || img === "undefined" || img === ""){
                article["image"] = "https://assets.guim.co.uk/images/eada8aa27c12fe2d5afa3a89d3fbae0d/fallback-logo.png"
            }
            else{
                article["image"] = img;
            }
            article["id"] = results[i].id;
            article["url"] = results[i].webUrl;
            data[count] = article;
            count++;
        }
    }
    res.send(data);
    });
  });

  app.get('/guardianPolitics', (req, res) => {
    var data = [];
    request("https://content.guardianapis.com/politics?api-key=88c25341-0bf1-4241-a346-90a93f2090af&show-blocks=all", { json: true }, (err, response, body) => {
    if (err) { return console.log(err); }
    let results = body.response.results;
    let count = 0;
    for(let i = 0; i < results.length; i++){
        if(results[i] === undefined || results[i] === "undefined" || results[i] === null){
            continue;
        }

        let article = {};
        let a = results[i].blocks;
        if(a === null || a === "undefined" || a === undefined)
            continue;
        let b = a.main;
        if(b === null || b === "undefined" || b === undefined)
            continue;
        let c = b.elements[0];
        if(c === null || c === "undefined" || c === undefined)
            continue;
        let urls = c.assets;
        if(urls.length == 0)
            continue;
        let img = urls[urls.length-1].file;
        let description = results[i].blocks.body[0].bodyTextSummary;
        if(results[i].webUrl != "" && results[i].id != "" && results[i].sectionId != "" && results[i].webTitle != "" && results[i].webPublicationDate != "" && description != "" && results[i].webUrl != undefined && results[i].id != undefined && results[i].sectionId != undefined && results[i].webTitle != undefined && results[i].webPublicationDate != undefined && description != undefined){
            article["title"] = results[i].webTitle;
            if(results[i].sectionId.toUpperCase() === "SPORT"){
                article["section"] = results[i].sectionId.toUpperCase() + "S";
            }
            else{
                article["section"] = results[i].sectionId.toUpperCase();
            }
            article["published_date"] = results[i].webPublicationDate.substring(0,10);
            let k;
            for(k = 360; k > 0; k-- ){
                if(description[k] === " ")
                break;
            }
            article["abstract"] = description.substring(0,k)+"...";
            if(img === undefined || img === "undefined" || img === ""){
                article["image"] = "https://assets.guim.co.uk/images/eada8aa27c12fe2d5afa3a89d3fbae0d/fallback-logo.png"
            }
            else{
                article["image"] = img;
            }
            article["id"] = results[i].id;
            article["url"] = results[i].webUrl;
            data[count] = article;
            count++;
        }
    }
    res.send(data);
    });
  });

  app.get('/guardianBusiness', (req, res) => {
    var data = [];
    request("https://content.guardianapis.com/business?api-key=88c25341-0bf1-4241-a346-90a93f2090af&show-blocks=all", { json: true }, (err, response, body) => {
    if (err) { return console.log(err); }
    let results = body.response.results;
    let count = 0;
    for(let i = 0; i < results.length; i++){
        if(results[i] === undefined || results[i] === "undefined" || results[i] === null){
            continue;
        }

        let article = {};
        let a = results[i].blocks;
        if(a === null || a === "undefined" || a === undefined)
            continue;
        let b = a.main;
        if(b === null || b === "undefined" || b === undefined)
            continue;
        let c = b.elements[0];
        if(c === null || c === "undefined" || c === undefined)
            continue;
        let urls = c.assets;
        if(urls.length == 0)
            continue;
        let img = urls[urls.length-1].file;
        let description = results[i].blocks.body[0].bodyTextSummary;
        //let url = "";
        //console.log(urls);
        if(results[i].webUrl != "" && results[i].id != "" && results[i].sectionId != "" && results[i].webTitle != "" && results[i].webPublicationDate != "" && description != "" && results[i].webUrl != undefined && results[i].id != undefined && results[i].sectionId != undefined && results[i].webTitle != undefined && results[i].webPublicationDate != undefined && description != undefined){
            article["title"] = results[i].webTitle;
            if(results[i].sectionId.toUpperCase() === "SPORT"){
                article["section"] = results[i].sectionId.toUpperCase() + "S";
            }
            else{
                article["section"] = results[i].sectionId.toUpperCase();
            }
            article["published_date"] = results[i].webPublicationDate.substring(0,10);
            let k;
            for(k = 360; k > 0; k-- ){
                if(description[k] === " ")
                break;
            }
            article["abstract"] = description.substring(0,k)+"...";
            if(img === undefined || img === "undefined" || img === ""){
                article["image"] = "https://assets.guim.co.uk/images/eada8aa27c12fe2d5afa3a89d3fbae0d/fallback-logo.png"
            }
            else{
                article["image"] = img;
            }
            article["id"] = results[i].id;
            article["url"] = results[i].webUrl;
            data[count] = article;
            count++;
        }
    }
    // console.log(data);
    res.send(data);
    });
  });

  app.get('/guardianTechnology', (req, res) => {
    var data = [];
    request("https://content.guardianapis.com/technology?api-key=88c25341-0bf1-4241-a346-90a93f2090af&show-blocks=all", { json: true }, (err, response, body) => {
    if (err) { return console.log(err); }
    let results = body.response.results;
    let count = 0;
    for(let i = 0; i < results.length; i++){
        if(results[i] === undefined || results[i] === "undefined" || results[i] === null){
            continue;
        }

        let article = {};
        let a = results[i].blocks;
        if(a === null || a === "undefined" || a === undefined)
            continue;
        let b = a.main;
        if(b === null || b === "undefined" || b === undefined)
            continue;
        let c = b.elements[0];
        if(c === null || c === "undefined" || c === undefined)
            continue;
        let urls = c.assets;
        if(urls.length == 0)
            continue;
        let img = urls[urls.length-1].file;
        let description = results[i].blocks.body[0].bodyTextSummary;
        //let url = "";
        //console.log(urls);
        if(results[i].webUrl != "" && results[i].id != "" && results[i].sectionId != "" && results[i].webTitle != "" && results[i].webPublicationDate != "" && description != "" && results[i].webUrl != undefined && results[i].id != undefined && results[i].sectionId != undefined && results[i].webTitle != undefined && results[i].webPublicationDate != undefined && description != undefined){
            article["title"] = results[i].webTitle;
            if(results[i].sectionId.toUpperCase() === "SPORT"){
                article["section"] = results[i].sectionId.toUpperCase() + "S";
            }
            else{
                article["section"] = results[i].sectionId.toUpperCase();
            }
            article["published_date"] = results[i].webPublicationDate.substring(0,10);
            let k;
            for(k = 360; k > 0; k-- ){
                if(description[k] === " ")
                break;
            }
            article["abstract"] = description.substring(0,k)+"...";
            if(img === undefined || img === "undefined" || img === ""){
                article["image"] = "https://assets.guim.co.uk/images/eada8aa27c12fe2d5afa3a89d3fbae0d/fallback-logo.png"
            }
            else{
                article["image"] = img;
            }
            article["id"] = results[i].id;
            article["url"] = results[i].webUrl;
            data[count] = article;
            count++;
        }
    }
    // console.log(data);
    res.send(data);
    });
  });

  app.get('/guardianSports', (req, res) => {
    var data = [];
    request("https://content.guardianapis.com/sport?api-key=88c25341-0bf1-4241-a346-90a93f2090af&show-blocks=all", { json: true }, (err, response, body) => {
    if (err) { return console.log(err); }
    let results = body.response.results;
    let count = 0;
    for(let i = 0; i < results.length; i++){
        if(results[i] === undefined || results[i] === "undefined" || results[i] === null){
            continue;
        }

        let article = {};
        let a = results[i].blocks;
        if(a === null || a === "undefined" || a === undefined)
            continue;
        let b = a.main;
        if(b === null || b === "undefined" || b === undefined)
            continue;
        let c = b.elements[0];
        if(c === null || c === "undefined" || c === undefined)
            continue;
        let urls = c.assets;
        if(urls.length == 0)
            continue;
        let img = urls[urls.length-1].file;
        let description = results[i].blocks.body[0].bodyTextSummary;
        //let url = "";
        //console.log(urls);
        if(results[i].webUrl != "" && results[i].id != "" && results[i].sectionId != "" && results[i].webTitle != "" && results[i].webPublicationDate != "" && description != "" && results[i].webUrl != undefined && results[i].id != undefined && results[i].sectionId != undefined && results[i].webTitle != undefined && results[i].webPublicationDate != undefined && description != undefined){
            article["title"] = results[i].webTitle;
            if(results[i].sectionId.toUpperCase() === "SPORT"){
                article["section"] = results[i].sectionId.toUpperCase() + "S";
            }
            else{
                article["section"] = results[i].sectionId.toUpperCase();
            }
            article["published_date"] = results[i].webPublicationDate.substring(0,10);
            let k;
            for(k = 360; k > 0; k-- ){
                if(description[k] === " ")
                break;
            }
            article["abstract"] = description.substring(0,k)+"...";
            if(img === undefined || img === "undefined" || img === ""){
                article["image"] = "https://assets.guim.co.uk/images/eada8aa27c12fe2d5afa3a89d3fbae0d/fallback-logo.png"
            }
            else{
                article["image"] = img;
            }
            article["id"] = results[i].id;
            article["url"] = results[i].webUrl;
            data[count] = article;
            count++;
        }
    }
    // console.log(data);
    res.send(data);
    });
  });

  app.get('/searchGuardian', (req, res) => {
      const query = url.parse(req.url,true).query;
    // console.log(query.query)

    var dataGuardian = [];
    request("https://content.guardianapis.com/search?q="+query.query+"&api-key=88c25341-0bf1-4241-a346-90a93f2090af&show-blocks=all", { json: true }, (err, response, body) => {
    if (err) { return console.log(err); }
    // console.log(body.response.results);
    let results = body.response.results;
    let count = 0;
    for(let i = 0; i < results.length; i++){
        if(count === 5)
                break;
        if(results[i] === undefined || results[i] === "undefined" || results[i] === null){
            continue;
        }
        let article = {};
        let a = results[i].blocks;
        if(a === null || a === "undefined" || a === undefined)
            continue;
        let b = a.main;
        if(b === null || b === "undefined" || b === undefined)
            continue;
        let c = b.elements[0];
        if(c === null || c === "undefined" || c === undefined)
            continue;
        let urls = c.assets;
        if(urls.length == 0)
            continue;
        let img = urls[urls.length-1].file;
        let description = results[i].blocks.body[0].bodyTextSummary;
        //let url = "";
        //console.log(urls);
        if(results[i].sectionId !== undefined && results[i].webTitle !== undefined && results[i].webPublicationDate !== undefined && description !== undefined && img !== undefined || results[i].sectionId != "" && results[i].webTitle != "" && results[i].webPublicationDate != "" && description != "" && img != ""){
            article["title"] = results[i].webTitle;
            if(results[i].sectionId.toUpperCase() === "SPORT"){
                article["section"] = results[i].sectionId.toUpperCase() + "S";
            }
            else{
                article["section"] = results[i].sectionId.toUpperCase();
            }
            article["published_date"] = results[i].webPublicationDate.substring(0,10);
            //article["abstract"] = description;
            if(img === undefined || img === "undefined" || img === ""){
                article["image"] = "https://assets.guim.co.uk/images/eada8aa27c12fe2d5afa3a89d3fbae0d/fallback-logo.png"
            }
            else{
                article["image"] = img;
            }
            article["id"] = results[i].id;
            article["url"] = results[i].webUrl;
            dataGuardian[count] = article;
            count++;
        }
    }
    console.log(dataGuardian);
    res.send(dataGuardian);
    });

  });

  app.get('/searchNY', (req, res) => {
    const query = url.parse(req.url,true).query;
  // console.log(query.query)

    var dataNY = [];

    request("https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+query.query+"&api-key=8u0nyw8k50qb6obD2PYtxKkmgdl6SuLG", { json: true }, (err, response, body) => {
    if (err) { return console.log(err); }
    let results = body.response.docs;
    console.log(results);
    let count = 0;
    for(let i = 0; i < results.length; i++){
        if(count === 5)
            break;
        if(results[i] === undefined || results[i] === "undefined" || results[i] === null){
            continue;
        }
        let article = {};
        let urls = results[i].multimedia;
        let url = "";
        if(urls === null){
            continue;
        }
        for(let j = 0; j < urls.length; j++){
            if(urls[j].url != "" && urls[j].width >= 2000){
                url = urls[j].url;
                break;
            }
        }
        if(results[i].section !== undefined && results[i].title != undefined && results[i].published_date != undefined && results[i].abstract != undefined && results[i].url != "" || results[i].section != "" && results[i].title != "" && results[i].published_date != "" && results[i].abstract != "" && results[i].url != ""){
            article["title"] = results[i].headline.main;
            article["section"] = results[i].news_desk.toUpperCase();
            article["published_date"] = results[i].pub_date.substring(0,10);
            //article["abstract"] = results[i].abstract;
            if(url === undefined || url === "undefined" || url === ""){
                article["image"] = "https://upload.wikimedia.org/wikipedia/commons/0/0e/Nytimes_hq.jpg";
            }
            else{
                article["image"] = "https://www.nytimes.com/"+url;
            }
            article["url"] = results[i].web_url;
            console.log(results[i].url)
            article["id"] = results[i].web_url;
            dataNY[count] = article;
            count++;
            
        }
    }
  res.send(dataNY);
  });
});

app.get('/detailGuardian', (req, res) => {
    const query = url.parse(req.url,true).query;
  // console.log(query.query)

    var dataGuardian = [];
    request(encodeURI("https://content.guardianapis.com/"+query.id+"?api-key=88c25341-0bf1-4241-a346-90a93f2090af&show-blocks=all"), { json: true }, (err, response, body) => {
    if (err) { return console.log(err); }
    console.log(body);
    let result = body.response.content;
    let article = {};
    article["title"] = result.webTitle;
    let temp = result.blocks.main.elements[0].assets;
    let img = temp[temp.length-1].file;
    if(img === undefined || img === "undefined" || img === ""){
        article["image"] = "https://assets.guim.co.uk/images/eada8aa27c12fe2d5afa3a89d3fbae0d/fallback-logo.png"
    }
    else{
        article["image"] = img;
    }
    article["published_date"] = result.webPublicationDate.substring(0,10);
    article["description"] = result.blocks.body[0].bodyTextSummary;
    let big = 0;
    let small = 0;
    let count = 0;
    for(let i = 0; i < article["description"].length - 2; i++){
        if(article["description"].substring(i,i+2) === ". "){
            count = count + 1;
            if(count === 2){
                small = i;
            }
            if(count === 4){
                big = i;
                break;
            }
        }
    }
    if(small === 0){
        small = article["description"].length;
    }
    if(big === 0){
        big = article["description"].length;
    }
    article["small"] = small;
    article["big"] = big;
    article["url"] = result.webUrl;
    article["section"] = result.sectionId.toUpperCase();
    if(article["section"] === "SPORT"){
        article["section"] = "SPORTS";
    }
    article["id"] = result.id;
    dataGuardian=article;
    console.log(dataGuardian);
    res.send(dataGuardian);
  });

});

app.get('/detailNY', (req, res) => {
    const query = url.parse(req.url,true).query;
  console.log(query.id)

    var dataNY = [];

    request(encodeURI('https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=web_url:("'+query.id+'") &api-key=8u0nyw8k50qb6obD2PYtxKkmgdl6SuLG'), { json: true }, (err, response, body) => {
    if (err) { return console.log(err); }
    let result = body.response.docs;
    let article = {};
    article["title"] = result[0].headline.main;
    let urls = result[0].multimedia;
    let url;
    for(let j = 0; j < urls.length; j++){
        if(urls[j].url != "" && urls[j].width >= 2000){
            url = urls[j].url;
            break;
        }
    }
    if(url === undefined || url === "undefined" || url === ""){
        article["image"] = "https://upload.wikimedia.org/wikipedia/commons/0/0e/Nytimes_hq.jpg";
    }
    else{
        article["image"] = "https://www.nytimes.com/"+url;
    }
    article["url"] = result[0].web_url;
    article["section"] = result[0].news_desk.toUpperCase();
    if(article["section"] === "SPORT"){
        article["section"] = "SPORTS";
    }
    console.log(result[0].web_url);
    article["published_date"] = result[0].pub_date.substring(0,10);
    article["description"] = result[0].abstract;
    let big = 0;
    let small = 0;
    let count = 0;
    for(let i = 0; i < article["description"].length - 2; i++){
        if(article["description"].substring(i,i+2) === ". "){
            count = count + 1;
            if(count === 2){
                small = i;
            }
            if(count === 4){
                big = i;
                break;
            }
        }
    }
    if(small === 0){
        small = article["description"].length;
    }
    if(big === 0){
        big = article["description"].length;
    }
    article["small"] = small;
    article["big"] = big;
    article["id"] = result[0].web_url;

    dataNY=article;
  res.send(dataNY);
  });
});

app.listen(PORT, () => {
  console.log('Example app listening on port'+PORT);
});