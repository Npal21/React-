function customRender(reactElement, container){

}

const reactElement = {
    type : 'a',
    props: {
        href: 'www.google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google'
}

const mainContainer = document.getElementById("root")

customRender(reactElement, mainContainer);