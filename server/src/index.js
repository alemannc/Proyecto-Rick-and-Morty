const express= require("express");
const server = express();
const PORT=3001;
const router=require("./routes/index")



server.use(express.json())
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
        );
        res.header(
            'Access-Control-Allow-Methods',
            'GET, POST, OPTIONS, PUT, DELETE'
            );
            next();
        });

server.use("/rickandmorty",router)

server.listen(PORT, () => {
    console.log(PORT)
})




























// const http= require ("http")
// const characters = require("./utils/data")
// const {getCharById}= require("./controllers/getCharById")

// http.createServer(function(request,response){
//     response.setHeader('Access-Control-Allow-Origin', '*');
//     try {
//         const { url } = request;
//         if (url.includes("/rickandmorty/character/")) {
//             const urlId = Number(url.split("/").pop());
//             getCharById(response,urlId)
//         }
        
//     } catch (error) {
//         throw new Error(error)
//     }
// }).listen(3001,"localhost")


