/*Abhiram Ramachandran
  CS 164 - Section 72H
  28 October 2022
  This program determines if any value from 100-999 is equal to the sum of its digits cubed and outputs those values.
  */
fun init() {
    var num, temp, n2, n1, n0, sum

    num : 100
    loop {
        until .num > 999
        temp : .num
        n2 : .temp / 100

        temp : .temp % 100
        n1 : .temp / 10
        
        n0 : .temp % 10

        sum : (.n2*.n2*.n2) + (.n1*.n1*.n1) + (.n0*.n0*.n0)
        if .sum == .num {
            iprint(.num)
            sprint("\n")
        }
        
        num : .num + 1
        
    }
}
