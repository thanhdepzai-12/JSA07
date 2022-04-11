function changeColor(m) {
    document.getElementById('picture').src = './photo/gallery-' + m + '.jpg';
    document.getElementById('1').classList.remove('button-tab')
    document.getElementById('2').classList.remove('button-tab')
    document.getElementById('3').classList.remove('button-tab')
    document.getElementById('4').classList.remove('button-tab')
    document.getElementById('5').classList.remove('button-tab')
    document.getElementById('6').classList.remove('button-tab')
    document.getElementById('7').classList.remove('button-tab')
    document.getElementById('8').classList.remove('button-tab')
    document.getElementById('9').classList.remove('button-tab')
    document.getElementById('10').classList.remove('button-tab')
    document.getElementById('11').classList.remove('button-tab')
    document.getElementById('12').classList.remove('button-tab')
    document.getElementById(m).classList.add('button-tab')
}