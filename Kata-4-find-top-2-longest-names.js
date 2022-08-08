const instructorWithLongestName = function(instructors) {
  const instructorWithLongestName = function (instructors) {
    let longerName = 0;
    for (i = 0; i < instructors.length; i++){
    for (i = 0; i < instructors.length; i++) {
      if (instructors[i]['name'].length > instructors[longerName]['name'].length) {
       indexOfLongest = i;
      } 
        indexOfLongest = i;
      }
    }
    return instructors[longerName];
  
  };

  console.log(instructorWithLongestName([
    {name: "Samuel", course: "iOS"},
    {name: "Jeremiah", course: "Web"},
    {name: "Ophilia", course: "Web"},
    {name: "Donald", course: "Web"}
  ]));
  console.log(instructorWithLongestName([
    {name: "Matthew", course: "Web"},
    {name: "David", course: "iOS"},
    {name: "Domascus", course: "Web"}
  ]));
}