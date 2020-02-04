// you are given a sheet--basically an object--with a position correlating to a value
// the value can be an integer, an operation, or another position
// your goal is to return a sheet with all of the values as integers

// you are provided 3 helper methods: 
  // a is_int? method, which returns a boolian regarding whether or not a value is an integer
  // a get_pos method, which returns an array of the positions from the value
  // a get_op method, which takes in a value from the object, and returns a new function,
    // which can be fed an array of integers, and it will return an integer after performing the task
  

// questions to ask: 
// do I have to worry about a stack overflow due to a ciclicle loop?
// will there be any values that are null?
// can i modify the original sheet, or should I return a new sheet?
