import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})