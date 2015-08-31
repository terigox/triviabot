var method = TriviaBot.prototype;

function TriviaBot(name) {
    this._name = name;
	this._icon_emoji = ":grinning";
	this._channel = "";
}

method.getName = function() {
    return this._name;
};
method.getChannel = function() {
    return this._channel;
};
method.getIconEmoji = function() {
    return this._icon_emoji;
};
method.isStarted = function() {
	
}

method.start = function start() {
	
}

method.start = function stop() {
	
}

method.start = function getCurrentQuestion() {
	
}

method.start = function getTotalQuestions() {
	
}

method.start = function checkQuestionExists() {
	
}

method.start = function sendMessageToChannel() {
	
}



module.exports = TriviaBot;