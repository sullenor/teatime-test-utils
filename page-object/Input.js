'use strict';

const { getContextSelector } = require('../tool/selector');
const { loadSelectors } = require('../tool/className');
const { getWebElement } = require('../tool/pageObject');
const { identity, isString } = require('lodash');
const assert = require('power-assert');

const { control, wrapper } = loadSelectors('teatime-components/style/input/input.css');

module.exports = Input;

/**
 * @param {string} [context]
 */
function Input(context = '') {
  if (!(this instanceof Input)) {
    return new Input(context);
  }

  Object.defineProperty(this, 'getSelector', {
    enumerable: false,
    value: getContextSelector(context),
  });
}

Input.prototype = Object.create({
  /**
   * @param  {string} attributeName
   * @return {string}
   */
  getAttribute: function (attributeName) {
    assert(isString(attributeName));

    this.selector = className(wrapper);
    return getWebElement(this).getAttribute(null, attributeName);
  },

  /**
   * @param  {string} attributeName
   * @return {string}
   */
  getCssProperty: function (cssProperty) {
    assert(isString(cssProperty));

    this.selector = className(wrapper);
    return getWebElement(this).getCssProperty(null, cssProperty);
  },

  getSelector: identity,
}, {
  elementSize: {
    get: function () {
      this.selector = this.getSelector(wrapper);
      return getWebElement(this).getElementSize();
    },
  },

  isDisabled: {
    get: function () {
      this.selector = this.getSelector(wrapper, control);
      return getWebElement(this).getAttribute(null, 'disabled') === 'true';
    },
  },

  html: {
    get: function () {
      this.selector = this.getSelector(wrapper, control);
      return getWebElement(this).getHTML();
    },
  },

  name: {
    get: function () {
      this.selector = this.getSelector(wrapper, control);
      return getWebElement(this).getAttribute(null, 'name');
    },
  },

  value: {
    get: function () {
      this.selector = this.getSelector(wrapper, control);
      return getWebElement(this).getValue();
    },
    set: function (value) {
      assert(isString(value));

      this.selector = this.getSelector(wrapper, control);
      getWebElement(this).setValue(null, value);

      return this;
    },
  },
});

Input.prototype.constructor = Input;
