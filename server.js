import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import 'express-async-errors'
dotenv.config()
const app = express()
const port = process.env.PORT || 3000

//db
import connectDB from './db/connect.js';

//middleware
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';
import authenticateUser from './middleware/auth.js'

//router 
import authRouter from './routes/authRoutes.js';
import jobsRouter from './routes/jobsRoutes.js';

app.use(cors())

if(process.env.NODE_ENV !== 'production'){
  app.use(morgan('dev'))
}
app.use(express.json())

app.get('/api/v1', (req, res) => {
  res.json({msg:'Welcome!'})
})

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', authenticateUser,jobsRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const start = async () => {
  try{
    await connectDB(process.env.MONGO_URL)
    app.listen(port,()=>{console.log(`server is listening on ${port}`)})
  }
  catch(err){
    console.log(err)
  }
}

start()

