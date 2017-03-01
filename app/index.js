var template = require('./src/templates/home.handlebars');
var title = "Home";
var body = "Handlebars Tempate";

document.addEventListener("DOMContentLoaded", function(){
    console.log('document ready');
    var div = document.createElement('div');
    div.innerHTML = template({
        title: "Home",
        body: "A handlebars template",
        list: [
            { text: 'HTML', class: 'red' },
            { text: 'CSS', class: 'blue' },
            { text: 'JavaScript', class: 'green' }
        ]
    });
    document.body.appendChild(div);
});
