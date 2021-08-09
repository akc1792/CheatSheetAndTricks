// //  The typeof operator in JavaScript returns "object" for arrays
// var data = ["anny" , "joe" , "dhoni"]
// // 1. array typeof 
// console.log("typeof array -->", typeof(data)) //op: object

// // 2. array test --> Array.isArray(arr)
// console.log("typeof array -->", Array.isArray(data)) //op: true

// // 3. array length 
// console.log("typeof array -->", data.length) // op: 3

// // 4. array first element and last element
// console.log("first element -->" , data[0]) //first
// console.log("Last element -->", data[data.length -1]) //last

// // 5. merge two array --> return new array
// const arr1 = ['a', 'b', 'c'];
// const arr2 = ['d', 'e', 'f'];
// const arr3 = arr1.concat(arr2);

// // merging 3 array 
// const arr4 = ["apple","mango"]
// const res = arr1.concat(arr2,arr4)n

// 6. copyWithin() --> shallow copies part of an array to another location in the <same array> and returns it without modifying its length.
// copyWithin(target,start,end) -> start and end are optional, if start is not there then it will take first index
// const array1 = ['a', 'b', 'c', 'd', 'e'];
// array1.copyWithin(1,3,4)// from 3rd index to 4th index(not included) copy at index 1st.
// console.log(array1)//op: [ 'a', 'd', 'c', 'd', 'e' ]

// 7. every function --> it will return boolean value
// Note: Calling this method on an empty array will return true for any condition!
// const array1 = [1, 30, 39, 29, 10, 13];
// let res = array1.every((ele)=>{return ele < 50})
// //let res = array1.every((ele)=>ele < 50) //both are same
// console.log(res)

// 8. array fill , fill() method changes all elements in an array to a static value from start to end and return modified array
// const array1 = [1, 2, 3, 4]; // modified original array //fill(value, start, end) , end default value arr.length
// let res = array1.fill(0,1,3)// last parametr will not include that position value
// console.log(res) // op: [ 1, 0, 0, 4 ]
// console.log(array1) // op: [ 1, 0, 0, 4 ]


// 9 . filter() method creates a new array with all elements that pass the test implemented by the provided function.
// const array1 = [1, 30, 39, 29, 10, 13];
// console.log(array1.filter((ele)=>ele < 30), array1) // it will not modified original array

// 10. find() method return first element which satisfied the given condition , if not satisfying any value will return undefined
// const array1 = [5, 12, 8, 130, 44];
// console.log(array1.find(ele=>ele > 10)) //op: 12 

// 11. includes() method The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
// const array1 = [5, 12, 8, 130, 44];
// console.log(array1.includes(8))// true

// 12 . findIndex() method returns the index of the first element in the array where predicate is true, and -1 otherwise.
    // const array1 = [5, 12, 8, 130, 44];
    // console.log(array1.findIndex((ele)=>ele > 12))

// 13. flat() method --> Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.   
// const arr1 = [0, 1, 2, [3, 4]];
// console.log(arr1.flat()) //create new array , its doesn't modified original array

// const arr2 = [0, 1, 2, [[[3, 4]]]];
// console.log(arr2.flat(2)); // The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.

// 14. forEach 
// const array1 = ['a', 'b', 'c'];
// array1.forEach(element => {
//     console.log(element)
// });

// 15. Array.from() --> creates a new , shallow-copied Array instance from an array-like or iterable object.
    // const data = [2,3,4]
    // console.log(Array.from(data, x => x * x))   // Array.from(arrayLike, (element) => { ... } )
    // console.log(Array.from(data))
    // console.log(Array.from("foo"))
   
// 16. includes() --> determines whether an array includes/contain a certain value among its entries, returning true or false as appropriate. 
// syntax includes(searchElement, fromIndex)
    // const data = [2,3,4]
    // console.log(data.includes(2)); // return true
    // console.log(data.includes("2")); // return false
    // const data = ["2",3,4]
    // console.log(data.includes("2")) // return true

    // console.log([1, 2, 3].includes(3, 3))      // false , fromIndex is greater than or equal to the array length it ll return false
    // console.log([1, 2, 3].includes(3, -1))     // true

 // 17. indexOf() --> it ll return first index of given element can be found , if not found it will return -1
 // syntax : indexOf(searchElement, fromIndex)
        // const data = [2,3,4,5,8,3]
        // console.log(data.indexOf(3)) // op : 1
        // console.log(data.indexOf(3,5))// op : 5


// 18. Array.isArray(arr)  --> method determine given value is array or not
    // const data = [2,3,4,5,8,3]
    // console.log(Array.isArray(data)) //op: true  
    //console.log(Array.isArray([]), Array.isArray([1]), Array.isArray(new Array()), Array.isArray(new Array('a', 'b', 'c', 'd')), Array.isArray(new Array(3)))

// 19 . arr.join() --> The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
    // const data = [2,3,4,5,8,3]
    // console.log(data.join()) // op : 2,3,4,5,8,3
    // console.log(data.join("-")) // op : 2-3-4-5-8-3

// 20.  map()    --> creates a new array  , result of calling provided function
    // const data = [2,3,4,5,8,3]
    // const res = data.map(ele => ele*2)
    // console.log(res) //op: [ 4, 6, 8, 10, 16, 6 ] , create new array
    // console.log(data) // op: [2,3,4,5,8,3]

// 21. reduce() : The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
    // const data = [1,2,4]
    // const reducer = (accumulator, currentValue) => accumulator + currentValue
    // console.log(data.reduce(reducer))
    // console.log(data.reduce((a,b)=>a+b))

// 22. slice(start,end) : create new array , returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.   
    // const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
    // console.log(animals.slice(2)) // op : [ 'camel', 'duck', 'elephant' ]
    // console.log(animals) // splice will not modify original array, op: [ 'ant', 'bison', 'camel', 'duck', 'elephant' ]
    // console.log(animals.slice(2, 4)); //op: [ 'camel', 'duck' ]
    // console.log(animals.slice(1, 5)); //op: [ 'bison', 'camel', 'duck', 'elephant' ]
    // console.log(animals.slice(-2)); //op: [ 'duck', 'elephant' ]
    // console.log(animals.slice(2, -1)); //op: [ 'camel', 'duck' ]


// 23 . splice() , it ll modify original array ,  method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. To access part of an array without modifying it, see slice().
// splice(start, deleteCount, item1, item2, itemN)
    // const months = ['Jan', 'March', 'April', 'June'];
    // months.splice(1, 0, 'Feb');// inserts at index 1
    // console.log(months);//[ 'Jan', 'Feb', 'March', 'April', 'June' ]
    // const a = months.splice(4, 1, 'May');// return the deleted element and modify original array
    // console.log(a)//[ 'June' ]
    // console.log(months);//[ 'Jan', 'Feb', 'March', 'April', 'May' ]

//24. reverse() : The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
    // const array1 = ['one', 'two', 'three'];
    // console.log('array1:', array1);
    // const reverseData = array1.reverse()  
    // console.log('reversed:', reverseData);  

//25. toString()  method return a string representingthe specified array and its element
    // const array1 = ['one', 'two', 'three'];
    // console.log('array1:', array1.toString(), "|   datatype: ",typeof(array1.toString()));

//26. 
    // i) push() : push element at last position and returns the new length of the array.
        // const animals = ['pigs', 'goats', 'sheep'];
        // const count = animals.push('cows');
        // console.log(count); // op: 4
        // console.log(animals);// op: ['pigs', 'goats', 'sheep', 'cows'];
        // animals.push('chickens', 'cats', 'dogs');
        // console.log(animals); //op: ['pigs', 'goats', 'sheep', 'cows', 'chickens', 'cats', 'dogs'];

    // ii) pop() : pop method remove the last elemet from array and return that element and return undefined when array is empty
        const animals = ['pigs', 'goats', 'sheep'];
        const lastEle = animals.pop(); // will return last element op: sheep
        console.log(lastEle)// will return last element, op: sheep
        console.log(animals)// modify the original array, op: ['pigs', 'goats']
    // iii) shift() :
    // iv) unshift() :