let myFavorites=[];

function postFav(req, res) {
    myFavorites.push(req.Body);
    res.json(myFavorites)
}
function deleteFav(req, res) {
    const {id}=req.params
    myFavorites.filter(data => data.id!== Number(id))
    res.json(myFavorites)
}

module.exports={
    postFav,
    deleteFav,
}