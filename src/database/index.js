const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Alev_dev:Adalfa2000@cluster0.zfraqdn.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Database is connected');
});
