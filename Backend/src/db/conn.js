const mongoose = require('mongoose');

module.exports = conn = () => {
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(()=>{
        console.log("Connection Successful") ; 
    }).catch(err=>{
        console.log(err);
    })
}
