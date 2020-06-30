import express from "express";
import graphqlHTTP from 'express-graphql'; 
// rimraf remite eliminar carpetas multiplataformas
import schema from './schema';

// db
import {connect} from './database';

const app = express();
connect();
app.get('/',(req,res)=>res.json({message:'Hello world'}));


app.use('/graphql',graphqlHTTP({
    graphiql:true,
    schema : schema,
    context: {
        messageId: 'test'
    }
}));
app.listen(3000,()=> console.log('Servidor escuchando en el puerto 3000...'));