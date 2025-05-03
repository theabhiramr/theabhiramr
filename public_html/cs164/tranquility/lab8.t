var tab
var numgen, gen
var field

fun init() {
	var r, c, x0, x1, y0, y1
	
	field: alloc(30*30)
	
	x0 : iread("Enter x0 value")
	y0 : iread("Enter y0 value")
	x1 : iread("Enter x1 value")
	y1 : iread("Enter y1 value")

	html("<body style='background-color:Grey'>")
	html("<h1>Bresenham's algorithm</h1>")
	tab : maketable(30, 30, getcell)
	r : 0
	loop {
		until .r == 30
		c : 0
		loop {
			until .c == 30
			setcell(.tab, .r, .c, "&nbsp;&nbsp;&nbsp;&nbsp;")
			putcell(.field, .r, .c, 0)
			c : .c + 1
		}
		r : .r + 1
	}
	
	#function call that will call your bresenham's function
	bresenham(.x0, .y0, .x1, .y1)
	
	
	#example of setting the value of a cell:
	putcell(.field, .y0, .x0, 3)
	putcell(.field, .y1, .x1, 2)


	#after your bresenham's algorithm runs this will fill in the table
	draw()
	html("</body>")
}

fun getcell(field, row, col) {
	#returns the value of the cell. This is used later
	#to color the appropriate cells.
	#   
	#Input specifications: field is a integer address of the first 
	#                       element in the array representing the table
	#                      row refers to the row of the cell
	#                       (also known as the y value) 
	#                      col refers to the column of the cell
	#                       (also known as the x value)
	return .(.field + .row * 30 + .col)
}

fun putcell(field, row, col, val) {
	#puts a value into a cell. This is used to color
	#the cell an appropriate color.
	#   
	#Input specifications: field is a integer address of the first 
	#                       element in the array representing the table
	#                      row refers to the row of the cell
	#                       (also known as the y value)
	#                      col refers to the column of the cell
	#                       (also known as the x value)
	#                      val refers to the integer that will be stored
	#                       in the specified cell

	(.field +(29 - .row) * 30 + .col) : .val

}

fun bresenham(x0, y0, x1, y1){
	var dx, dy, x, y, e

	dx : (.x1 - .x0)
	dy : .y1 - .y0
	x : .x0
	y : .y0
	e : 0

	loop {
		until .x > .x1 
		putcell(.field, .y, .x, 1)

		e : (.e + .dy)
		if (2*.e) > .dx {
			y : (.y + 1)
			e : (.e - .dx)
		}
		x : (.x + 1)
	}
}

fun draw() {
	#the draw() function uses the row and column values that 
	#are stored in your 2-D array and draws the table from that
	var r, c, str
	
	r : 0
	loop {
		until .r == 30
		c : 0
		loop {
			until .c == 30
			if getcell(.field, .r, .c) == 3 {
				#sets start to green
				setcellcolor(.tab, .r, .c, "green")
			}
			else if getcell(.field, .r, .c) == 1 {
				#sets each part of out line to black
				setcellcolor(.tab, .r, .c, "black")
			}
			else if getcell(.field, .r, .c) == 2 {
				#sets finish to red
				setcellcolor(.tab, .r, .c, "red")
			}
			else {
				#if not a special cell set bg color to white
				setcellcolor(.tab, .r,.c, "white")
			}
			c : .c + 1
		}
		r : .r + 1
	}
	
	#prints the numbers in the bottom row and 0th column 
	str: alloc(5)
	c : 0
	r : 0
	loop {
		until .r == 30
		i2s(str, 29 - .r)
		setcell(.tab, .r, .c, str)
		r : .r +1
	}
	r : 29
	loop {
		until .c == 30
		i2s(str, .c)
		setcell(.tab, .r, .c, str)
		c: .c + 1
	}
}
