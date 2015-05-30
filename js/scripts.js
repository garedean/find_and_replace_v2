var findAndReplace = function(targetPhrase, wordToReplace, replacementWord) {
  // Declare the word to replace as a global, case insensitive RegExp
  var re = new RegExp(wordToReplace, "gi");
  var replacementPhrase = targetPhrase.replace(re, replacementWord);
  var phraseFirstChar = targetPhrase.charAt(0);

  // Capitalize replacement phrase if original phrase was capitalized
  if (phraseFirstChar === phraseFirstChar.toUpperCase()) {
    return capitalize(replacementPhrase);
  } else {
    return replacementPhrase;
  }
}

var capitalize = function(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

$(function() {
  $("form").submit(function() {
    var targetPhrase    = $("#target-phrase").val();
    var wordToReplace   = $("#word-to-replace").val();
    var replacementWord = $("#replacement-word").val();

    $("#result-wrapper").show();
    $("#new-phrase").text(findAndReplace(targetPhrase, wordToReplace, replacementWord));

    return false;
  });
});
