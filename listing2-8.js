var regular_joe = 'I am here to save the day!';
// logs 'I am here to save the day!'
console.log(regular_joe);
function supermax(){
  // logs 'I am here to save the day!'
  console.log(regular_joe);
  function prison () {
    console.log(regular_joe);
    }
    // logs 'I am here to save the day!'
    prison();
  }
// logs 'I am here to save the day'. Twice.
supermax();
