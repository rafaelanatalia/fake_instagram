const { Post } = require('../models');

module.exports = {
    create: (req,res)=>{
        let post = Post.create(
            {
                texto:req.body.texto,
                img: null,
                usuarios_id: 1,
                n_likes: 0
            });

        // Quero que, ao inves de retornar um JSON com as info enviadas
        // redirecione o visitante para a págida de /home
        res.redirect('/home');

        // res.render('index'); // NÃO É ISSO QUE a gente quer.
        
    }
}