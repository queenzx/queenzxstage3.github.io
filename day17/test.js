var arr = [
  'abc',
  '123456',
  'qwer',
  'asdfgqwert'
];

// {length:len} = val;

// 先用map遍历解构赋值,
arr.map(function({length:len}){
  
  console.log(len)
})


function a({x:name}){
  console.log(name)
}
a({x:'jim'})