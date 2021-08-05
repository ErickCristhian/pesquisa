const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

module.exports = {
    async create(request, response) {
        const { Login, Senha } = request.body;
        const user = await User.findOne({ email: Login })
        
        if (!user) {
            response.status(400).json({ error: 'Nenhum usuário encontrado, verifique seu email e senha.'});
        }
        if(bcrypt.compareSync(Senha, user.password)){
            return response.json(user);
        }
        
        response.status(403).json({error: 'A senha informada está incorreta'})
    }
};