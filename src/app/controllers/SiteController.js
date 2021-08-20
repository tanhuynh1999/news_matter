class SiteController {
    home(req, res) {
        res.render('site/home');
    }
}

module.exports = new SiteController();
