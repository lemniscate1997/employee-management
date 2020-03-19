const moment = require('moment');
const uuid = require('uuid');
const jwt = require('jsonwebtoken');
const secret = process.env.TOKEN_SECRET;

class General {
    static getDateNow() {
        return moment().toISOString();
    }

    static toDBFormat(momentDate) {
        return moment(momentDate).format('YYYY-MM-DD');
    }

    static toDBFormatWithSeconds(momentDate) {
        return moment(momentDate).format('YYYY-MM-DD HH:mm:ss');
    }

    static genUUID() {
        return uuid.v4().toUpperCase();
    }

    static getToken(data) {
        return jwt.sign(data, secret, { expiresIn: '2d' });
    }
}

module.exports = General;