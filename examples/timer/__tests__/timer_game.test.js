// Copyright 2004-present Facebook. All Rights Reserved.

'use strict';

// 调用启用假定时器
// 这使用模拟函数模拟了setTimeout和其他计时器函数
// 可以在每次测试之前手动调用或使用诸如的设置函数调用beforeEach。不这样做会导致内部使用计数器不被重置
jest.useFakeTimers();

describe('timerGame', () => {
  it('waits 1 second before ending the game', () => {
    const timerGame = require('../timerGame');
    timerGame();

	// setTimeout.mock.calls
	// 一个数组，包含已对此mock函数进行的所有调用的调用参数。数组中的每个项都是在调用期间传递的参数数组。
	// 例如：一个f被调用两次的模拟函数，带有参数f('arg1', 'arg2')，然后使用参数f('arg3', 'arg4')，将有一个如下所示的mock.calls数组：
	// [['arg1', 'arg2'], ['arg3', 'arg4']]
    // 代表模拟函数被调用1次
    expect(setTimeout.mock.calls.length).toBe(1);
	// setTimeout(fn, 1000)
	// [[fn, 1000]]
    expect(setTimeout.mock.calls[0][1]).toBe(1000);
  });

  it('calls the callback after 1 second via runAllTimers', () => {
    const timerGame = require('../timerGame');

	// 模拟函数也称为“间谍”，因为它们可以让您监视由其他代码间接调用的函数的行为，而不仅仅是测试输出。
	// 您可以使用创建模拟功能jest.fn()。如果没有给出实现，则mock函数将undefined在调用时返回。
    // 创建模拟功能
    // 模拟谁还不知道, 只有到了模拟位置才知道
    const callback = jest.fn();

    // 为模拟函数赋值
    timerGame(callback);

    // At this point in time, the callback should not have been called yet
	// toBeCalled 确保模拟功能得到调用
    // 只是赋值还没有执行,所以不会被调用
    expect(callback).not.toBeCalled();

    // Fast-forward until all timers have been executed
	// 耗尽了macro-task队列（即，所有的任务排队的setTimeout()，setInterval()和setImmediate()）
    jest.runAllTimers();

    // Now our callback should have been called!
    // macro-task 任务已经执行完了, 所有回调函数被执行
    expect(callback).toBeCalled();
    // callback 函数被调用了1次
    expect(callback.mock.calls.length).toBe(1);
  });

  it('calls the callback after 1 second via advanceTimersByTime', () => {
    const timerGame = require('../timerGame');
    const callback = jest.fn();

    timerGame(callback);

    // At this point in time, the callback should not have been called yet
    expect(callback).not.toBeCalled();

    // Fast-forward until all timers have been executed
	// 将执行已经排队setTimeout()或setInterval()将在此时间范围内执行的所有未决“宏任务”
	// 在一定时间范围内执行完macro-task中的任务
    jest.advanceTimersByTime(1000);
    // jest.advanceTimersByTime(500);

    // Now our callback should have been called!
    expect(callback).toBeCalled();
    expect(callback.mock.calls.length).toBe(1);
  });
});
