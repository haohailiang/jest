// Copyright 2004-present Facebook. All Rights Reserved.

import request from './request';

// http请求获取用户的名字
export function getUserName(userID) {
  return request('/users/' + userID).then(user => user.name);
}
