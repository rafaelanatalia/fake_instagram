const { Usuario } = require('../models');

module.exports = {
    index: async (req,res) => {
        let usuarios = await Usuario.findAll();
        return res.json(usuarios);
    }
}