import validator from 'validator';
import Contact from '../models/Contact.js';
import { isMongoConnected } from '../config/db.js';
import { saveContactFallback, getContactsFallback } from '../utils/storageFallback.js';

export const submitContact = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;

    // Field existence validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields: name, email, subject, and message.',
      });
    }

    // String validation & sanitization
    const trimmedName = String(name).trim();
    const trimmedEmail = String(email).trim().toLowerCase();
    const trimmedSubject = String(subject).trim();
    const trimmedMessage = String(message).trim();

    if (trimmedName.length < 2 || trimmedName.length > 100) {
      return res.status(400).json({
        success: false,
        message: 'Name must be between 2 and 100 characters.',
      });
    }

    if (!validator.isEmail(trimmedEmail)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address.',
      });
    }

    if (trimmedSubject.length < 3 || trimmedSubject.length > 200) {
      return res.status(400).json({
        success: false,
        message: 'Subject must be between 3 and 200 characters.',
      });
    }

    if (trimmedMessage.length < 10 || trimmedMessage.length > 3000) {
      return res.status(400).json({
        success: false,
        message: 'Message must be between 10 and 3000 characters.',
      });
    }

    const clientIp = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'Unknown';
    const userAgent = req.headers['user-agent'] || 'Unknown';

    const contactPayload = {
      name: trimmedName,
      email: trimmedEmail,
      subject: trimmedSubject,
      message: trimmedMessage,
      ipAddress: String(clientIp),
      userAgent: String(userAgent),
    };

    let savedRecord;

    if (isMongoConnected) {
      savedRecord = await Contact.create(contactPayload);
    } else {
      savedRecord = await saveContactFallback(contactPayload);
    }

    console.log(`[Contact Ingestion] New message from "${trimmedName}" (${trimmedEmail}): "${trimmedSubject}"`);

    return res.status(201).json({
      success: true,
      message: 'Thank you for reaching out! Your message has been received successfully. I will get back to you shortly.',
      data: {
        id: savedRecord._id,
        name: savedRecord.name,
        subject: savedRecord.subject,
        createdAt: savedRecord.createdAt,
      },
    });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    next(error);
  }
};

export const getContactStats = async (req, res, next) => {
  try {
    let count = 0;
    if (isMongoConnected) {
      count = await Contact.countDocuments();
    } else {
      const records = await getContactsFallback();
      count = records.length;
    }

    return res.status(200).json({
      success: true,
      totalInquiries: count,
      status: 'Active',
    });
  } catch (error) {
    next(error);
  }
};
