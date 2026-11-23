import express from 'express';
import { isMongoConnected } from '../config/db.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
    status: 'OK',
    uptime: Math.floor(process.uptime()),
    timestamp: new Date().toISOString(),
    service: 'M M Prateek Developer Portfolio API',
    database: {
      connected: isMongoConnected,
      engine: isMongoConnected ? 'MongoDB' : 'Persistent Storage Fallback',
    },
    version: '1.0.0',
  });
});

export default router;
