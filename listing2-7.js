var regular_joe = 'I am here to save the day!';
// logs 'I am here to save the day!'
console.log(regular_joe);
function supermax(){
  var regular_joe = 'regular_joe is assigned';
  // logs 'regular_joe is assigned'
  console.log(regular_joe);
  function prison () {
    var regular_joe;
    console.log(regular_joe);
    }
  // logs 'undefined'
  prison();
  }
supermax();
