// setting controoller
class SiteController{
    index(req, res) {
        res.render('home');
    }

    sreach(req, res) {
        res.render('sreach')
    }
}

module.exports = new SiteController;