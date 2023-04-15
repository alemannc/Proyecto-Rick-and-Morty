function validate(userData){

    let errors={};
    
    if(!userData.email){
        errors.email= "Email requided"
    }
    if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userData.email)){
        errors.email= "Email invalided"
    }
    if(userData.email.length>35){
        errors.email="Your email must be less than 35 characters"
    }
    if(!userData.password){
        errors.password= "Password requided"
    }
    if(userData.password.length<6 || userData.password.length>10 ){
        errors.password= "Password must have more than 6 characters and less than 10"
    }
    if(!/\d/.test(userData.password)){
        errors.password="Your password must have at least one numeric digit"
    }
    return errors;
}

module.exports={
    validate,
}