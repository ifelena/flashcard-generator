var BasicCard = require("./BasicCard.js");


function ClozeCard(text, cloze) {
	this.cloze = cloze;
	this.partial = partial;
	this.fullText = fullText;


	this.addClozeCard = function(x, y, z) {
    this.ClozeCard.push(new ClozeCard(x, y, z));
  };


	var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

	// "Who was the first president of the United States?"
	console.log(firstPresident.front); 

	// "George Washington"
	console.log(firstPresident.back); 

	var firstPresidentCloze = new ClozeCard(
	"George Washington was the first president of the United States.", "George Washington");

	// "George Washington"
	console.log(firstPresidentCloze.cloze); 

	// " ... was the first president of the United States.
	console.log(firstPresidentCloze.partial);

	// "George Washington was the first president of the United States.
	console.log(firstPresidentCloze.fullText);

	// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
	var brokenCloze = new ClozeCard("This doesn't work", "oops");
	}

	var countdown = function(ClozeCard) {
    if (value > 0) {
        console.log(value);
        return countdown(value - 1);
    } else {
        return value;
    }
};
countdown(5);



module.exports = ClozeCard;