var names = ['Mike', 'Min', 'Ben', 'Matt'];
//
// names.forEach(function(name){
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Mike'));

var person = {
  name: 'Mike',
  greet: function() {
    names.forEach(function(name) {
      console.log(this.name + ' says hi to ' + name)
    });
  }
};
