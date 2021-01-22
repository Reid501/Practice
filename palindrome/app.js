const input = document.getElementById('input-field');
const btn = document.getElementById('btn');
const answerSentance = document.getElementById('answerSentance');
const span = document.getElementById('answerSpan');
const answerDiv = document.getElementById('answer')


const checkIfPalindrome = () => {
    answerSentance.innerHTML = '';
    span.innerHTML = '';
    // Check if input is a string
    if (input.value === '' || input.value === undefined) {
        const noWord = document.createElement("H3");
        noWord.innerHTML = 'Oppse looks like nothing was types in.'
        answerDiv.appendChild(noWord);
        console.log(input.value)
    } else {
        // Make the input into a var
        let word = input.value.toUpperCase();
        // Split input string into letter Array
        let splitWord = word.split("");
        // Loop over input array backwards, join and save the new word to a var
        let backwardsWord = [];
        for (let i = 0; i < splitWord.length; i++){
            backwardsWord.unshift(splitWord[i]);
        }
        let newWord = backwardsWord.join('');
        //check if input var and reverse var are the same
        if (newWord === word) {
            //if they are the same update the DOM with Palindrome confirmation
            span.innerHTML = word;
            console.log(span);
            answerSentance.innerHTML = `IS A PALINDROME!`;
        } else {
            // else update the DOM with non plaindrome confirmation
            span.innerHTML = word;
            answerSentance.innerHTML = `IS NOT A PALINDROME!`;
        }
    }
    input.value = '';
}

btn.addEventListener('click', checkIfPalindrome)