import "../css/project.component.css";
import { str2node } from "../js/utils.js";

export class Project {
    constructor(title, desc, imgPath, largeImgPath, githubLink) {
        this.title = title;
        this.desc = desc;
        this.img = imgPath;
        this.imgLarge = largeImgPath;
        this.github = githubLink;
    }

    render() {
        return str2node(/*html*/ `
            <div class="project">
                <picture>
                    <source media="(max-width:650px)" srcset="${this.img}">
                    <img 
                        src="${this.imgLarge}" 
                        alt=""
                        class="thumbnail"
                    >
                </picture>
                <div class="content">
                    <div class="titleIconContainer">
                        <h2 class="title">${this.title}</h2>
                        <div class="iconContainer">
                            <a href="${this.github}">
                                <iconify-icon
                                    class="icon"
                                    icon="mdi:github"
                                    aria-label="${this.title} github">
                                </iconify-icon>
                            </a>
                            <a href="${this.github}" target="_blank">
                                <iconify-icon
                                    class="icon"
                                    icon="mdi:open-in-new"
                                    aria-label="${this.title} github in new tab">
                                </iconify-icon>
                            </a>
                        </div>
                    </div>
                    <p class="description">${this.desc}</p>
                </div>
            </div>    
        `);
    }
}
