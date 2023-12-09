// Function to calculate the area of a circle
function calculateCircleArea(radius) {
    // Assuming Math.PI for the value of pi
    let area = Math.PI * Math.pow(radius, 2);
    return area;
  }
  
  // Example radius value
  let radiusValue = 10;
  
  // Calculate the area of the circle using the function
  let circleArea = calculateCircleArea(radiusValue);
  
  // Display the result
  console.log("Radius: " + radiusValue);
  console.log("Area of the circle: " + circleArea.toFixed(2));
  