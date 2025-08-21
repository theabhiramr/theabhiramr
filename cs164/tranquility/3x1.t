fun init() {
	var num

	num : iread("Enter n")
	loop { 
		iprint(.num)
		sprint(" ")
		until .num == 1
		num : next(.num)
	}
}

fun next(last) {
	if .last % 2 == 0 {
		return .last / 2
	}
	else {
		return 3 * .last + 1
	}
}
