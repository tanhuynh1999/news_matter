class NewsController{
    
    // [GET] : news
    index (req, res){
        res.render('news/index');
    }

    // [Get]: /news/:slug
    details (req, res)
    {
        res.render('news/details');
    }
}

module.exports = new NewsController();