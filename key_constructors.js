(function() {

  'use strict';

  //WELCOME TO THE CHARACTER CREATOR
  // Please follow the instructions for each question and answer to the best of your abilities.
  // The solutions are included in the zip but do not reference them until you and your partner(s)
  // have researched and tried everything you can think of.
  // Modify your answers as you go through to make the following console.log statements work :

  //Each console.log statement number corresponds to the question that should make it work.
  //*********************************************

  // 1) console.log(BadGuy);
  // 3) console.log(badDude.name);
  // 4) console.log(scaryGuy.name);
  // 6) console.log(badDude.sayTagLine());

  //*********************************************

  // 1) Create a constructor function called BadGuy.

  // 2) Give the BadGuy constructor the ability to take a parameter of "name".
  // Inside the constructor function, assign the parameter "name" to the property of name so when you
  // create a new instance of BadGuy, you can assign the bad guy a name.

  // 3) Create a new instance of BadGuy called badDude. Give badDude the name of "Hans Gruber"

  // 4) Create a new instance of BadGuy called scaryGuy. Give scaryGuy the name of "Freddy"

  // 5) Give the BadGuy constructor a tagLine method that will take the parameter "tagline" and say the tag line when prompted by a new instance in the following format: console.log("this.name" + " said " + this.tagline); ...

  // 6) Make Hans Gruber (the badDude instance say "That's a beautiful suit....I'd hate to ruin it.")

  function BadGuy(options) {
    var options = options || {};
    var that = this;

    for (var key in options) {
      if (options.hasOwnProperty(key)) {
        that[key] = options[key];
      }
    }

    // another iteraton example; can use instead of the for loop above
    // Object.keys(options).forEach(function(key){
    //   // use brackets instaed of dot notation b/c you're using a variable
    //   that[key] = options[key];
    // });
  }

  let badGuy = new BadGuy({ name: 'Skeletor' });
  let badDude = new BadGuy({ name: 'Hans Gruber' });
  let scaryGuy = new BadGuy({ name: 'Freddy' });

  BadGuy.prototype.sayTagLine = function(tagline) {
    console.log(`${this.name} said ${tagline}`);
  }

  // don't use fat arrow; it will take the outer function 'this' and bring it down to the instance - overriding the instance's this value
  // BadGuy.prototype.sayTagLine = (tagline) => {
  //   this.tagline = tagline;
  //   console.log(`${this.name} said ${this.tagline}`);
  // }

  console.log('badDude', badDude);
  console.log('badDude name', badDude.name);
  console.log('scaryGuy name', scaryGuy.name);
  console.log(badDude.sayTagLine("That's a beautiful suit....I'd hate to ruin it."));
})();
