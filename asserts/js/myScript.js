//scroll section
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header ul a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top =window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset +height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header ul a[href*=' + id+ ']').classList.add('active');
            });
        }
    })
    //sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);

}



let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navList');

menuIcon.onclick =() => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//set button in project section
let list =document.querySelectorAll('.list');
let itemBox =document.querySelectorAll('.itemBox');
for (let i = 0; i < list.length; i++) {
    list[i].addEventListener('click',function (){
        for (let j = 0; j < list.length; j++) {
            list[j].classList.remove('active')
        }
        this.classList.add('active');
        let dataFilter =this.getAttribute('data-filter');
        for (let k = 0; k < itemBox.length; k++) {
            itemBox[k].classList.remove('active');
            itemBox[k].classList.add('hide');

            if (itemBox[k].getAttribute('data-item')==dataFilter || dataFilter == "all"){
                itemBox[k].classList.remove('hide');
                itemBox[k].classList.add('active');
            }
        }
    })
}