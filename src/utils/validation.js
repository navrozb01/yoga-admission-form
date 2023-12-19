// validation.js

export const validateAge = (age) => {
    const parsedAge = parseInt(age, 10);
  
    if (isNaN(parsedAge)) {
      return false; // Age is not a valid number
    }
  
    // Assuming age limit is between 18 and 65
    return parsedAge >= 18 && parsedAge <= 65;
  };
  