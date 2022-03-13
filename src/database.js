const mongooose = require('mongoose');

module.exports = async function connecton(){
    try{
        const connectonParams = {
            useNewUrlParser: true,
            useCreateIndex : true,
            useUnifiedTopology: true
        }
        await mongooose.connect(process.env.database , connectonParams  );
        console.log('connected to the server');
    }catch(error){
                console.log(error);
    }

}