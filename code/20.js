function Stack() {
	this.dataStore = [];
	this.top = 0;
	this.push = push;
	this.pop = pop;
	this.peek = peek;
	this.length = length;
}

function push(element) {
	this.dataStore[this.top++] = element;
}

function pop() {
	return this.dataStore[--this.top];
}

function peek() {
	return this.dataStore[this.top - 1];
}

function length() {
	return this.top;
}

var isValid = function(expression) {
  	var s = new Stack();
	for (var i = 0; i < expression.length; ++i) {
		if (expression[i] === '(' || expression[i] === '[' || expression[i] === '{') {
			s.push(expression[i]);
		} else if (expression[i] === ')') {
			if (s.length() > 0 && s.peek() === '(') {
				s.pop();
			} else {
				return false;
			}
		} else if (expression[i] === ']') {
			if (s.length() > 0 && s.peek() === '[') {
				s.pop();
			} else {
				return false;
			}
        }  else if (expression[i] === '}') {
			if (s.length() > 0 && s.peek() === '{') {
				s.pop();
			} else {
				return false;
			}
        }
	}
	if (s.length() === 0) {
		return true;
	} else {
		return false;
	}  
};
