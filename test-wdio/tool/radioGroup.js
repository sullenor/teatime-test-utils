'use strict';

const { compose, findIndex, identity } = require('lodash/fp');
const { loadSelectors } = require('../../tool/selector');
const RadioGroup = loadSelectors('teatime-components/style/radio-group/radio-group.css');
const assert = require('power-assert');

const getSelectedIndex = compose(findIndex(identity), browser.isSelected);

before(() => browser.url('/radioGroup.html'));

describe('RadioGroup', () => {
  it('setValue()', () => {
    browser.click('[name="radio-group-motorrad-1"][value="kawasaki"] + label');
    browser.waitForSelected('[name="radio-group-motorrad-1"][value="kawasaki"]');

    const index = getSelectedIndex('[name="radio-group-motorrad-1"]');
    assert(index > -1);

    const selector = RadioGroup.wrapper +
      `:nth-of-type(${index}) [name="radio-group-motorrad-1"]`;
    assert(browser.getAttribute(selector, 'value') === 'kawasaki');
  });
});
