'use strict';

const { assign } = require('lodash/fp');
const { getSelectors } = require('../tool/selector');
const Check = require('./Check');

module.exports = assign(getSelectors('teatime-components/style/check-group/check-group.css'), Check);