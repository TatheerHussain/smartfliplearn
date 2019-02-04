/* jshint node: true */
"use strict";

module.exports = {
    'database': 'mongodb://localhost/flilearn',
    'jwt_secret': 'fliplearning',
    'log_file': 'system.log',
    'jwt_settings': {
        expiresIn: '1hr'
    }
};