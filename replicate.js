function replicate(times, number) {
    // Check if times is negative
    if (times < 0) {
      return [];
    }
    
    // Base case
    if (times === 1) {
      return [number];
    }
    
    // Recursive case
    const arr = replicate(times - 1, number);
    arr.push(number);
    return arr;
  }
  
  module.exports = replicate;
  
    