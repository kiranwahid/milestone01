console.log('Hello World');

let btn = document.getElementById('btn') as HTMLButtonElement
const skill = document.getElementById('skill') as HTMLDivElement
// let hidebtn = document.getElementById('btn2') as HTMLButtonElement


 btn.addEventListener('click' , () => {
if (skill.classList.contains('hidde')) {
    skill.classList.remove('hidde')
    btn.innerText= 'hide skill'
}else{
    skill.classList.add('hidde');
    btn.innerText = 'show skill'
}
    });



    