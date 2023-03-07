const addElement = (root,elem,label) => {
    let tag = document.getElementById(root);
    let para = document.createElement(elem);
    let text = document.createTextNode(label);
    para.appendChild(text)
    tag.appendChild(para)
}
addElement("container","p","hello");
addElement("container", "LI", "hello");
addElement("container", "ul", "hello");
addElement("container","h1","hello");