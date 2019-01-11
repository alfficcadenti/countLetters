function countLetters(string) {
// create a object as result
var letterCount = {};
//for loop the input string
  // increase the key in the object result for the char

  for (i = 0; i < string.length; i++) {
    var key = string[i]
    if (letterCount[key]==undefined) {
            letterCount[key] = 1
      }
    else {
      letterCount[key] = letterCount[key]+1
    }
    //console.log(letter)
    //var letterCount = { "letter": 1 };

     //if (letterCount[letter]==undefined) {

     //}

    // var letterCount = {string[i]:
  }
  //console.log(letterCount)
         console.log(letterCount)

}

countLetters("lighthouse in the house")