// Copyright 2004-present Facebook. All Rights Reserved.

// 模拟 models 目录下的 user.js
// 模拟文件应该放在 models 文件夹下的 __mocks__ 下
// 声明要被模拟的模块为 user 模块
const user = jest.genMockFromModule('../user');

console.log( "模拟被调用了!" );

user.getAuthenticated = () => ({
  age: 622,
  name: 'Mock name',
});

export default user;
