document.querySelector('.jsCheckButton').addEventListener('click', () => {
    let  ageInputElement = document.querySelector('.jsAgeInput');

    let age = ageInputElement.value;
    console.log(age);

    if (age >= 18) {
        document.querySelector('.jsShowMessage').innerHTML = 'Is of age and fit to drive'
    } else {
        document.querySelector('.jsShowMessage').innerHTML = 
        'Is not of age and cannot drive';
    }
})

function getCurrentYear() {
    let currentYear = new Date().getFullYear();
    return currentYear;
}

document.querySelector('.jsDate').innerHTML = getCurrentYear();