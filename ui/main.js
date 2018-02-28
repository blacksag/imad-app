
var submit = document.getElementById('sbmt');
submit.onclick = function() {
    
    // Request Object
    var request = new XMLHttpRequest();
    
    //capturing response and storing it
    request.onreadystatechange = function() {
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
            var names = request.responseText;
            names = JSON.parse(names);
            var list = '';
            for (var i=0; i<names.length; i++) {
                list+= '<li>' + names[i] + '</li>';
            }
            var ul = document.getElementById('namelist');
            ul.innerHTML = list;    
            }
        }
    };
    
    var nameInput = document.getElementById('name');
    var name = nameInput.value;
    // make request
    request.open('GET','http://sudhanshujain982.imad.hasura-app.io/submit-name?name=' + name, true);
    request.send(null)
};