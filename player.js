var method = Player.prototype;

function Player(name) {
    this._name = name;
}

method.getName = function() {
    return this._name;
};

module.exports = Player;