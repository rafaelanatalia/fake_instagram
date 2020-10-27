const { sequelize, Post } = require('../models');

// Post.findAll().then(
//     data => {
//         console.log(data.map( u => u.toJSON()));
//         sequelize.close();
//     }
// )

Post.findByPk(2,{include:['usuario','comentarios','curtiram']}).then(
    post => {
        console.log(post.curtiram[0].toJSON());
        process.exit();
    }
)