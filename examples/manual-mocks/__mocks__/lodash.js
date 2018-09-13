// Copyright 2004-present Facebook. All Rights Reserved.
// 声明模拟 lodash 模块
const lodash = jest.genMockFromModule('lodash');

// lodash.head = arr => 5;
lodash.head = arr => 6;

export default lodash;
