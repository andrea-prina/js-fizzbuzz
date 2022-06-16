const cardsWrapper = document.getElementById("cards-wrapper");

for (let i = 1; i <= 100; i++){

    // Create a new card element and give it the appropriate class
    // For each card the specific background color and text will be added as classes
    const fizzCard = document.createElement("div");
    fizzCard.classList.add("ms_card");

    // Check if the value is multiple of 3 and 5 - if yes, print "FizzBuzz"
    if (i % 3 == 0 && i % 5 == 0){
        fizzCard.classList.add("card-bg-4");
        fizzCard.innerHTML = "FizzBuzz";
    } else {

        // Check if the value is multiple of 3 - if yes, print "Fizz"
        if (i % 3 == 0){
            fizzCard.classList.add("card-bg-2");
            fizzCard.innerHTML = "Fizz";

        // Check if the value is multiple of 5 - if yes, print "Buzz"
        } else if (i % 5 == 0){
            fizzCard.classList.add("card-bg-3");
            fizzCard.innerHTML = "Buzz";

        // Otherwhise, print the value
        } else {
            fizzCard.classList.add("card-bg-1");
            fizzCard.innerHTML = i;
        }
    }

    fizzCard.addEventListener("click", function(){
        console.log(`Il valore reale di questa carta è ${i}`);
    })

    // Append the card in the wrapper element to be shown in the page
    cardsWrapper.append(fizzCard);
}