// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
    btn.addEventListener('click', e => {
        // Target the class of the specific button clicked
        const styles = e.currentTarget.classList;

        // iniates the count
        if (styles.contains("decrease")) count--;
        else if (styles.contains("increase")) count ++;
        else count = 0;

        // Changes the content of the count
        value.textContent = count;

        // Change the color of the count
        if (count > 0) value.style.color = "green";
        if (count < 0) value.style.color = "red";
        if (count === 0) value.style.color = "#222"
    });
});