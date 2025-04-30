# Abhiram Ramachandran
# Section 72H
# ar3855
# Finite State Machine 
#
#      O    P    W
# ------------------
#  0  1/G  0/R  0/R
#  1  0/G  2/G  1/R
#  2  0/R  1/R  1/G

var state, image

fun init() {
    html("<center>")
    button("Order", proc_order)
    button("Package", proc_package)
    button("Weight", proc_weight)
    html("<p>")
    image : makeimg()
    html("</center>\n")
    state : 0
}

fun proc_order() {
    if .state == 0 {
        state : 1
        do_green()
    }
    else if .state == 1 {
        state : 0
        do_green()
    }
    else if .state == 2 {
        state : 0
        do_red()
    }
}

fun proc_package() {
    if .state == 0 {
        do_red()
    }
    else if .state == 1 {
        state : 2
        do_green()
    }
    else if .state == 2 {
        state : 1
        do_red()
    }
}

fun proc_weight() {
    if .state == 0 {
        do_red()
    }
    else if .state == 1 {
        do_red()
    }
    else if .state == 2 {
        state : 1
        do_green()
    }
}

fun do_green() {
    setimg(.image, "images/green.png")
}

fun do_red() {
    setimg(.image, "images/red.png")
}
