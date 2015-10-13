// build nav
var slides = document.querySelector('.slideshow-holder').childNodes;
var lowerNavList = 0;
for (var i = 0; i < slides.length; i++) {
    if (slides[i].className == 'slideshow') {
        lowerNavList++;
    }
}
//console.log(lowerNavList);
addNavButtons(lowerNavList);

function addNavButtons(lowerNavList) {
    var div = document.createElement('ul');
    div.setAttribute('id', 'nav-list');
    document.querySelector('.slideshow-nav').appendChild(div);

    var navList = document.getElementById('nav-list');


    for (var i = 0; i < lowerNavList; i++) {
        var li = document.createElement('li');
        li.innerHTML = i + 1;
        if (i == 0) {
            li.setAttribute('id', 'selected');
        }

        navList.appendChild(li);
    }

}
