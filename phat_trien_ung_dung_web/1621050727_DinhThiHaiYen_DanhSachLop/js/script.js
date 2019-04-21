var grades = document.getElementsByName('grades[]');

function check() {
    for (let i = 0; i < grades.length; i++) {
        grades[i].checked = true;
    }
}

function uncheck() {
    for (let i = 0; i < grades.length; i++) {
        grades[i].checked = false;
    }
}

function change(id1, id2) {
    var myLayer = document.getElementById(id1);
    var c = document.getElementById(id2);

    if (myLayer.checked) {
        c.style.backgroundColor = "#ffffb3";
    } else {
        c.style.backgroundColor = "#ccffcc";
    }
}
