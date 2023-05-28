const getNewsData = () => [{
        heading: 'Excise duty on petrol to be cut',
        body: "The Government will cut 20c off excise duty on petrol and 15c off diesel as part of plan to ease the financial burden of the fuel crisis on motorists. Department of finance officials are this evening working on details of the memo, which will be brought to Cabinet ministers tomorrow morning.",
        Auther: 'Philip Ryan and Senan Molony'
    },
    {
        heading: 'Sloth is rescued from electricity line in Colombia',
        body: "Rescuer attempts to coax the frightened sloth down, but in the end resorts to using a long broom. The animal had got into peril after ascending a pole and hanging from a cable, facing the prospect of either falling or being electrocuted.",
        Auther: 'Anon',

    }
]

const newsMiddleware = (req, res, next) => {
    if (!res.locals.partials) res.locals.partials = {}
    res.locals.partials.newsContext = getNewsData()
    next()
}
const flashMiddleware = (req, res, next) => {
    // if there's a flash message, transfer
    // it to the context, then clear it

    res.locals.flash = req.session.flash
    delete req.session.flash
    next()

}

module.exports = {
    newsMiddleware: newsMiddleware,
    flashMiddleware: flashMiddleware
}