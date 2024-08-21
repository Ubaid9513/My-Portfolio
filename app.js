var auto_typed = new Typed (".auto_typed",{
    strings : ["Full stack Developer", "Best UI Designer", "Best Programmer"],
    typeSpeed : 120,
    backSpeed : 120,
    loop : true 
});

var projects = {
    project_1: {
        name:"Real State Multi Web Application",
        hostLink: "https://ubaid9513.github.io/Responsive-SEL-Clone-Website/",
        sourceCode:"https://github.com/Ubaid9513/Responsive-SEL-Clone-Website",
        image:"./images/project_images/sel.png"
    },
    project_2: {
        name:"Tere Website",
        hostLink: "https://ubaid9513.github.io/Responsive-tere-Website/",
        sourceCode:"https://github.com/Ubaid9513/Responsive-tere-Website",
        image:"./images/project_images/tere_website.png"
    },
    project_3: {
        name:"Todo Application",
        hostLink: "https://ubaid9513.github.io/Todo-Application-01/",
        sourceCode:"https://github.com/Ubaid9513/Todo-Application-01",
        image:"./images/project_images/todo_application.png"
    },
    project_4: {
        name:"Calculator",
        hostLink: "https://ubaid9513.github.io/Calculator/",
        sourceCode:"https://github.com/Ubaid9513/Calculator",
        image:"./images/project_images/calculator.png"
    },
    project_5: {
        name:"Stop Watch",
        hostLink: "https://ubaid9513.github.io/Stop-Watch/",
        sourceCode:"https://github.com/Ubaid9513/Stop-Watch",
        image:"./images/project_images/stop watch.png"
    },
    project_6: {
        name:"asc",
        hostLink: "",
        sourceCode:"",
        image:"./images/project_images/sel.png"
    },
}
var projectsCard = document.getElementById("project_cards");
for(var key in projects){
    // console.log(projects[key]);
    // console.log(projectsCard);
    projectsCard.innerHTML += `
    <div class="col-12 col-sm-12 col-md-6 col-lg-3 card project_card" style="width: 20rem;">
                <img src="${projects[key].image}" class="card-img-top rounded-2 mt-2" height="200px" alt="img">
                <div class="card-body">
                    <h5 class="card-title fw-bold">${projects[key].name}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                    <hr>
                    <a href="${projects[key].hostLink}" class="btn fw-bold"
                        id="background_orange" target="_blank">View</a>
                    <a href="${projects[key].sourceCode}" class="btn fw-bold"
                        id="background_orange" target="_blank">Source Code</a>
                </div>
            </div>
    `
    
    
}