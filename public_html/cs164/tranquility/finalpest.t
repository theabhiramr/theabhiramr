# Abhiram Ramachandran
# ar3855
# 4 December 2022
# Virtual Pe(s)t Project
#
# This project can be run at: cs.drexel.edu/~ar3855/tranq/vpet.html
# The documentation for this project can be found at: cs.drexel.edu/~ar3855/tranq/docs/vpet_docs.html

var state, image, message, timer

fun init() {
    html("<center>")
    image : makeimg()
    html("<p>")
    message : makelabel("I am so excited to see you!!")
    html("<p>")
    button("Play", play)
    button("Pet", pet)
    button("Chase", chase)
    button("Feed", feed)
    button("Put to bed", to_bed)
    state : 0
    timer : timer(30000, be_menace)
    setimg(.image, "images/excited.jpg")
}

fun play() {
    stoptimer(.timer)
    if .state == 0 {
        state : 3
        setlabel(.message, "I must relax")
        setimg(.image, "images/calm.jpg")
        timer : timer(30000, be_sleepy)
    }
    else if .state == 1 {
        state : 2 
        setlabel(.message, "I need a food, please")
        setimg(.image, "images/hungry.jpg")
        timer : timer(20000, be_menace)
    }
    else if .state == 2 {
        be_menace()
    }
    else if .state == 3 {
        setlabel(.message, "I want a snuggle")
        setimg(.image, "images/calm.jpg")
        timer : timer(30000, be_sleepy)
    }
    else if .state == 4 {
        be_menace()
    }
    else if .state == 5 {
        be_excited()
    }
    else if .state == 6 {
        be_excited()
    }
    else {
        be_menace()
    }
}

fun pet() {
    stoptimer(.timer)
    if .state == 0 {
        state : 1
        setlabel(.message, "I want to play")
        setimg(.image, "images/playful.jpg")
        timer : timer(30000, be_menace)
    }
    else if .state == 1 {
        setlabel(.message, "You could throw the ball")
        setimg(.image, "images/playful.jpg")
        timer : timer(15000, be_menace)
    }
    else if .state == 2 {
        be_menace()
    }
    else if .state == 3 {
        setlabel(.message, "I am getting very sleepy")
        setimg(.image, "images/calm.jpg")
        timer : timer(20000, be_sleepy)
    }
    else if .state == 4 {
        be_sleepy()
    }
    else if .state == 5 {
        be_excited()
    }
    else if .state == 6 {
        be_excited()
    }
}

fun chase() {
    stoptimer(.timer)
    if .state == 0 {
        state : 2
        setlabel(.message, "Could I have a pepper??")
        setimg(.image, "images/hungry.jpg")
        timer : timer(20000, be_menace)
    }
    else if .state == 1 {
        state : 2
        setlabel(.message, "It is a starving bears")
        setimg(.image, "images/hungry.jpg")
        timer : timer(20000, be_menace)
    }
    else if .state == 2 {
        be_menace()
    }
    else if .state == 3 {
        be_menace()
    }
    else if .state == 4 {
        be_menace()
    }
    else if .state == 5 {
        be_excited()
    }
    else if .state == 6 {
        be_excited()
    }
    else {
        be_menace()
    }
}

fun feed() {
    stoptimer(.timer)
    if .state == 0 {
        state : 1
        setlabel(.message, "Please play with me immediately")
        setimg(.image, "images/playful.jpg")
        timer : timer(15000, be_menace)
    }
    else if .state == 1 {
        be_excited()
    }
    else if .state == 2 {
        state : 3
        setlabel(.message, "It has been an extremely long day")
        setimg(.image, "images/calm.jpg")
        timer : timer(20000, be_sleepy)
    }
    else if .state == 3 {
        setlabel(.message, "I must get a belly rub")
        setimg(.image, "images/calm.jpg")
        timer : timer(20000, be_sleepy)
    }
    else if .state == 4 {
        be_excited()
    }
    else if .state == 5 {
        be_excited()
    }
    else if .state == 6 {
        be_excited()
    }
    else if .state == 7 {
        be_excited()
    }
    else if .state == 8 {
        be_sleepy()
    }
    else {
        be_menace()
    }
}

fun to_bed() {
    stoptimer(.timer)
    if .state == 0 {
        be_menace()
    }
    else if .state == 1 {
        be_menace()
    }
    else if .state == 2 {
        be_menace()
    }
    else if .state == 3 {
        be_sleepy()
    }
    else if .state == 4 {
        be_excited()
    }
    else if .state == 8 {
        be_sleepy()
    }
    else if .state == 9 {
        be_sleepy()
    }
    else {
        be_menace()
    }
}

fun be_excited() {
    state : 0
    setlabel(.message, "Hi! Hi! Hi! Hi! Hi! Hi!")
    setimg(.image, "images/excited.jpg")
    timer : timer(30000, be_menace)
    return
}

fun be_menace() {
    var msg_timer
    timer : timer(5000, be_menace)
    setimg(.image, "images/menace.jpg")
    if .state == 0{
        state : 5
        setlabel(.message, "GIVE ME AN ATTENTION, NOW!!!")
    }
    else if .state == 1{
        state : 6
        setlabel(.message, "PLAY WITH ME!!")
    }
    else if .state == 2{
        state : 7
        setlabel(.message, "IT IS NOT THAT HARD, GIVE ME A FOOD")
    }
    else if .state == 3{
        state : 8
        setlabel(.message, "STOP CHASING ME!!!")
    }
    else if .state == 4{
        state : 9
        setlabel(.message, "HOW DARE YOU DISTURB THE SLEEP!!")
    }
    return
}

fun be_sleepy() {
    state : 4
    setlabel(.message, "I am a very sleepy bear")
    setimg(.image, "images/sleepy.jpg")
    timer : timer(30000, be_excited)
}
