import throttle from "lodash.throttle";

const refs = {
    formEl: document.querySelector('.feedback-form'),
    inputEmail: document.querySelector('[name=email]'),
    textarea: document.querySelector('[name=message]')
};

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

refs.formEl.addEventListener('submit', onFormSumbit);
refs.formEl.addEventListener('input', throttle(onInput), 500);

loadDataFromLocalStorage();

function onFormSumbit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
};
 
function onInput(event) {
    formData[event.target.name] = event.target.value;
    const formDataStrf = JSON.stringify(formData);
    localStorage.setItem(STORAGE_KEY, formDataStrf);
};

function loadDataFromLocalStorage() {
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (savedData) {
        refs.inputEmail.value = savedData.email;
        refs.textarea.value = savedData.message;
    }
};

