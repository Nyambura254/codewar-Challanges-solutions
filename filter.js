//programing what is done behide server on filter search f the elements to be sorted when you try to search with given keywords

Array.prototype.filter = function(fn) { //our function intialization
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        if (fn(this[i])) newArray.push(this[i])
    }
    return newArray
}