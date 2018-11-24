var template = require('../templates/home.handlebars');

document.addEventListener("DOMContentLoaded", function(){
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