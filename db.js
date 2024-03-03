const mongoose = require("mongoose");

const host = process.env.DB_HOST  || '127.0.0.1';
const dbURI = `mongodb://${host}/travlr`;
console.log(dbURI);
const readLine = require('readline');

mongoose.set('useUnifiedTopology', true);

const connect = () => {
    setTimeout(() => mongoose.connect(dbURI,{
        useNewUrlParser:true,
        useCreateIndex:true
    }),1000);
}

mongoose.connection.on('connected',() =>{
    console.log('Connected..');
});
mongoose.connection.on('error',err =>{});
mongoose.connection.on('disconnected',() =>{});


if(process.platform ==="win32"){}

const gracefullShutDown = (msg, callback) => {};


process.once('SIGUSR2',() => {});
process.once('SIGINT',() => {});
process.once('SIGTERM',() => {});


connect();


require('./travlr');
