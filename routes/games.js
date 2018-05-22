var express = require('express');
var router = express.Router();
var Games = require('../models').Games;

var movies = [
  { id: 1, title: 'Deus ex' },
  { id: 2, title: 'Gears of War' },
  { id: 3, title: 'Half Life' }
]

/* GET game listings. */
router.get('/', function(req, res) {
  res.render('games', { games: games });
});

/* POST add game listing */
router.post('/', function(req, res) {
  var title = req.body.title;
  Game.create({ title: title })
    .then( function() {
      res.redirect('/games');
  });
});



module.exports = router;