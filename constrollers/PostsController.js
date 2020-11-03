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

        // post.save();

        res.send(JSON.stringify(req.body));
    }
}