import "../css/reset.css";
import "../css/index.css";
import project1 from "../images/projects/project1.png";
import project2 from "../images/projects/project2.png";
import project3 from "../images/projects/project3.png";
import project4 from "../images/projects/project4.png";
import project5 from "../images/projects/project5.png";
import project6 from "../images/projects/project6.png";
import project1_large from "../images/projects/project1_large.png";
import project2_large from "../images/projects/project2_large.png";
import project3_large from "../images/projects/project3_large.png";
import project4_large from "../images/projects/project4_large.png";
import project5_large from "../images/projects/project5_large.png";
import project6_large from "../images/projects/project6_large.png";
import footerImage from "../images/footerImage.png";
import "iconify-icon";

import { Project } from "./project.component.js";

function injectProjects() {
    const projects = [
        [project1, project1_large],
        [project2, project2_large],
        [project3, project3_large],
        [project4, project4_large],
        [project5, project5_large],
        [project6, project6_large],
    ];

    const projectContainer = document.querySelector("#main .projects");
    for (let i = 0; i < projects.length; i++) {
        const [projectImg, projectImg_large] = projects[i];
        const title = `Project ${i}`;
        const desc =
            "Ex ex excepteur tempor excepteur minim deserunt ex commodo. Occaecat sunt aliqua commodo duis cillum nisi est.";
        const github = "#";
        const project = new Project(
            title,
            desc,
            projectImg,
            projectImg_large,
            github
        );
        projectContainer.appendChild(project.render());
    }
    projects.forEach((img) => {
        console.log(img);
    });
}

function injectFooter() {
    const footer = document.querySelector("#footer");
    const imgContainer = footer.querySelector(".imgContainer");

    const img = document.createElement("img");
    img.src = footerImage;
    img.alt = "Placeholder footer image";

    imgContainer.appendChild(img);
}

function main() {
    injectProjects();
    injectFooter();
}

main();
