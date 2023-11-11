let value = 0;

document.querySelectorAll('.buttonClass').forEach((element) => {
    element.addEventListener('click', () => {
        value = element.dataset.value;
        localStorage.setItem('rating',value);
        ChangeColors(element, value);
    });
});

let currentButton=null;

function ChangeColors(Element, Value) {
    if(currentButton!==null){
        currentButton.classList.remove('coloring');
    }

    Element.classList.add('coloring');
    currentButton=Element;
}

const submitButton = document.querySelector('.SubmitButton');

submitButton.addEventListener('click', () => {
    window.location.href = 'submit.html';
});






















