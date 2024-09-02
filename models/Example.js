const mongoose = require('mongoose')

const ExampleSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    }
});

const Example = mongoose.model('Example', ExampleSchema);

module.exports = Example