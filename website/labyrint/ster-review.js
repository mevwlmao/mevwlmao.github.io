// Sterren beoordeling script

var sterren = document.querySelectorAll('#star-input span');
var gekozen = 0;

sterren.forEach(function(ster) {
    ster.addEventListener('click', function() {
        gekozen = this.dataset.waarde;
        sterren.forEach(function(s, i) {
            s.style.color = i < gekozen ? '#c9a84c' : '#444466';
        });
    });
});