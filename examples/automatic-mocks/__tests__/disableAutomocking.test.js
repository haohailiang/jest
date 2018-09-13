// Copyright 2004-present Facebook. All Rights Reserved.

import utils from '../utils';

// 这样说明用的是真实的,不是模拟的
jest.disableAutomock();

test('original implementation', () => {
  // utils.authorize.mockReturnValue('mocked_token');

  // 等着上边模拟呢, 上边不模拟了就会报错
  expect(utils.authorize()).toBe('token');
});
