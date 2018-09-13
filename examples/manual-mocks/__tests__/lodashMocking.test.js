// Copyright 2004-present Facebook. All Rights Reserved.

import lodash from 'lodash';

// 这才调用的是模拟的 user
// jest.mock('../models/user'); [这是示例, 不是写在这个文件当中的]
// jest.mock('lodash')
// 因为需要 mock 的模块是一个 node 模块
// __mocks__ 应该是紧挨着 node_modules 目录
// 这种就会自动 mock 了
// 不需要在单元测试用例里再调用jest.mock(‘module_name’)
// 自定义包省略了具体要模拟的包名称 ↑

test('if lodash head is mocked', () => {
  expect(lodash.head([2, 3])).toEqual(5);
});
