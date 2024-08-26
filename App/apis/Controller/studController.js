const studModel = require('../Model/studModel');

module.exports = {

  create: function (req, res) {
    studModel.create(req.body).then(success => {
      res.send("your data is saved into database")
    }).catch(err => {
      res.send("something  went wrong" + err)
    })
  },


  getAll: function (req, res) {
    studModel.find().then(results => {
      res.send(results)
    }).catch(err => {
      res.send("something went wrong" + err)
    })
  },


  getSingle: function (req, res) {
    studModel.findById(req.params.studid).then(results => {
      res.send(results)
    }).catch(err => {
      res.send("something went wrong" + err)
    })
  },


  updateStudent: function (req, res) {
    studModel.findByIdAndUpdate(req.params.studid, req.body).then(results => {
      res.send("your data has been updated")
    }).catch(err => {
      res.send("something went wrong")
    })
  },


  removeStudent: function (req, res) {
    studModel.findByIdAndDelete(req.params.studid).then(results => {
      res.send("your selected data has been deleted from database")
    }).catch(err => {
      res.send("something went  wrong" + err)
    })
  }



}