let dataStore = [];

function saveData(data, callback) {
    try {
        dataStore.push(data);
        callback(null);
    } catch (err) {
        callback(err);
    }
}

function getData(callback) {
    try {
        callback(null, dataStore);
    } catch (err) {
        callback(err, null);
    }
}
module.exports = { saveData,getData };
