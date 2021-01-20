const mongoose = require('mongoose');
const URI = process.env.MONGO_URI;
 
module.exports = async () => {
    mongoose
    .connect(URI, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log('connected to mongo'))
    .catch(err => console.log(err));
} 