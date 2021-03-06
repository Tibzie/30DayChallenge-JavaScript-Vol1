// You are given 2 out of 3 of the angles in a triangle, in degrees.

// Write a function that classifies the missing angle as either "acute", "right", or "obtuse" based on its degrees.

// An acute angle is one smaller than 90 degrees.
// A right angle is one that is exactly 90 degrees.
// An obtuse angle is one greater than 90 degrees (but smaller than 180 degrees).
// For example: missingAngle(11, 20) should return "obtuse",
// since the missing angle would be 149 degrees, which makes it obtuse.


function missingAngle(angle1, angle2) {
	if(180 - (angle1 + angle2) > 90) {
        return "obtuse";
    } else if (180 - (angle1 + angle2) < 90) {
        return "acute";
    } else {
        return "right";
    }
}

console.log(missingAngle(45, 45));


