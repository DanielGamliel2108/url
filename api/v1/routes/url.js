const routes=require('express').Router();


const{
    addUrl,
    getUrl,
    getShortUrl,
    deleteUrl
}=require("../controllers/url");


routes.post('/shorten',addUrl);
routes.get('/', getUrl);



routes.get('/:shortUrl',getShortUrl);



routes.delete("/:id",deleteUrl)

module.exports=routes;