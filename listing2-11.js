var proto = {
  sentence : 4,
  probation : 2
  };

var makePrisoner = function( name, id ) {
  var prisoner = Object.create( proto );
  prisoner.name = name;
  prisoner.id = id;
  return prisoner;
  };
 
var firstPrisoner = makePrisoner( 'Joe', '12A' );
  // Both of these output 4
  console.log( firstPrisoner.sentence );
  console.log( firstPrisoner.__proto__.sentence );
  firstPrisoner.sentence = 10;
  // Outputs 10
  console.log( firstPrisoner.sentence );
  // Outputs 4
  console.log( firstPrisoner.__proto__.sentence );
  delete firstPrisoner.sentence;
  // Both of these output 4
  console.log( firstPrisoner.sentence );
  console.log( firstPrisoner.__proto__.sentence );
