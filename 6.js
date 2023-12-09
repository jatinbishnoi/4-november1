// Function to calculate BMI
function calculateBMI(weight, height) {
    // BMI formula: weight (kg) / (height (m) * height (m))
    let bmi = weight / (height * height);
    return bmi;
  }
  
  // Example values
  let weightInKg = 70;    // Weight in kilograms
  let heightInMeters = 1.75;  // Height in meters
  
  // Calculate BMI using the function
  let bmiResult = calculateBMI(weightInKg, heightInMeters);
  
  // Display the result
  console.log("Weight: " + weightInKg + " kg");
  console.log("Height: " + heightInMeters + " m");
  console.log("BMI: " + bmiResult.toFixed(2));
  