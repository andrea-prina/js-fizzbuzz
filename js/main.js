const cardsWrapper = document.getElementById("cards-wrapper");

for (let i = 1; i <= 100; i++){

    // Create a new card element and give it the appropriate class
    const fizzCard = document.createElement("div");
    fizzCard.classList.add("ms_card")

    // Check if the value is multiple of 3 and 5 - if yes, print "FizzBuzz"
    if (i % 3 == 0 && i % 5 == 0){
        fizzCard.innerHTML = "FizzBuzz";
    } else {

        // Check if the value is multiple of 3 - if yes, print "Fizz"
        if (i % 3 == 0){
            fizzCard.innerHTML = "Fizz";

        // Check if the value is multiple of 5 - if yes, print "Buzz"
        } else if (i % 5 == 0){
            fizzCard.innerHTML = "Buzz";

        // Otherwhise, print the value
        } else {
            fizzCard.innerHTML = i;
        }
    }

    // Append the card in the wrapper element to be shown in the page
    cardsWrapper.append(fizzCard);
}