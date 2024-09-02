const express = require('express');
const path = require('path');
const Example = require(path.resolve(__dirname, '../models/Example'));

const router = express.Router();

router.post('/examples', async (req, res) => {
    try {
        const example = new Example({
          name: req.body.name,
          age: req.body.age
        })
        console.log(req.body);
        await example.save()
        res.status(202).send({message: 'Data added successfully', data: example})
    } catch (error) {
        res.status(400).send(error)
    }
});

router.get('/examples', async (req, res) => {
    try {
      const examples = await Example.find();
      res.status(200).send(examples);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
  module.exports = router;