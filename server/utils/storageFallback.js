import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_FILE = path.resolve(__dirname, '../data/contacts.json');

// Ensure directory and file exists
const ensureStorage = () => {
  const dir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify([], null, 2), 'utf-8');
  }
};

export const saveContactFallback = async (data) => {
  ensureStorage();
  try {
    const raw = fs.readFileSync(DATA_FILE, 'utf-8');
    const contacts = JSON.parse(raw || '[]');

    const newContact = {
      _id: 'local_' + Date.now() + '_' + Math.random().toString(36).substring(2, 9),
      ...data,
      isRead: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    contacts.unshift(newContact);
    fs.writeFileSync(DATA_FILE, JSON.stringify(contacts, null, 2), 'utf-8');

    return newContact;
  } catch (err) {
    console.error('Error saving contact to local JSON fallback:', err);
    throw err;
  }
};

export const getContactsFallback = async () => {
  ensureStorage();
  try {
    const raw = fs.readFileSync(DATA_FILE, 'utf-8');
    return JSON.parse(raw || '[]');
  } catch (err) {
    return [];
  }
};
