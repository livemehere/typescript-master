{
    var User = /** @class */ (function () {
        function User(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
        Object.defineProperty(User.prototype, "fullName", {
            get: function () {
                return "".concat(this.firstName, " ").concat(this.lastName);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(User.prototype, "setFirstName", {
            set: function (value) {
                this.firstName = value;
            },
            enumerable: false,
            configurable: true
        });
        return User;
    }());
    var user = new User('Steve', 'Jobs');
    user.setFirstName = 'kong';
    console.log(user.fullName);
}
