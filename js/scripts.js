var listNumbers = [];
var primeFilter = [];

function isPrime(input) {
//magic

  return
}

$(function() {
  $("#prime").submit(function(event) {
    event.preventDefault();
    var theBiggest = parseInt($("input#largestNumber").val());

    for (var prime = 2; prime <= theBiggest; prime += 1) {
      if (isPrime(prime)){
        listNumbers.push(prime);
      }
    }

  });
});
