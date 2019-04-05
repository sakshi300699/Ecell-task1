$(document).ready(function () {
$.getJSON("http://jsonplaceholder.typicode.com/posts",
function (json) {
    console.log(json);
    var tr=[];
    for (var i = 0; i < json.length; i++) {
        tr.push('<tr>');
        tr.push("<td>" + json[i].userId + "</td>");
        tr.push("<td>" + json[i].id + "</td>");
        tr.push("<td>" + json[i].title + "</td>");
        tr.push("<td>" + json[i].body + "</td>");
        tr.push('</tr>');
    }
    $('table').append($(tr.join('')));
});
});