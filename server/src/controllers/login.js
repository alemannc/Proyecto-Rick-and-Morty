// const user=require("../utils/users")

// function login(req,res){
//     const {email,paswword}=req.query;
//     if(user[0].email ===email && user[0].email ===paswword){
//         res.status(200).json({access:true})
//     }else{
//         res.status(200).json({access:false})
//     }
// }

// const users = require('../utils/users')
// const login = (req, res) => {
//     const { email, password } = req.query;
//     const user = users.some(
//         (item) => item.email === email && item.password === password
//     );

//     if (user) {
//         console.log(user);
//         res.status(200).json({ access: true });
//     } else {
//         res.status(200).json({ access: false });
//     }
// };

// const login=(req,res)=>{
//     const { email, password } = req.query;
//     const foundUser = users.find((user)=>
//     user.email === email && user.password === password
//     )
//     if(foundUser) return res.status(200).json({ access: true })
//     console.log(access)
//     return res.status(200).json({ access: false })
// }



// const users = require('../utils/users')

// const login = (req, res) => {
//     const {password, email} = req.query
//     if(users[0].email === email && user[0].password === password) {
//         res.status(200).json({access: true})
//     } 
//     else res.status(200).json({access: false})
    
// }

const data = require('../utils/users');


const login = (req, res) =>{
    const {email, password} = req.query;

    const found = data.find((user)=>{ //.find devuelve la primera coincidencia
        user.email === email && user.password === password;
    });

    found
    ? res.status(200).json({access : true})
    : res.status(200).json({access : false});

};





module.exports={
    login
}

// module.exports = login



