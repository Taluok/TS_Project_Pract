import express from 'express';
import cors from 'cors';
import tweetsRouter from './routes/tweets';

const app = express();
const PORT = 3001;

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['POST']
}));
app.use(express.json());
app.use('/api/tweets', tweetsRouter);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
