// consult the oracle

var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function getAns() {
	var i = getRandomInt(1, 20);	
	var answer = lifesAnswers[i];
	return answer
}

console.log(getAns());

	