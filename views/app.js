const fileName = document.getElementById('filename');
const width = document.getElementById('width');
const height = document.getElementById('height');
const resize = document.getElementById('resize');

let url = window.location.href;

let images = [
    'encenadaport.jpg',
    'fjord.jpg',
    'icelandwaterfall.jpg',
    'palmtunnel.jpg',
    'santamonica.jpg',
];
images.forEach((image) => {
    fileName.innerHTML += `<option>${image}</option>`;
});
resize.addEventListener('click', () => {
    let n = fileName.value;
    let w = +width.value;
    let h = +height.value;

    url += `api/images?filename=${n}&width=${w}&height=${h}`;
    if (n == 'select image' || w === '' || h === '') {
        alert('insert valid data');
    } else if (w >= 6001 || height >= 6001) {
        alert("image can't be more than 6000 width or height");
    } else {
        window.location.href = url;
    }
});
