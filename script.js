
let userData = {};

let name = prompt('Ismingizni kiriting:');
let id = prompt('ID gizni kiriting:');
let password = prompt('Parolingizni kiriting:');
function getUserData() {

  userData.name = name;
  userData.id = id;
  userData.password = password;

}
getUserData(name,id,password)
console.log('Qabul qilingan malumotlar:', userData);