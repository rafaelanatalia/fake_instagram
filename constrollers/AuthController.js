const PostsController = require("./PostsController");
const { Post } = require("../models");

const AuthController = {
    
    showLogin: (req,res) => {
        res.render('auth/login');
    },

    showRegistro: (req,res) => {
        res.render('auth/register');
    },

    showHome: async (req,res) => {

        // Levantar posts com seus respectivos comentarios, autor e curtidas
        let posts = await Post.findAll({include:['usuario','comentarios','curtiram']});
        console.log(posts[0].toJSON());

        // Enviar estes posts para a view index
        res.render('index', {posts});
    }


}

module.exports = AuthController;