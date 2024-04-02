// const mysql = require('mysql');
// const con = mysql.createConnection({
//     host : 'localhost',
//     user : 'root',
//     password : '',
//     database : 'marutimsm'
// })

// con.connect((err) =>{
//    if(err){
//     console.log(err)
//    }else{
//     console.log('Database Connected')
//    }

  
// })







// module.exports = con



const mongoose=require('mongoose');

let mon ='mongodb+srv://ranjankumud862:ranjankumud1234@cluster0.8v4gqza.mongodb.net/realestate?retryWrites=true&w=majority'
mongoose.connect(mon,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

.then(()=>console.log('connected to database '))
.catch((err)=>console.log(err))


module.exports=mongoose