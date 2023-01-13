const questionText = document.querySelectorAll('.question-text');
const questionTitle = document.querySelectorAll('.question-title'); 
const btn = document.querySelectorAll('.btn');

btn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        if (btn.firstElementChild.hasAttribute('hidden')) {
            btn.firstElementChild.removeAttribute('hidden');
            btn.lastElementChild.setAttribute('hidden', true);
            questionText.item(index).setAttribute('hidden', true);
            questionTitle.item(index).style.paddingBottom = '0';
        } else { 
            btn.firstElementChild.setAttribute('hidden', true);
            btn.lastElementChild.removeAttribute('hidden');
            questionText.item(index).removeAttribute('hidden');
            questionTitle.item(index).style.paddingBottom = '1.5rem';
        }
    })
})