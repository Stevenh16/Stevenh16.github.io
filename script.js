let menuVisible = false;

function showMenu() {
    const nav = document.getElementById("nav");
    // Si el menú está visible, lo ocultamos
    if (menuVisible) {
        nav.classList.remove("responsive");
        menuVisible = false;
    } else {
        nav.classList.add("responsive");
        menuVisible = true;
    }
}

function select() {
    // Esto asegura que el menú se oculte al seleccionar una opción
    document.getElementById("nav").classList.remove("responsive");
    menuVisible = false;
}

function effectSkills(){
    var skills = document.getElementById("skills");
    var distance_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distance_skills >= 300){
        let skillsP = document.getElementsByClassName("progress");
        skillsP[0].classList.add("java");
        skillsP[1].classList.add("c");
        skillsP[2].classList.add("sql");
        skillsP[3].classList.add("htmlcss");
        skillsP[4].classList.add("javascript");
        skillsP[5].classList.add("excel");
        skillsP[6].classList.add("docker");
        skillsP[7].classList.add("communication");
        skillsP[8].classList.add("pr");
        skillsP[9].classList.add("teamwork");
        skillsP[10].classList.add("creativity");
        skillsP[11].classList.add("dedication");
    }
}

window.onscroll = function(){
    effectSkills();
}