const User = require('../models/User');
const bcrypt = require('bcryptjs');

module.exports = {
    async store(req, res) {
        try {
            var { 
                ...new_user
            } = req.body;

            const salt = bcrypt.genSaltSync(8);
            const password = bcrypt.hashSync(new_user.password, salt);

            new_user = { ...new_user, password };

            const user = await User.create(new_user);
    
            return res.json(user);    
        } catch (error) {
            console.log(error.message)
        } 
    },
    async index(req, res) {
        const users = await User.findAll();

        return res.json(users);
    }
};