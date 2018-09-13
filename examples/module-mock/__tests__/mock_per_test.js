// Copyright 2004-present Facebook. All Rights Reserved.

/**
 * This file illustrates how to define a custom mock per test.
 *
 * The file contains two test cases:
 * - One where the fruit module is mocked.
 * - One where the fruit module is not mocked.
 */
describe('define mock per test', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it('uses mocked module', () => {
    // 使用 mock 接口
    jest.doMock('../fruit', () => ({
      apple: 'mocked apple',
      default: jest.fn(() => 'mocked fruit'),
      strawberry: jest.fn(() => 'mocked strawberry'),
    }));
    const {apple, strawberry, default: defaultExport} = require('../fruit');

    const defaultExportResult = defaultExport();
    expect(defaultExportResult).toBe('mocked fruit');
    expect(defaultExport).toHaveBeenCalled();

    expect(apple).toBe('mocked apple');
    expect(strawberry()).toBe('mocked strawberry');
  });

  it('uses actual module', () => {
	// 使用真实的 模块
    jest.dontMock('../fruit');
    const {apple, strawberry, default: defaultExport} = require('../fruit');

    const defaultExportResult = defaultExport();
    expect(defaultExportResult).toBe('banana');

    expect(apple).toBe('apple');
    expect(strawberry()).toBe('strawberry');
  });
});
