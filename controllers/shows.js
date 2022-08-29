const Show = require("../schemas").show;

const showDetail = async (showId) => {
    try {
        const query = { showId };
        console.log('Controllers: ', query);
        return await Show.findOne({ showId: query.showId });
    } catch (err) {
        console.error("Error : ", err);
    }
}
const listShows = async () => {
    try {
        return await Show.find({});
    } catch (err) {
        console.error("Error : ", err);
    }
}

const filterShows = async (tag) => {
    try {
        let query = { title: { $regex: tag, $options: 'i' } };
        return await Show.find(query);
    } catch (err) {
        console.error("Error : ", err);
    }
}

module.exports = {
    listShows,
    showDetail,
    filterShows
}