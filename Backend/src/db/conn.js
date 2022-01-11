const mongoose = require('mongoose');

module.exports = conn = () => {
    mongoose.connect("mongodb://archit:k8mTmlxgKjKTcDiJ@cluster0-shard-00-00.hoqjh.mongodb.net:27017,cluster0-shard-00-01.hoqjh.mongodb.net:27017,cluster0-shard-00-02.hoqjh.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-2ue1wp-shard-0&authSource=admin&retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(()=>{
        console.log("Connection Successful") ; 
    }).catch(err=>{
        console.log(err);
    })
} 
