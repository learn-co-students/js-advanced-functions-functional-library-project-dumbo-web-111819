const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(arr,alert) {
      if(Array.isArray(arr)){
        for(let i=0;i<arr.length;i++){
          alert(arr[i])
        }
        return arr
      }
      else{
        // let newArr=[]
        for(let key in arr){
          alert(arr[key])
        }
        return arr
      }
    },

    map: function(arr,func) {
      if(Array.isArray(arr)){
        let newArr=[]
        for(let i=0;i<arr.length;i++){
          newArr.push(func(arr[i]))
        }
        return newArr
      }
      else{
        let newArr=[]
        for(let key in arr){
          newArr.push(func(arr[key]))
        }
        return newArr
      }
    },

    reduce: function(arr,func,n) {

      let sum
      n ? sum=n : sum=arr[0]
      n ? arr=arr.slice() : arr=arr.slice(1,arr.length)
      for(let i=0;i<arr.length;i++){
        sum=func(sum,arr[i])
      }
      return sum

    },

    find: function(arr,item){
    let found
      for(let i=0;i<arr.length;i++){
        if(item(arr[i])){
          found=arr[i]
          break
        }
      }
      return found
    },

    filter:function(arr,func){
      let newArr=[]
      for(let i=0;i<arr.length;i++){
        if(func(arr[i])){
          newArr.push(arr[i])
        }
      }
      return newArr
    },

    size:function(arr){
      if(Array.isArray(arr)){
        return arr.length
      }
      else{
        let count=0
        for(let key in arr){
          count+=1
        }
        return count
      }
    },

    first:function(arr,n){
      return n ? arr.slice(0,n) : arr[0]
    },

    last:function(arr,n){
      return n ? arr.slice(arr.length-n,arr.length) : arr[arr.length-1]
    },

    compact: function(arr){
      let newArr=[]
      for(let i=0;i<arr.length;i++){
        if(arr[i]){
          newArr.push(arr[i])
        }
      }
      return newArr
    },

    sortBy:function(arr,func){
      let newArr=arr.slice()
      if(Array.isArray(arr)){
        newArr.sort(function(a,b){
          return func(a)-func(b)
        })
        return newArr
      }
      else{
        newArr.sort(function(a,b){
          return func(a)-func(b)
        })
        return newArr
      }
    },
    unpack: function(receiver, arr) {
      for (let val of arr)
        receiver.push(val)
    },

    flatten: function(collection, shallow, newArr=[]) {
      if (!Array.isArray(collection)) return newArr.push(collection)
      if (shallow) {
        for (let val of collection)
          Array.isArray(val) ? this.unpack(newArr, val) : newArr.push(val)
      } else {
        for (let val of collection) {
          this.flatten(val, false, newArr)
        }
      }
      return newArr
    },

    // flatten:function(arr,n,newArr=[]){
    //   n= n ? true : false
    //   // let newArr=[]
    //   for(let i =0;i<arr.length;i++){
    //     let currentElement=arr[i]
    //     if(Array.isArray(currentElement)){
    //       // flatten(currentElement)
    //       for(let j=0;j<currentElement;j++){
    //         let innerElement=currentElement[j]
    //         newArr.push(innerElement)
    //       }
    //     }
    //     else{
    //       newArr.push(currentElement)
    //     }
    //   }
    //   return newArr
    // },

    uniqSorted: function(collection, iteratee) {
      const sorted = [collection[0]]
      for (let idx = 1; idx < collection.length; idx++) {
        if (sorted[idx-1] !== collection[idx])
          sorted.push(collection[idx])
      }
      return sorted
    },

    uniq: function(collection, sorted=false, iteratee=false) {
      if (sorted) {
        return fi.uniqSorted(collection, iteratee)
      } else if (!iteratee) {
        return Array.from(new Set(collection))
      } else {
        const modifiedVals = new Set()
        const uniqVals = new Set()
        for (let val of collection) {
          const moddedVal = iteratee(val)
          if (!modifiedVals.has(moddedVal)) {
            modifiedVals.add(moddedVal)
            uniqVals.add(val)
          }
        }
        return Array.from(uniqVals)
      }
    },


    // uniq:function(arr,bool,cback){
    //   let newObj={}
    //   let newArr=[]
    //   if(bool === false && !cback){
    //     for(let i=0;i<arr.length;i++){
    //       newObj[arr[i]]=i
    //     }
    //   }

    //   // console.log(newObj)
    //   for(let key in newObj){
    //     newArr.push(parseInt(key,10))
    //   }
    //   return newArr
    
    // },

    keys:function(arr){
      let keysArr=[]
      for(let key in arr){
        keysArr.push(key)
      }
      return keysArr
    },

    values:function(arr){
      let valuesArr=[]
      for(let key in arr){
        valuesArr.push(arr[key])
      }
      return valuesArr
    },

    functions: function(obj) {
      let keysArr=[]
      for(let key in obj){
        if(obj[key]){
          keysArr.push(key)
        }

      }
      return keysArr
    },

  }
})()

fi.libraryMethod()
