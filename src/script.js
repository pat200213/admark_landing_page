const sections = document.querySelectorAll('section'); 

window.onscroll = () => {
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop;
        const height = sec.offsetHeight;

        const id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            const navLink = document.querySelectorAll(".link-active");
            const link = document.querySelector('[href*='+ id +']');

            if(link){
                navLink.forEach(el => {
                    el.classList.remove('link-active');
               });
               
               link.classList.add('link-active');
            }
               
               
        }
    });

    if(window.scrollY > 250){
        document.querySelector('#btn-go-up').classList.remove('hidden')
    }
    else{
        document.querySelector('#btn-go-up').classList.add('hidden')
    }

    document.querySelector('#btn-go-up').addEventListener('click', function(){
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}