import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

//Importing routes!!
import postRoutes from './routes/postRoutes.js'

const app = express();

app.use('/posts', postRoutes);
app.use(bodyParser.json({limit: "30mb", extended: "true"}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: "true"}));
app.use(cors());

const PORT = process.env.PORT || 5000

//MogoDB Conn!

mongoose.connect('mongodb://localhost:27017/socialmediaapp', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> app.listen(PORT, ()=> console.log(`Server sunning on port ${PORT}`)))
.catch((err)=>console.log(err));