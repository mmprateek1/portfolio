import express from 'express';
import { submitContact, getContactStats } from '../controllers/contactController.js';
import { contactLimiter } from '../middleware/rateLimiter.js';

const router = express.Router();

router.post('/', contactLimiter, submitContact);
router.get('/stats', getContactStats);

export default router;
