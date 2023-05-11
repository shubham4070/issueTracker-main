const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost:27017/issueTracker', {
    // useCreateIndex: true,
    useNewUrlParser:true,
    useUnifiedTopology: true,
    
    
}).then(() => {
    console.log('connection is successfully');
}).catch((e) => {
    console.log('No Connection');
})
