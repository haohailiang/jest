// Copyright 2004-present Facebook. All Rights Reserved.
// 默认使用的是 jest 不用专门导入

'use strict';

// 不想发送 request 请求, 添加一个 mock 测试, 详情见 __mocks__ 文件
// 告诉Jest使用我们的手动模拟
jest.mock('../request');

import * as user from '../user';

// Testing promise can be done using `.resolves`.
it('works with resolves', () => {
  // 确保添加expect.assertions以验证是否调用了一定数量的断言。否则，履行承诺不会使测试失败
  expect.assertions(1);
  // Promise 成功的情况
  return expect(user.getUserName(5)).resolves.toEqual('Paul1');
});

// The assertion for a promise must be returned.
it('works with promises', () => {
  expect.assertions(1);
  return user.getUserName(4).then(data => expect(data).toEqual('Mark'));
});

// async/await can be used.
it('works with async/await', async () => {
  expect.assertions(1);
  const data = await user.getUserName(4);
  expect(data).toEqual('Mark');
});

// async/await can also be used with `.resolves`.
it('works with async/await and resolves', async () => {
  expect.assertions(1);
  await expect(user.getUserName(5)).resolves.toEqual('Paul');
});

// Testing for async errors using `.rejects`.
it('tests error with rejects', () => {
  expect.assertions(1);
  return expect(user.getUserName(3)).rejects.toEqual({
    error: 'User with 3 not found.',
  });
});

// Testing for async errors using Promise.catch.
test('tests error with promises', async () => {
  expect.assertions(1);
  return user.getUserName(2).catch(e =>
    expect(e).toEqual({
      error: 'User with 2 not found.',
    })
  );
});

// Or using async/await.
it('tests error with async/await', async () => {
  expect.assertions(1);
  try {
    await user.getUserName(1);
  } catch (e) {
    expect(e).toEqual({
      error: 'User with 1 not found.',
    });
  }
});

// Or using async/await with `.rejects`.
it('tests error with async/await and rejects', async () => {
  expect.assertions(1);
  await expect(user.getUserName(3)).rejects.toEqual({
    error: 'User with 3 not found.',
  });
});
