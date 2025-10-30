const sign = document.querySelector('#signup-form')
const input = document.querySelector('#username')
const test = document.querySelector('#test')

sign.addEventListener('submit', (e) => {  // ← событие ставим на форму!
    e.preventDefault()

    const regEx = /^[a-zA-Z0-9]{6,12}$/   // только латинские буквы и цифры, 6–12 символов
    const inputVal = input.value           // ← берём значение из input

    if (regEx.test(inputVal)) {
        test.textContent = "Qiymat to'g'ri ✅"
        test.style.color = "lime"
    } else {
        test.textContent = "Qiymat noto'g'ri ❌"
        test.style.color = "red"
    }
})