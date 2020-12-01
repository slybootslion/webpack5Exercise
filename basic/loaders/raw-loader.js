/*
 * loader本质上是一个函数
 * */

function loader(source){
  return `module.exports = "${source}"`
}
module.exports = loader;
