console.log('movies-and-jurassic-park.js is connected!');

// Test this out step 0 

var hotWater = {
  title: 'Hot Water',
  director: 'Graham Mason',
  releaseYear: 2020,
  duration: 120,
}

console.log(hotWater.title);
console.log(hotWater.director, hotWater.releaseYear);

var directorsCut = (hotWater.duration + 25);
console.log(directorsCut);



// Part 1

var snakewaterMontana = {
  paleontologist: "Dr. Alan Grant",
  depth: "10 meters",
  specimen: "Velociraptor",
};

// Do the tasks down here!


// There are many ways to interpret the 1st step. Here's one:

var guestOfHonor = {
  name: snakewaterMontana.paleontologist,
};
console.log(guestOfHonor.name);

// Here's a second interpretation 
// I think this is what you were looking for?

var guestOfHonor = snakewaterMontana.paleontologist;
console.log(guestOfHonor);

// Here's a third, though I think it's not what you're looking for,
// it answers the instructions most literally.
// I set the value of guestOfHonor to null to illustrate the instruction better.

var guestOfHonor = null;
snakewaterMontana.paleontologist = guestOfHonor;
console.log(snakewaterMontana.paleontologist);


// Here is my answer to the utterly uncontroversial step 2 of part 1:

var cleverGirl = snakewaterMontana.specimen;
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


nicaraguanSpecimens = nicaragua.specimens;

// on a good day //
favoriteSpecimen = nicaraguanSpecimens[1];

// on a bad day, overwrite previous favorite with T-rex //
favoriteSpecimen = nicaragua.specimens[0];

nicaragua.annual_budget = (nicaragua.annual_budget + 250000);


console.log(nicaraguanSpecimens);
console.log(favoriteSpecimen);
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

mexicoDepth = hammondsMines.mexico.depth;

console.log(mexicoDepth);






