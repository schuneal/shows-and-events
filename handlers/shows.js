const Show = require("../controllers").shows;
const showList = async (req, res) => {
    console.log("Handler:: shows: showList");
    try {
        const shows = await Show.listShows();
        res.send(shows);
    } catch (error) {
        console.log(error);
    }
}

const showFilter = async (req, res) => {
    console.log("Handler:: shows: showFilter ", req.query);
    const { tags } = req.query;
    try {
        const shows = await Show.filterShows(tags);
        res.send(shows);
    } catch (error) {
        console.log(error);
    }
}

const showDetail = async (req, res) => {
    console.log("Handler:: shows: showDetails", req.params);
    const { showId } = req.params;
    try {
        const shows = await Show.showDetail(showId);
        res.send(shows);
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    showList,
    showFilter,
    showDetail
}