// class User {
//   #email;
//   #password;
//   #nickname;
//   constructor(email, password, nickname) {
//     this.#email = email;
//     this.#password = password;
//     this.#nickname = nickname;
//   }

//   static getFullUserInfo() {
//     return `${this.email}, ${this.nickname}`;
//   }

//   get getNickname() {
//     return this.nickname;
//   }
//   set setNickname(newNickname) {
//     return (this.nickname = newNickname);
//   }
// }

// const newUser = new User("asd@asd.com", "QWERTY12345!", "QWERTY");
// const newUser1 = new User("asd@asd.com", "QWERTY12345!", "QWERTY");
// const newUser2 = new User("asd@asd.com", "QWERTY12345!", "QWERTY");

// console.log(newUser.getNickname);
// newUser.setNickname = "New";

// console.log(newUser.nickname);

// console.log(User.getFullUserInfo());
