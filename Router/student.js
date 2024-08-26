const express = require('express');
const router = express.Router();
var studController = require('../App/apis/Controller/studController');


router.post('/addStudent', studController.create);
router.get('/getStudent', studController.getAll);
router.get('/singleStudent/:studid', studController.getSingle);
router.put('/updateStudent/:studid', studController.updateStudent);
router.delete('/removeStudent/:studid', studController.removeStudent);


module.exports = router