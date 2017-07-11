var listNumbers = [];

$(function() {
  $("#prime").submit(function(event) {
    event.preventDefault();
    var prime = 2;
    var theBiggest = parseInt($("input#largestNumber").val());

    for (var i = 0; (i+1) < theBiggest; i += 1) {
      listNumbers.push(prime + i);
    }
}); });
