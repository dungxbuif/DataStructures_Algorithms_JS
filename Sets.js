/* Sets */

function mySet() {
	const collection = ['a'];

	this.add = (element) => {
		if (!this.has(element)) {
			collection.push(element);
			return true;
		}

		return false;
	};
	this.delete = (element) => {
		if (this.has(element)) {
			let index = collection.indexOf(element);
			collection.splice(index, 1);
			return true;
		}

		return false;
	};
	this.union = (otherSet) => {
		let unionSet = new mySet();
		let tmpArr = [...collection, ...otherSet.values()];

		tmpArr.forEach((item) => unionSet.add(item));

		return unionSet;
	};
	this.clear = () => {
		collection.splice(0, collection.length);
	};
	this.entries = () => {
		let arr = {};
		collection.forEach((item) => (arr.item = item));

		return arr;
	};
	this.has = (element) => {
		return collection.indexOf(element) !== -1;
	};
	this.forEach = (element) => {};
	this.values = () => collection;
	this.size = () => collection.length;

	// this method will return the intersection of two sets as a new set
	this.intersection = (otherSet) => {
		let intersectionSet = new mySet();
		let firstSet = this.values();
		firstSet.forEach((e) => {
			if (otherSet.has(e)) {
				intersectionSet.add(e);
			}
		});
		return intersectionSet;
	};
	// this method will return the difference of two sets as a new set
	this.difference = (otherSet) => {
		let differenceSet = new mySet();
		let firstSet = this.values();
		firstSet.forEach((e) => {
			if (!otherSet.has(e)) {
				differenceSet.add(e);
			}
		});
		return differenceSet;
	};
	// this method will test if the set is a subset of a different set
	this.subset = (otherSet) => {
		let firstSet = this.values();
		return firstSet.every((value) => {
			return otherSet.has(value);
		});
	};
}
// var setA = new mySet();
// var setB = new mySet();
// setA.add('a');
// setB.add('b');
// setB.add('c');
// setB.add('a');
// setB.add('d');
// console.log(setA.subset(setB));
// console.log(setA.intersection(setB).values());
// console.log(setB.difference(setA).values());

// var setC = new Set();
// var setD = new Set();
// setC.add('a');
// setD.add('b');
// setD.add('c');
// setD.add('a');
// setD.add('d');
// console.log(setD.values());
// setD.delete('a');
// console.log(setD.has('a'));
// console.log(setD.add('d'));
