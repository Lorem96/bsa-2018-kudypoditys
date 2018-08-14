const Service = require("./generalService");
const userRefreshTokenRepository = require("../repositories/userRefreshTokenRepository");
const jwt = require('jsonwebtoken');
const settings = require('../../../config/settings');
const bcrypt = require('bcrypt');
const uuidv1 = require('uuid/v1');
const { dateHelpers } = require('../helpers');

class UserTokenService extends Service {
    getByUserId(userId) {
        return this.repository.getRefreshTokenByUserId(userId);
    }

    generateForUser(userId) {
        const refreshToken = jwt.sign({ userId }, settings.jwtRefreshTokenPrivateKey);
        const currDate = dateHelpers.toUnixTimeSeconds(new Date());
        return this.repository.upsert({
            refreshToken: refreshToken,
            tillDate: currDate + settings.refreshTokenLife,
            userId: userId
        }).then(() => refreshToken);
    }
    generateAccessToken(userId) {
        const expiresDate = this.getExpiresDate();
        const toSign = {
            id: userId,
            expiresIn: expiresDate
        };

        return {
            token: jwt.sign(toSign, settings.jwtPrivateKey),
            expiresIn: expiresDate
        }

    }


    getExpiresDate() {
        const secondsFromUnixEpoch = dateHelpers.toUnixTimeSeconds(new Date());
        return secondsFromUnixEpoch + settings.accessTokenLife;
    }

    refreshToken(token) {
        let userId;
        try {
            userId = jwt.verify(token, settings.jwtRefreshTokenPrivateKey).userId;
        } catch (err) {
            return Promise.reject(new Error('invalid refresh token'));
        }

        return this.getByUserId(userId).then(model => {
            if (!model) {
                return Promise.reject(new Error('refresh token not found'));
            }
            const { refreshToken } = model.dataValues;
            const { tillDate } = model.dataValues;
            const currDate = dateHelpers.toUnixTimeSeconds(new Date());

            if (refreshToken !== token) {
                return Promise.reject(new Error('unknown refresh token for this user'));
            }
            if (tillDate < currDate) {
                return Promise.reject(new Error('refresh token is expired. Make login'));
            }

            return this.generateForUser(userId);
        }).then(newRefreshToken => ({
            refreshToken: newRefreshToken,
            ...this.generateAccessToken(userId)
        }));
    }
}

module.exports = new UserTokenService(userRefreshTokenRepository);