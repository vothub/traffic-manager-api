'use strict';

const context = require('../context');

module.exports = (req, res) => {
  // todo write this logic
  return res.render('login', context.getFullContext());
};
