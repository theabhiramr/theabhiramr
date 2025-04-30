# Abhiram Ramachandran
# ar3855
# Section 72H 
# This program find the time when a ball that is thrown up at a set velocity reaches its terminal height.

# Suggestions: This code can be improved in a variety of ways. The most obvious improvement is to have the variables have proper 
# names. Another impovement is with the pow function. The way it is currently set up makes it impossible to raise a to a 
# negative power. A better way to go about this would be to use an if statement in the loop. If b is positive, use the current 
# implementation, but if b is negative (>0), then multiply r by 1/(-b) and increment b. Have the loop test for when b == 0.
# Another suggestion for a better user experience is to print an error message if a negative velocity is found, as such a 
# situation is impossible (a ball cannot be thrown up downwards). 

var t, h, g, v #intializes t, h, g, v, probably represents time, height, acceleration and velocity

fun cycle() { #this function increments time if the height is positive
	if (.h >= 0 ) { #checks if height is positive
        sprint("    ")
		iprint(.t)
		sprint("   |    ")
		iprint(.h) 
		sprint("\n--------|----------\n")
		t : .t + 1 #increments time by 1 second
		calc() #calls calc function to check the height
		cycle() #calls itself, some type of loop?
	}

	return 0 #returns 0 when height reaches its highest point
}

fun calc() { # this function calculates the height with kinematics
	h : ((.g/2) * pow(.t, 2)) + (.v * .t) #finds height and stores it in h, pow used to raise arg1 to arg2                             
}

fun pow(a, b) { #this function is a^b, only works if b is positive
	var r #initializes r, return value
	r : 1 # sets r to 1

	loop {
		until .b <= 0 #checks if power is less than 0, power is decremented
		r : .r * .a #muliplies r by a, repeats until b is negative, or a reaches the power of b
		b : .b - 1 #decrements power
	}

	return .r #returns the value of a^b
}

fun init() { #intializes program
	var ui #declares ui, or user input

	ui : iread("Enter an initial velocity") #gets velocity value from user and stores it in ui

	t : 0 #sets time to 0
	h : 0 #sets height to 0
	v : .ui #sets velocity to user input
	g : -10 #sets g to acceleration due to gravity

    sprint("  Time  |  Height\n--------|----------\n")

	cycle() #calls cycle to check when height reaches 0
}
