const sentence = "hello there from lighthouse labs";

let counter = 0;

// Attempt 1 Recurrsion
const hopeThisWorks1 = function(stringRay) {
  if (counter < stringRay.length) {
    process.stdout.write(stringRay[counter]);
    counter++;
    setTimeout(() => {
      hopeThisWorks1(stringRay);
    }, 50);
  } else {
    process.stdout.write('\n');
  }
};

hopeThisWorks1(sentence);

// Attempt 2 with help of my imaginary friend Google
const hopeThisWorks2 = function(stringRay) {
  for (let i = 0; i < stringRay.length; i++) {
    setTimeout(() => {
      process.stdout.write(stringRay[i]);
    }, i * 50);
  }
  setTimeout(() => {
    process.stdout.write('\n');
  }, stringRay.length * 50);
};

setTimeout(() => hopeThisWorks2(sentence), 1800);

// I think this approach is not as flexible as the
// recursion one where each loop could work on the
// whatever data provided in the previous loop,
// since each loop only starts after the last one.
// Whereas this pseudo-asynchronous approach may
// be in consistent in real world situations where
// the delays are caused by hardware and networking.
// More testing needed to confirm this theory.