const Post = require('../models/Post');

module.exports = {

    async cadastrar(req, res){
        
        return res.json({ok: true});
    }
};