require('dotenv').config();

module.exports = {
    GOOGLE_SITE_VERIFICATION: process.env.GOOGLE_SITE_VERIFICATION || '',
    GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID || ''
};
