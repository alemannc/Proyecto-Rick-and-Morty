const axios = require("axios");
const URL="https://rickandmortyapi.com/api/character/"


function getCharById(req,res){
    let {id}=req;
    axios.get(URL+id)
    .then((data)=>{
        if(data.data){
            let {id, gender, image, name, species, origin, status }=data.data
            let charObj = {id, gender, image, name, species, origin, status}
            res.json(charObj).status(200,"todo Ok")
        }else{
            res.status(404).send("Not fount")
    }})
    .catch(res.status(500).send(error.message))
}



module.exports = {
    getCharById
}



















// const axios = require("axios")
// const URL = "https://rickandmortyapi.com/api/character/"

// function getCharById(res, id) {
//     return axios.get(URL + id)
//         .then(data => {
//             const { id, gender, image, name, species, origin, status } = data.data
//             let charObj = {
//                 id, gender, image, name, species, origin, status
//             }
//             res.writeHead(200, { "Content-Type": "application/json" }).end(JSON.stringify(charObj))
//         })
//         .catch((err) => {
//             res.writeHead(500, { "Content-Type": "text/plain" }).end(err.message)
//         })
// }


// module.exports = {
//     getCharById
// }
