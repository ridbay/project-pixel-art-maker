const table = $('#pixel_canvas');
const inputHeight = $('#input_height');
const inputWidth = $('#input_width');

function makeGrid() {

  const height = parseInt(inputHeight.val());
  const width = parseInt(inputWidth.val());

  for(let row = 0; row < height; row++) {

    const tr = $('<tr></tr>');

    for(let cell = 0; cell < width; cell++) {
       tr.append(`<td>${row}${cell}</td>`);
    }

    table.append(tr);
  }
}

$('#submitBtn').on('click', makeGrid);
