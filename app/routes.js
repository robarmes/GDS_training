var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here

router.post('/juggling-trick', function (req, res) {

  // Make a variable and give it the value from 'juggling-balls'
  var jugglingBalls = req.session.data['juggling-balls']

  // Check whether the variable matches a condition
  if (jugglingBalls == "3 or more"){
    // Send user to next page
    res.redirect('/juggling-trick')

  // } else if (jugglingBalls == "1 or 2") {
  //   res.redirect('/1-or-2')
  //     // Send user to 1-or-2 page
  // command + ? to hide code
  } else {
    // Send user to ineligible page
    res.redirect('/ineligible')
  }

})



module.exports = router
