for (let i = 1; i <= 100; i++){

    // Check if the value is multiple of 3 and 5 - if yes, print "FizzBuzz"
    if (i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz")
    } else {

        // Check if the value is multiple of 3 - if yes, print "Fizz"
        if (i % 3 == 0){
            console.log("Fizz")

        // Check if the value is multiple of 5 - if yes, print "Buzz"
        } else if (i % 5 == 0){
            console.log("Buzz")

        // Otherwhise, print the value
        } else {
            console.log(i)
        }
    }
}