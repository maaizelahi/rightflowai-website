export const emailConfig = {
  host: 'smtp.zoho.in',
  port: 465,
  secure: true,
  auth: {
    user: process.env.ZOHO_USER,
    pass: process.env.ZOHO_PASS,
  },
  // Add connection timeout settings
  connectionTimeout: 10000, // 10 seconds
  greetingTimeout: 5000,   // 5 seconds
  socketTimeout: 10000,    // 10 seconds
  debug: process.env.NODE_ENV !== 'production',
  tls: {
    rejectUnauthorized: true
  }
};

export const emailDefaults = {
  from: process.env.ZOHO_USER || 'info@rightflowai.com',
  to: 'info@rightflowai.com',
  retryAttempts: 3,
  retryDelay: 1000, // 1 second
};