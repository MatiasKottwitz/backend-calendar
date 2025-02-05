const mongoose = require('mongoose');

const conectionDB = async() =>{

    try {

      await  mongoose.connect(process.env.DB_CONN_URL);

      console.log('BD INICIADA CORRECTAMENTE')

    } catch (error) {
        console.log(error);
        throw new Error('ERROR A INICIAR BD');
    }

}

module.exports = {
    conectionDB
}