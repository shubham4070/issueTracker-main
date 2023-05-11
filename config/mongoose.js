const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://shubham21101997:1AXDBJsPzCwSUDHe@cluster0.34adl9j.mongodb.net/issueTracker?retryWrites=true&w=majority', {
    // useCreateIndex: true,
    useNewUrlParser:true,
    useUnifiedTopology: true,
    
    
}).then(() => {
    console.log('connection is successfully');
}).catch((e) => {
    console.log('No Connection');
})
