// Copyright 2004-present Facebook. All Rights Reserved.

import user from '../models/user';

// 这里调用的是真实的 user

test('if orginal user model', () => {
  // toEqual
  // 匹配器递归地检查所有字段的相等性，而不是检查对象标识 - 这也称为“深度相等”
  expect(user.getAuthenticated()).toEqual({age: 26, name: 'Real name'});
});
