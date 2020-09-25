const mongoose =require(mongoose)
mongoose.promise =global.Promise
mongoose.connect("mongodb://27.0.01:27017/newdb").then(()=>{
    console.log("db connected....")
    .catch(error => console.log("db not connected..!!! error"))
});

module.exports = mongoose