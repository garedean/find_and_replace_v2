describe("findAndReplace(targetPhrase, wordToReplace, replacementWord)", function() {
  it("replaces a single word in a single-word phrase", function() {
    expect(findAndReplace("kitten", "kitten", "puppy")).to.equal("puppy");
  });

  it("replaces a single word in a multi-word phrase", function() {
    expect(findAndReplace("If I had a kitten, I'd be smitten", "kitten", "puppy")).to.equal("If I had a puppy, I'd be smitten");
  });

  it("replaces multiple words in a multi-word phrase", function() {
    expect(findAndReplace("I want a kitten. And another kitten.", "kitten", "puppy")).to.equal("I want a puppy. And another puppy.");
  });

  // Note: by design, not re-capitalizing replaced words.
  it("it is case insensitive when finding and replacing", function() {
    expect(findAndReplace("I want a kitten named Kitten", "kitten", "puppy")).to.equal("I want a puppy named puppy");
  });

  it("when the first word of a sentence is capitalized, the returned phrase is capitalized", function() {
    expect(findAndReplace("Kittens, kittens everywhere!", "kittens", "puppies")).to.equal("Puppies, puppies everywhere!");
  });

  it("when the first word of a sentence is not capitalized, the returned phrase is not capitalized", function() {
    expect(findAndReplace("kittens, kittens everywhere!", "kittens", "puppies")).to.equal("puppies, puppies everywhere!");
  });
});
