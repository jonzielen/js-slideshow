// build nav
var slides = document.querySelector('.slideshow-holder').childNodes;
var lowerNavList = 0;
for (var i = 0; i < slides.length; i++) {
    if (slides[i].className == 'slideshow') {
        lowerNavList++;
    }
}

addNavButtons(lowerNavList);

function addNavButtons(lowerNavList) {
    var div = document.createElement('ul');
    div.setAttribute('id', 'nav-list');
    document.querySelector('.slideshow-nav').appendChild(div);

    var navList = document.getElementById('nav-list');

    for (var i = 0; i < lowerNavList; i++) {
        var li = document.createElement('li');
        li.innerHTML = i + 1;
        li.setAttribute('data-index', i + 1);
        if (i == 0) {
            li.setAttribute('id', 'selected');
        }

        navList.appendChild(li);
    }
}

// slideshow
var fullNavList = document.querySelector('#nav-list').childNodes;

for (var i = 0; i < fullNavList.length; i++) {
    if (fullNavList[i].tagName == 'LI') {
        fullNavList[i].addEventListener('click', function() {
            document.getElementById('selected').setAttribute('id', '');
            this.setAttribute('id', 'selected');

            var newActiveIndex = this.getAttribute('data-index');

            document.getElementById('active').setAttribute('id', '');
            document.getElementsByClassName('slideshow')[newActiveIndex-1].setAttribute('id', 'active');

        }, false);
    }
}
