// Copyright 2004-present Facebook. All Rights Reserved.

console.log( "调用真实的uritls" );

export default {
  authorize: () => 'token',
  isAuthorized: secret => secret === 'wizard',
};
