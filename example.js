let { Paginator } = require('./src');
let paginator = new Paginator(200, 1, '/pages', 25, {})

let html_string = paginator.render();
console.log(html_string)
