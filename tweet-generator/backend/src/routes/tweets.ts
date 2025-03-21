import express from 'express';
import { generateTweet } from '../controllers/tweets';

const router = express.Router();

router.post('/generate', generateTweet);

export default router;
