var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('sbmt');
submit.onclick = function() {
    var names = {'name1','name2'};
    var list = '';
    for (var i=0; i<names.length; i++) {
        list+= '<li>' + name[i] + '</li>';
    }
    var ul = document.getElementById('namelist');
    ui.innerHTML=list
}