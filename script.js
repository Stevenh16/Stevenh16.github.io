let menuVisible = false;

function showMenu(){
    if(menuVisible){
        document.getElementById("nav").classList = "";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function select(){
    document.getElementById("nav").classList="";
    menuVisible = false;
}

function effectSkills(){
    var skills = document.getElementById("skills");
    var distance_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distance_skills>=300){
        let skillsProgess = document.getElementsByClassName("progess");
        skills[0].classList.add("java");
        skills[1].classList.add("c");
        skills[2].classList.add("sql");
        skills[3].classList.add("htmlcss");
        skills[4].classList.add("javascript");
        skills[5].classList.add("excel");
        skills[6].classList.add("docker");
        skills[7].classList.add("comunication");
        skills[8].classList.add("pr");
        skills[9].classList.add("teamwork");
        skills[10].classList.add("creativity");
        skills[11].classList.add("dedication");
    }
}

window.onscroll = function(){
    effectSkills();
}