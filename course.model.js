const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Module = new Schema({
    module_name: {
        type: String
    },
    responsible_person: {
        type: String
    },
    respective_year: {
        type: String
    },
    module_credit: {
        type: Number
    }
});

module.exports = mongoose.model('Module', Module);