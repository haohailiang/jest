// Copyright 2004-present Facebook. All Rights Reserved.
// 在 package.json 中配置自动模拟还是手动模拟
// "automock": true

import utils from '../utils';

test('if utils are mocked', () => {
  // 函数都被自动模拟了
  expect(utils.authorize.mock).toBeTruthy();
  expect(utils.isAuthorized.mock).toBeTruthy();
});

test('mocked implementation', () => {
  utils.authorize.mockReturnValue('mocked_token');
  utils.isAuthorized.mockReturnValue(true);

  // 看着多不好看, 模拟的意义不大, 可以改成手动模拟的 -参照手动模拟
  expect(utils.authorize()).toBe('mocked_token');
  expect(utils.isAuthorized('not_wizard')).toBeTruthy();
});
