const checkAir = function (samples, threshold) {
  // Code here!
  let pollutionLevel = 0;
  for (quality of samples) {quality === 'dirty' ? pollutionLevel+=1 : pollutionLevel+=0}
  return [pollutionLevel]/samples.length < threshold ? "Clean" : "Polluted"
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],

  0.9
))