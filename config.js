'use strict';

var config;
var env = process.env.NODE_ENV || 'development';
if (env === 'development'){
  config = require('./config.json');
}

exports.port = process.env.PORT || 3000;
exports.mongodb = {
  uri: process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost:27017/drywall'
};
exports.companyName = 'Company';
exports.projectName = 'CommunityEvents';
exports.systemEmail = process.env.SMTP_FROM_ADDRESS || config.systemEmail;
exports.cryptoKey = process.env.CRYPTOKEY || config.cryptoKey;
exports.loginAttempts = {
  forIp: 50,
  forIpAndUser: 7,
  logExpiration: '20m'
};
exports.requireAccountVerification = false;
exports.smtp = {
  from: {
    name: process.env.SMTP_FROM_NAME || exports.projectName +' Website',
    address: process.env.SMTP_FROM_ADDRESS || config.systemEmail
  },
  credentials: {
    user: process.env.SMTP_USERNAME || config.systemEmail,
    password: process.env.SMTP_PASSWORD || config.SMTP_PASSWORD,
    host: process.env.SMTP_HOST || config.SMTP_HOST,
    ssl: true
  }
};
exports.oauth = {
  twitter: {
    key: process.env.TWITTER_OAUTH_KEY || '',
    secret: process.env.TWITTER_OAUTH_SECRET || ''
  },
  facebook: {
    key: process.env.FACEBOOK_OAUTH_KEY || '',
    secret: process.env.FACEBOOK_OAUTH_SECRET || ''
  },
  github: {
    key: process.env.GITHUB_OAUTH_KEY || '',
    secret: process.env.GITHUB_OAUTH_SECRET || ''
  },
  google: {
    key: process.env.GOOGLE_OAUTH_KEY || '',
    secret: process.env.GOOGLE_OAUTH_SECRET || ''
  },
  tumblr: {
    key: process.env.TUMBLR_OAUTH_KEY || '',
    secret: process.env.TUMBLR_OAUTH_SECRET || ''
  }
};
