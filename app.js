console.log('Hello World');
var btn = document.getElementById('btn');
var skill = document.getElementById('skill');
// let hidebtn = document.getElementById('btn2') as HTMLButtonElement
btn.addEventListener('click', function () {
    if (skill.classList.contains('hidde')) {
        skill.classList.remove('hidde');
        btn.innerText = 'hide skill';
    }
    else {
        skill.classList.add('hidde');
        btn.innerText = 'show skill';
    }
});
