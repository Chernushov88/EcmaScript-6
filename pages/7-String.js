document.title = "7-String";
let name = 'WFM';

//let str = 'Hello ' + name + ', glad to \'see\' you!';
let str = `Hello ${name}, glad to "see" you! ${5 + 10}`;
console.log(str);

let html = `
    <div>
        <h1>${name}</h1>
        <h2>${str}</h2>
        <span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, tempore.</p>
        </span>
    </div>
`;
let element = document.querySelector('#node')
element.innerHTML = html;

console.log(html);