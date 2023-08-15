var userInfo1;
userInfo1 = function () {
    console.log("My name is Asad");
};
userInfo1();
var userInfo2;
userInfo2 = function (name) {
    console.log("My name is ".concat(name));
};
userInfo2("Asad");
var userInfo3;
userInfo3 = function (name, age) {
    return "My name is ".concat(name, " and my age is ").concat(age);
};
console.log(userInfo3("Asad", 31));
