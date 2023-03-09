const user=require('./user')

const login=(email,password)=>{
    return user.User.findOne({email,password})
   .then((data)=>{
    console.log(data);
   if(data){
      username=data.firstName+" "+data.lastName
    return{
        status:true,
        statusCode:200,
        message:"login successful",
      username
    }
  
   
   }else{
    return{
        status:false,
        statusCode:402,
        message:"login failed"
    }
   }
   })
}

const register=(fname,lname,email,pswd)=>{
    return user.User.findOne({
        email,pswd
    }).then((result)=>{
        if(result){
            return{
                status:false,
        statusCode:402,
        message:"already exist"
            }
            
        }else{
            newUser=new user.User({
                firstName:fname,
                lastName:lname,
                email,
                password:pswd
            })
            newUser.save()
            return{
                status:true,
                statusCode:200,
                message:"register successful" 
            }
        }
    })
}
module.exports={login,register}