var passtoken = passtoken || {};

passtoken.tokenCard = {
	tokenCards: [],
	
	addTokenCard: function(tokenCount) {
		var tokens = [];
		
		for (tokenCount; tokenCount > 0; tokenCount--) {
			tokens.push(Math.floor((Math.random() * 10000) + 99999));
		}
		
		this.tokenCards.push(tokens);
	},
	
	getTokenCard: function(key) {
		return this.tokenCards[key];
	},
	
	getTokenCards: function() {
		return this.tokenCards;
	},
	
	removeTokenCards: function() {
		this.tokenCards = [];
	},
	
	validateToken: function(tokenCardKey, value) {
		return (this.tokenCards[tokenCardKey].indexOf(parseInt(value)) == -1 ? false : true);
	},
	
	getKey: function(tokenCardKey, value) {
		return this.tokenCards[tokenCardKey].indexOf(parseInt(value));
	},
	
	invalidateToken: function(tokenCardKey, value) {
		this.tokenCards[tokenCardKey].splice(this.tokenCards[tokenCardKey].indexOf(parseInt(value)), 1);
	}
};