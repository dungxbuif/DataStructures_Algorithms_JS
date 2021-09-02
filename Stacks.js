//functions: push, pop, peek, length

// var letters = [];
// var word = 'racecar';
// var rword = '';

//put letters of word into stack
// for (let i = 0; i < word.length; i++) {
// 	letters.push(word[i]);
// }

//pop off stack in reverse order
// for (let i = 0; i < word.length; i++) {
// 	rword += letters.pop();
// }

// if (word === rword) {
// 	console.log(word + 'is a palidrome.');
// } else {
// 	console.log(word + 'is not a palidrome.');
// }

//Palidrome: Từ đọc xuôi (từ trái sang phải) hoặc ngược (từ phải sang trái) đều giống như nhau

/* Crete a Stack */
var Stack = function () {
	this.count = 0;
	this.storage = {};

	return {
		// Adds a value onto the end of the stack
		push: (value) => {
			this.storage[this.count] = value;
			this.count++;
		},

		// Removes and returns the value at the end of the stack
		pop: () => {
			if (this.count === 0) {
				return undefined;
			}

			this.count--;
			const result = this.storage[this.count];
			delete this.storage[this.count];
			return result;
		},
		size: () => {
			return this.count;
		},

		// Returns the value at the end of the stack
		peek: () => {
			return this.storage[this.count - 1];
		},
		values: () => {
			return this.storage;
		},
	};
};

var myStack = new Stack();

myStack.push(1);
myStack.push(2);
// console.log(myStack.peek());
// console.log(myStack.pop());
// console.log(myStack.peek());
myStack.push('freeCodeCamp');
// console.log(myStack.size());
// console.log(myStack.peek());
// console.log(myStack.pop());
// console.log(myStack.peek());
console.log(myStack);
