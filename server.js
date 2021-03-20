const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const moduleRoutes = express.Router();
const PORT = 4000;

let Module = require('./course.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/modules', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

moduleRoutes.route('/').get(function(req, res) {
    Module.find(function(err, modules) {
        if (err) {
            console.log(err);
        } else {
            res.json(modules);
        }
    });
});

moduleRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Module.findById(id, function(err, module) {
        res.json(module);
    });
});

moduleRoutes.route('/add').post(function(req, res) {
    let module = new Module(req.body);
    module.save()
        .then(module => {
            res.status(200).json({'module': 'module added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new module failed');
        });
});

moduleRoutes.route('/update/:id').post(function(req, res) {
    Module.findById(req.params.id, function(err, module) {
        if (!module)
            res.status(404).send('module is not found');
        else
            module.module_name = req.body.module_name;
            module.responsible_person = req.body.responsible_person;
            module.respective_year = req.body.respective_year;
            module.module_credit = req.body.module_credit;

            module.save().then(module => {
                res.json('Module is updated');
            })
            .catch(err => {
                res.status(400).send("Module update is not possible");
            });
    });
});

moduleRoutes.route('delete/:id').delete(function(req, res) {
    Module.findByIdAndDelete(req.params.id, function(err){
        if (err) {
            console.log(err);
        } else {
            res.status(200).json({'module': 'delete successfully'});
        }
    })
});

app.use('/modules', moduleRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});