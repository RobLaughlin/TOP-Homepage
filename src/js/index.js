import "../css/reset.css";
import "../css/index.css";
import project1 from "../images/projects/project1.png";
import project2 from "../images/projects/project2.png";
import project3 from "../images/projects/project3.png";
import project4 from "../images/projects/project4.png";
import project5 from "../images/projects/project5.png";
import project6 from "../images/projects/project6.png";
import "iconify-icon";
import { Project } from "./project.component.js";

function injectProjects() {
    const projects = [
        project1,
        project2,
        project3,
        project4,
        project5,
        project6,
    ];

    const projectContainer = document.querySelector("#main .projects");
    for (let i = 0; i < projects.length; i++) {
        const projectImg = projects[i];
        const title = `Project ${i}`;
        const desc =
            "Ex ex excepteur tempor excepteur minim deserunt ex commodo. Occaecat sunt aliqua commodo duis cillum nisi est.";
        const github = "#";
        const project = new Project(title, desc, projectImg, github);
        projectContainer.appendChild(project.render());
    }
    projects.forEach((img) => {
        console.log(img);
    });
}

function main() {
    injectProjects();
}

main();
