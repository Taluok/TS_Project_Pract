import { Request, Response } from 'express';
import crypto from 'crypto';

export const generateTweet = async (req: Request, res: Response) => {
  try {
    const tweet = {
      id: crypto.randomUUID(),
      content: `¡Tweet generado automáticamente! ${new Date().toISOString()}`,
    };
    res.status(200).json(tweet);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Error generando tweet' });
  }
};

