function sum(num1, num2) {
    var other = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        other[_i - 2] = arguments[_i];
    }
    console.log(other);
}
sum("faryal", "faryal", "faryal");
