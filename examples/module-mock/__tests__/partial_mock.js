// Copyright 2004-present Facebook. All Rights Reserved.

/**
 * This file illustrates how to do a partial mock where a subset
 * of a module's exports have been mocked and the rest
 * keep their actual implementation.
 */
import defaultExport, {apple, strawberry} from '../fruit';

jest.mock('../fruit', () => {
  const originalModule = require.requireActual('../fruit');
  const mockedModule = jest.genMockFromModule('../fruit');

  //Mock the default export and named export 'apple'.
  return Object.assign({}, mockedModule, originalModule, {
    apple: 'mocked apple',
    default: jest.fn(() => 'mocked fruit'),
  });
});

it('does a partial mock', () => {
  const defaultExportResult = defaultExport();
  expect(defaultExportResult).toBe('mocked fruit');
  expect(defaultExport).toHaveBeenCalled();

  // Apple 用的是模拟的
  expect(apple).toBe('mocked apple');
  // 草莓用的是真实的
  expect(strawberry()).toBe('strawberry');
});
