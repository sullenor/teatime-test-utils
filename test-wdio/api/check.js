'use strict';

const { getCheckValue, getValue } = require('../../tool/getValue');
const { setCheckValue, setValue } = require('../../tool/setValue');
const assert = require('power-assert');

before(() => browser.url('/check.html'));

describe('Check', () => {
  it('browser.setValue()', () => {
    assert(browser.isSelected('[name="inactive-single"]') === false);
    browser.click('[name="inactive-single"] + label');
    browser.waitForSelected('[name="inactive-single"]');
    assert(browser.isSelected('[name="inactive-single"]') === true);
  });

  it('getCheckValue() / setCheckValue()', () => {
    assert(getCheckValue('[name="inactive-single"]') === true);
    setCheckValue('[name="inactive-single"]', false);
    assert(getCheckValue('[name="inactive-single"]') === false);
  });

  it('getValue() / setValue()', () => {
    assert(getValue('[name="inactive-single"]') === false);
    setValue('[name="inactive-single"]', true);
    assert(getValue('[name="inactive-single"]') === true);
  });
});