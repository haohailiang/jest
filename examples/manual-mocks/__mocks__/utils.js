// 模拟返回的值
console.log( "执行了模拟的函数" );
export default {
  authorize: () => 'mocked_token',
  isAuthorized: secret => true,
};
