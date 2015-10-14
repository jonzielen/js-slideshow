// build nav
var slides = document.querySelectorAll('.slideshow-holder .slideshow').length;

slideshowIndex(slides);
addNavButtons(slides);

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

// add data-index to slideshow
function slideshowIndex(slides) {
    for (var i = 0; i < slides; i++) {
        document.getElementsByClassName('slideshow')[i].setAttribute('data-index', i + 1);
    }
}

// slideshow
var fullNavList = document.querySelectorAll('#nav-list li');

for (var i = 0; i < fullNavList.length; i++) {
    fullNavList[i].addEventListener('click', function() {
        document.getElementById('selected').setAttribute('id', '');
        this.setAttribute('id', 'selected');

        var activeIndex = this.getAttribute('data-index');
        slideshowUpdate(activeIndex - 1);
    });
}

// build nav arrows
var prevArrow = document.createElement('div'),
    nextArrow = document.createElement('div');

prevArrow.setAttribute('id', 'prev');
prevArrow.innerHTML = '<';
nextArrow.setAttribute('id', 'next');
nextArrow.innerHTML = '>';

var wrapper = document.querySelector('.slideshow-wrapper');
wrapper.appendChild(prevArrow);
wrapper.appendChild(nextArrow);

// arrows nav
prevArrow.addEventListener('click', function() {
    var activeIndex = getActiveIndex();
    slideshowUpdate(activeIndex - 2);
    navLiUpdate(activeIndex - 1);
});

nextArrow.addEventListener('click', function() {
    var activeIndex = getActiveIndex();
    slideshowUpdate(activeIndex);
    navLiUpdate(activeIndex + 1);
});

function getActiveIndex() {
    return Number(document.getElementById('active').getAttribute('data-index'));
}

function slideshowUpdate(activeIndex) {
    document.getElementById('active').setAttribute('id', '');
    document.getElementsByClassName('slideshow')[activeIndex].setAttribute('id', 'active');
}

function navLiUpdate(activeIndex) {
    document.querySelector('#nav-list #selected').setAttribute('id', '');
    document.querySelector('#nav-list li[data-index="' + activeIndex + '"]').setAttribute('id', 'selected');
}

function limit(slides, activeIndex) {
    if (activeIndex > 0 && activeIndex <= slides) {
        return true;
    }
}
