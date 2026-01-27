const p = document.querySelector("p")

let text = p.innerHTML;
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

let iteration = 0;

p.addEventListener("mouseenter", function () {

    const interval = setInterval(() => {

        const str = text.split("").map((char, index) => {
             console.log(iteration, char , index);
             
            if (index < iteration) {
                return char;
            }

            return characters[Math.floor(Math.random() * characters.length)];
        }).join("");

        p.innerHTML = str;

        iteration += 0.8;


        // setInterval ko clear bhi tu krna hai jab complete ho jaye effect
        if (iteration >= text.length) {
            clearInterval(interval);
        }

    }, 100); // speed
});
