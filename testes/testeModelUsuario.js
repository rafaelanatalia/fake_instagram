const { sequelize, Usuario } = require('../models');

Usuario.findByPk(1,{include:'posts'}).then(
    usuario => {
        console.log(usuario.toJSON());


        // quantos likes tem o segundo post
        console.log(usuario.posts[1].n_likes);

        sequelize.close();
    }
    
)