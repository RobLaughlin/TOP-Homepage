export function str2node(str) {
    const node = document.createElement("template");
    node.innerHTML = str;
    return node.content.firstElementChild;
}
