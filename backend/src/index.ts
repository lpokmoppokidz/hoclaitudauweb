import express from 'express';
import dotenv from 'dotenv';
import authRoute from './routes/auth.route.ts';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use('/api/auth/login', authRoute);

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})