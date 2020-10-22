const { sequelize, Usuario } = require('../models');

Usuario.findAll({include:'posts'}).then(
    data => {
        console.log(data[0].posts[0].toJSON());
        // console.log(data.map( u => u.toJSON()));
        sequelize.close();
    }
)

