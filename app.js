const btnOpenTextOne = document.querySelector('.btnOpenTextOne');
const btnOpenTextTwo = document.querySelector('.btnOpenTextTwo');
const btnOpenTextThree = document.querySelector('.btnOpenTextThree');

const btnCloseTextOne = document.querySelector('.btnCloseTextOne');
const btnCloseTextTwo = document.querySelector('.btnCloseTextTwo');
const btnCloseTextThree = document.querySelector('.btnCloseTextThree');

const questionTitleOne = document.querySelector('.question-title-one');
const questionTitleTwo = document.querySelector('.question-title-two');
const questionTitleThree = document.querySelector('.question-title-three');

const questionTextOne = document.querySelector('.question-text-one');
const questionTextTwo = document.querySelector('.question-text-two');
const questionTextThree = document.querySelector('.question-text-three');

btnOpenTextOne.addEventListener('click', () => {
    questionTextOne.classList.toggle('text-active');
    btnOpenTextOne.setAttribute('hidden', 'true');
    btnCloseTextOne.removeAttribute('hidden');
    questionTitleOne.style.marginBottom = '1rem';
});

btnCloseTextOne.addEventListener('click', () => {
    questionTextOne.classList.toggle('text-active');
    btnCloseTextOne.setAttribute('hidden', 'true');
    btnOpenTextOne.removeAttribute('hidden');
    questionTitleOne.style.marginBottom = '0';
});

btnOpenTextTwo.addEventListener('click', () => {
    questionTextTwo.classList.toggle('text-active');
    btnOpenTextTwo.setAttribute('hidden', 'true');
    btnCloseTextTwo.removeAttribute('hidden');
    questionTitleTwo.style.marginBottom = '1rem';
});

btnCloseTextTwo.addEventListener('click', () => {
    questionTextTwo.classList.toggle('text-active');
    btnCloseTextTwo.setAttribute('hidden', 'true');
    btnOpenTextTwo.removeAttribute('hidden');
    questionTitleTwo.style.marginBottom = '0';
});

btnOpenTextThree.addEventListener('click', () => {
    questionTextThree.classList.toggle('text-active');
    btnOpenTextThree.setAttribute('hidden', 'true');
    btnCloseTextThree.removeAttribute('hidden');
    questionTitleThree.style.marginBottom = '1rem';
});

btnCloseTextThree.addEventListener('click', () => {
    questionTextThree.classList.toggle('text-active');
    btnCloseTextThree.setAttribute('hidden', 'true');
    btnOpenTextThree.removeAttribute('hidden');
    questionTitleThree.style.marginBottom = '0';
});