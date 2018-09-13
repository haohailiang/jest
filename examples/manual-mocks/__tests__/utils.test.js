import utils from '../utils';

// 这才调用的是模拟的 utils
jest.mock('../utils');

test('if utils are mocked', () => {
  // 函数都被自动模拟了
  // 现在这些都是 failure
  // 模拟函数没有被实现
  // 模拟函数也称为“间谍”，因为它们可以让您监视由其他代码间接调用的函数的行为，而不仅仅是测试输出。
  // 您可以使用创建模拟功能jest.fn()。如果没有给出实现，则mock函数将undefined在调用时返回。
  // expect(utils.authorize.mock).toBeTruthy();
  // expect(utils.isAuthorized.mock).toBeTruthy();
  // 不报错, 默认就是通过测试的
});

test('mocked implementation', () => {
  // utils.authorize.mockReturnValue('mocked_token');
  // utils.isAuthorized.mockReturnValue(true);

  // 看着多不好看, 模拟的意义不大, 可以改成手动模拟的 - 这里就是手动模拟
  expect(utils.authorize()).toBe('mocked_token');
  // 不管输入什么都是 true
  expect(utils.isAuthorized('not_wizard')).toBeTruthy();
});
