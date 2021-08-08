// setting controoller

class NewsController {
    // [Get] / news / index
    index(req, res) {
        res.render("news")
    }
    // [Get] /new/:slug
    show(req, res) {
        res.send("Hello Node js")
    }
}

module.exports = new NewsController;