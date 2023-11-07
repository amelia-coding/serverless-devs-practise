'use strict';
/*
To enable the initializer feature (https://help.aliyun.com/document_detail/156876.html)
please implement the initializer function as below：
exports.initializer = (context, callback) => {
  console.log('initializing');
  callback(null, '');
};
*/
exports.fn1 = (event, context, callback) => {
    console.log('hello world fn1');
    callback(null, 'hello world fn1');
}

exports.fn2 = (event, context, callback) => {
  console.log('hello world fn2');
  callback(null, 'hello world fn2');
}