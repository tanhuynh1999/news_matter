const News = require('../models/News');
const { mutipleMongooseToObject } = require('../../ultil/mongoose');
const { MongooseToObject } = require('../../ultil/mongoose');

class NewsController {
    // [GET] : news
    index(req, res, next) {

         News.find({})
        .then(news => {
            res.render('news/index', {
                news: mutipleMongooseToObject(news)
            })
        })
        .catch(news => next(err))
    }

    // [Get]: /news/:slug
    details(req, res, next) {

        News.findOne({ slug: req.params.slug })
        .then(news => {
            res.render('news/details', {
                news: MongooseToObject(news)
            })
        })
        .catch(news => next(err))
        
    }
}

module.exports = new NewsController();
