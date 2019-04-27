function init() {
  //$('.appliance').draggable();
  // $('.appliance').append(
  //   $('<input/>', {
  //     type: 'range',
  //     min: '0',
  //     max: '4',
  //   })
  //
  // );


  $('#house').droppable({
    accept: '.appliance',
  });

  $('#house').on('drop', (evt, ui) => {
    let droppedName = $(ui.draggable).find('.appliance-title').html();
    let droppedId = $(ui.draggable).attr('id');
    let value = $(ui.draggable).find('input').val();
    let toCreate = $('<p/>', {id: `house-${droppedId}`, text: droppedName + ' ' + value});
    if ($(evt.target).find(`p#house-${droppedId}`).length == 0) {
      $(evt.target).append(toCreate);
    }
  });
}

window.onload = init
