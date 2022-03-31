const Post = require('../models/Post');

module.exports = {
    async listar(req, res){
        const posts = await Post.find().sort('-createdAt');

        return res.json(posts);
    },

    async cadastrar(req, res){
        const { author, place, description, hashtags } = req.body;
        const { filename: image } = req.file;

        const post = await Post.create({
            author,
            place,
            description,
            hashtags,
            image,
        })
        
        return res.json(post);
    }
};