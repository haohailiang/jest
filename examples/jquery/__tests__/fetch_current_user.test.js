// Copyright 2004-present Facebook. All Rights Reserved.

jest.mock('jquery');

beforeEach(() => jest.resetModules());

it('calls into $.ajax with the correct params', () => {
  const $ = require('jquery');
  const fetchCurrentUser = require('../fetchCurrentUser');

  // Call into the function we want to test
  const dummyCallback = () => {};
  fetchCurrentUser(dummyCallback);

  // Now make sure that $.ajax was properly called during the previous
  // 2 lines
  // 希望传入的参数是这样子的
  expect($.ajax).toBeCalledWith({
    success: expect.any(Function),
    type: 'GET',
    url: 'http://example.com/currentUser',
  });
});

it('calls the callback when $.ajax requests are finished', () => {
  const $ = require('jquery');
  const fetchCurrentUser = require('../fetchCurrentUser');

  // Create a mock function for our callback
  // 创建一个 mock function 监视我们的调用
  const callback = jest.fn();
  fetchCurrentUser(callback);

  // Now we emulate the process by which `$.ajax` would execute its own
  // callback
  // 设置模拟的 值
  $.ajax.mock.calls[0 /*first call*/][0 /*first argument*/].success({
    firstName: 'Bobby',
    lastName: 'Marley',
  });

  // And finally we assert that this emulated call by `$.ajax` incurred a
  // call back into the mock function we provided as a callback
  expect(callback.mock.calls[0 /*first call*/][0 /*first arg*/]).toEqual({
    fullName: 'Bobby Marley',
    loggedIn: true,
  });
});

it('使用mock注入返回值', () => {
	const myMock = jest.fn();
	expect(myMock()).toBeUndefined();

	myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);
	expect(myMock()).toBe(10);
	expect(myMock()).toBe('x');
	expect(myMock()).toBe(true);
});

it('jest.fn 完全替换要mock的函数', () => {
	const returnsTrue = jest.fn(() => true);
	expect(returnsTrue()).toBe(true);
});
