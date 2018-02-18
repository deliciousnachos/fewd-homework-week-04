console.log('movies-and-jurassic-park.js is connected!');


// Part 0 

//// 0.1
var hotWater = {
  title: 'Hot Water',
  director: 'Graham Mason',
  releaseYear: 2020,
  duration: 120,
}
console.log(hotWater.title);

//// 0.2, 0.3
console.log(hotWater.director, hotWater.releaseYear);

//// 0.4
var directorsCut = (hotWater.duration + 25);
////// test my work
console.log(directorsCut);

//// another way to do 0.4
var directorsCut = {
  duration: (hotWater.duration + 25),
};
////// test my work
console.log(directorsCut.duration);


// Part 1

var snakewaterMontana = {
  paleontologist: "Dr. Alan Grant",
  depth: "10 meters",
  specimen: "Velociraptor",
};

// Do the tasks down here!

//// 1.1 - There are many ways to interpret the 1st step. Here's one:
var guestOfHonor = {
  name: snakewaterMontana.paleontologist,
};
////// test my work
console.log(guestOfHonor.name);

//// 1.1 - I think this is what you were looking for?
var guestOfHonor = snakewaterMontana.paleontologist;
////// test my work
console.log(guestOfHonor);

//// 1.1 - Here's a third, though I think it's not what you're looking for, it answers the instructions most literally. (It's worded like you want me to overwrite the name of the paleontologist with an unspecified new name, rather than just reference it. I set the value of guestOfHonor to null to illustrate the instruction better.)
var guestOfHonor = null;
snakewaterMontana.paleontologist = guestOfHonor;
////// test my work
console.log(snakewaterMontana.paleontologist);

//// 1.2
var cleverGirl = snakewaterMontana.specimen;
////// test my work
console.log(cleverGirl);


// Part 2

var nicaragua = {
  depth: "200 meters",
  annual_budget: 1500000,
  specimens: [
    "Tyrannosaurus Rex",
    "Stegosaurous",
    "Triceratops",
    "Velociraptor"
  ],
};

// Do the tasks down here!

//// 2.1
nicaraguanSpecimens = nicaragua.specimens;
////// test my work
console.log(nicaraguanSpecimens);

//// 2.2 - On a good day, using reference method A
favoriteSpecimen = nicaraguanSpecimens[1];
////// test my work
console.log(favoriteSpecimen);

//// 2.2 - on a bad day, using reference method B
favoriteSpecimen = nicaragua.specimens[0];
////// test my work
console.log(favoriteSpecimen);

//// 2.3
nicaragua.annual_budget = (nicaragua.annual_budget + 250000);
////// test my work
console.log(nicaragua.annual_budget);


// Part 3

var hammondsMines = {
  buenos_aires: {
    depth: "400 meters",
    annual_budget: 1000000,
    specimens: [
      "Dilophosaurus",
      "Brachiosaurus"
    ],
  },
  mexico: {
    depth: "350 meters",
    annual_budget: 900000,
    specimens: [
      "Gallimimus",
      "Parasaurolophus"
    ],
  },
};

// Do the tasks down here!

//// 3.1
mexicoDepth = hammondsMines.mexico.depth;
////// test my work
console.log(mexicoDepth);

//// 3.2
console.log(hammondsMines.buenos_aires.annual_budget);
var buenosAiresBudget = hammondsMines.buenos_aires.annual_budget;
////// test my work
console.log(buenosAiresBudget);

//// 3.3
console.log(hammondsMines.buenos_aires.specimens);

//// 3.4
hammondsMines.nicaragua = nicaragua;
////// test my work
console.log(hammondsMines.nicaragua.depth);

//// 3.5
nicaraguaBudget = hammondsMines.nicaragua.annual_budget;
mexicoBudget = hammondsMines.mexico.annual_budget;
// var buenosAiresBudget already exists from step 3.2
////// test my work
console.log('nic: ' + nicaraguaBudget + ', mex: ' + mexicoBudget + ', buenos: ' + buenosAiresBudget);

//// 3.6
var hammondsTotalBudget = (nicaraguaBudget+mexicoBudget+buenosAiresBudget);
////// test my work
console.log(hammondsTotalBudget);

//// 3.7
console.log(hammondsMines.mexico.specimens[1]);
