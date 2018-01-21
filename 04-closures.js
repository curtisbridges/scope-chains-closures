// Modify your solution from the previous lesson to set bar = true inside zip(),
// then return the function zip as the result of foo()

// Once complete, execute scope-chains-closures verify <your-file.js> to verify your
// solution.


function foo() {
  var bar;
  quux = 'global';

  function zip() {
    var quux = 'zip';
    bar = true;
  }

  return zip;
}

