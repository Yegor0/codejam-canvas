const matrix4x4 = document.getElementById('4x4');
const matrix32x32 = document.getElementById('32x32');
const image = document.getElementById('img');

matrix4x4.onclick = function() {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('load', function() {
    const data = this.response;
    draw(data);
  });

  xhr.open('GET', '/data/4x4.json', true);
  xhr.responseType = 'json';
  xhr.send();

  function draw(data) {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    let col = data[0].length;
    let row = data.length;
    let scale = 512 / col;

    canvas.width = col * scale;
    canvas.height = row * scale;

    for(let i = 0; i < row; i++) {
        for(let j = 0; j < col; j++) {
            ctx.fillStyle = '#' + data[i][j];
            ctx.fillRect(j * scale, i * scale, scale, scale);
        }
    }
  }
}

matrix32x32.onclick = function() {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('load', function() {
    const data = this.response;
    console.log('data', data);
    draw(data);
  });

  xhr.open('GET', '/data/32x32.json', true);
  xhr.responseType = 'json';
  xhr.send();

  function draw(data) {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    let col = data[0].length;
    let row = data.length;
    let scale = 512 / col;

    canvas.width = col * scale;
    canvas.height = row * scale;

    for(let i = 0; i < row; i++) {
      for(let j = 0; j < col; j++) {
        ctx.fillStyle = 'rgba' + '(' + data[i][j][0] + ', ' + data[i][j][1] + ', ' + data[i][j][2] + ', ' + data[i][j][3] + ')';
        ctx.fillRect(j * scale, i * scale, scale, scale);
      }
    }
  }
}

image.onclick = function() {
    var ctx = document.getElementById('canvas').getContext('2d');
    var img = new Image();
    img.onload = function(){
      ctx.drawImage(img, 0, 0, 512, 512);
    };
    img.src = '/data/image.png';
}
