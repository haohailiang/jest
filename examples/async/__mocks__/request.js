'use strict';

// 因为我们不想在测试中访问网络，所以我们将request.js在__mocks__文件夹中为我们的模块创建一个手动模拟（该文件夹区分大小写，__MOCKS__不起作用）

const users = {
  4: {name: 'Mark'},
  5: {name: 'Paul'},
};

// 模拟 request ,调用的时候准备调用这个
export default function request(url) {
  return new Promise((resolve, reject) => {

    // /users/5 7 5 5
	// console.log( url,  '/users/'.length, url.substr('/users/'.length), parseInt(url.substr('/users/'.length), 10));
    const userID = parseInt(url.substr('/users/'.length), 10);
    process.nextTick(
      () =>
        users[userID]
          ? resolve(users[userID])
          : reject({
              error: 'User with ' + userID + ' not found.',
            })
    );
  });
}
