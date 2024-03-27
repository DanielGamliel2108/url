const http=require('http');
const app=require("./app");



const port=5050;


const server=http.createServer(app);

// start the server and listen on PORT 5050
server.listen(5050, () => {
    console.log(`App running on port 5050`);
     });