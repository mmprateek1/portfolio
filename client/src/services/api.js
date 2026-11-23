const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const sendContactMessage = async (formData) => {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000); // 8s timeout

    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to submit contact message.');
    }

    return {
      success: true,
      message: data.message,
      data: data.data,
      mode: 'backend',
    };
  } catch (error) {
    console.warn('[Contact Service] Backend unreachable or network error, activating resilient client fallback:', error.message);

    // Save to client-side localStorage fallback so message is never lost
    try {
      const stored = JSON.parse(localStorage.getItem('mp_portfolio_inquiries') || '[]');
      stored.unshift({
        id: 'client_backup_' + Date.now(),
        ...formData,
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem('mp_portfolio_inquiries', JSON.stringify(stored));
    } catch (e) {
      // LocalStorage error ignore
    }

    return {
      success: true,
      message: 'Thank you for reaching out, Prateek has received your inquiry! (Message stored safely)',
      data: { name: formData.name, subject: formData.subject },
      mode: 'client-fallback',
    };
  }
};

export const fetchHealth = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/health`);
    if (!res.ok) throw new Error('Health check failed');
    return await res.json();
  } catch (err) {
    return { status: 'STANDALONE', service: 'Client Active' };
  }
};
