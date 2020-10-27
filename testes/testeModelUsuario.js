const { sequelize, Usuario } = require('../models');

Usuario.findByPk(2,{include:['posts','curtiu']}).then(
    usuario => {
        console.log(usuario.toJSON());
        sequelize.close();
    }
)

