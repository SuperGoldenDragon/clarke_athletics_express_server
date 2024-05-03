const db = require('../config/mysql.config');

const AuthController = () => {

    const signup = async (req, res) => {
        const { username, firstName, lastName, email, favouriteTeam, jerseyNo, country, password, confirmPassword } = req.body;
        res.send(username);
    };

    return { signup };
};

module.exports = AuthController();