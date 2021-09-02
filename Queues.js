function Queue() {
	let collection = [];

	return {
		print: () => {
			console.log(collection);
		},
		enqueue: (element) => {
			collection.push(element);
		},
		dequeue: () => {
			return collection.shift();
		},
		front: () => {
			return collection[0];
		},
		size: () => {
			return collection.length;
		},
		isEmpty: () => {
			return collection.length === 0;
		},
	};
}

var q = new Queue();
q.enqueue('a');
q.enqueue('b');
q.enqueue('c');
q.print();
q.dequeue();
console.log(q.front());
q.print();
