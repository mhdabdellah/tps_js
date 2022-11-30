const chunkSize = 10;
for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize);
    // do whatever
}

const perChunk = 2 // items per chunk    

const inputArray = ['a','b','c','d','e']

const result = inputArray.reduce((resultArray, item, index) => { 
  const chunkIndex = Math.floor(index/perChunk)

  if(!resultArray[chunkIndex]) {
    resultArray[chunkIndex] = [] // start a new chunk
  }

  resultArray[chunkIndex].push(item)

  return resultArray
}, [])

console.log(result); // result: [['a','b'], ['c','d'], ['e']]


// refresh page if experimenting and you already defined Array.prototype.chunk

Object.defineProperty(Array.prototype, 'chunk', {
    value: function(chunkSize) {
      var R = [];
      for (var i = 0; i < this.length; i += chunkSize)
        R.push(this.slice(i, i + chunkSize));
      return R;
    }
  });
  
  console.log(
    [1, 2, 3, 4, 5, 6, 7].chunk(3)
  )



//   Modified from an answer by dbaseman: https://stackoverflow.com/a/10456344/711085

  Object.defineProperty(Array.prototype, 'chunk_inefficient', {
    value: function(chunkSize) {
      var array = this;
      return [].concat.apply([],
        array.map(function(elem, i) {
          return i % chunkSize ? [] : [array.slice(i, i + chunkSize)];
        })
      );
    }
  });
  
  console.log(
    [1, 2, 3, 4, 5, 6, 7].chunk_inefficient(3)
  )
  // [[1, 2, 3], [4, 5, 6], [7]]
//   Expand snippet
//   minor addendum:
  
//   I should point out that the above is a not-that-elegant (in my mind) workaround to use Array.map. It basically does the following, where ~ is concatenation:
  
//   [[1,2,3]]~[]~[]~[] ~ [[4,5,6]]~[]~[]~[] ~ [[7]]
//   It has the same asymptotic running time as the method below, but perhaps a worse constant factor due to building empty lists. One could rewrite this as follows (mostly the same as Blazemonger's method, which is why I did not originally submit this answer):
  
//   More efficient method:
  
  // refresh page if experimenting and you already defined Array.prototype.chunk
  
  Object.defineProperty(Array.prototype, 'chunk', {
    value: function(chunkSize) {
      var R = [];
      for (var i = 0; i < this.length; i += chunkSize)
        R.push(this.slice(i, i + chunkSize));
      return R;
    }
  });
  
  console.log(
    [1, 2, 3, 4, 5, 6, 7].chunk(3)
  )
//   Full page
//   My preferred way nowadays is the above, or one of the following:
  
  Array.range = function(n) {
    // Array.range(5) --> [0,1,2,3,4]
    return Array.apply(null,Array(n)).map((x,i) => i)
  };
  
  Object.defineProperty(Array.prototype, 'chunk', {
    value: function(n) {
  
      // ACTUAL CODE FOR CHUNKING ARRAY:
      return Array.range(Math.ceil(this.length/n)).map((x,i) => this.slice(i*n,i*n+n));
  
    }
  });
//   Demo:
  
  JSON.stringify( Array.range(10).chunk(3) );
  [[1,2,3],[4,5,6],[7,8,9],[10]]
//   Or if you don't want an Array.range function, it's actually just a one-liner (excluding the fluff):
  
  var ceil = Math.ceil;
  
  Object.defineProperty(Array.prototype, 'chunk', {value: function(n) {
      return Array(ceil(this.length/n)).fill().map((_,i) => this.slice(i*n,i*n+n));
  }});
  or
  
  Object.defineProperty(Array.prototype, 'chunk', {value: function(n) {
      return Array.from(Array(ceil(this.length/n)), (_,i)=>this.slice(i*n,i*n+n));
  }});