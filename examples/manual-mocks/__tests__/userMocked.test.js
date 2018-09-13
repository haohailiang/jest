// Copyright 2004-present Facebook. All Rights Reserved.

import user from '../models/user';

// 这才调用的是模拟的 user
// 如果需要mock的模块是scoped模块，
// 那么我们创建的mock的名字需要一致，
// mock模块名字为 @scope/project-name，
// 那么就需要创建mocks/@scope/project-name.js。
jest.mock('../models/user');

test('if user model is mocked', () => {
  expect(user.getAuthenticated()).toEqual({age: 622, name: 'Mock name'});
});
