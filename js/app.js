var operation = ['+', '-', '*', '/', '.'];
var expr=$('#result').text('');


function revise() {
    var j='.';
    var lastChar = $('#result').text().slice(-1);
    for (var i = 0; i < operation.length; i++) {
      if (operation[i] == lastChar) {
        expr=$('#result').text('Err');
      }
      if (j.length>1) {
        expr=$('#result').text('Err');
      }
    }
}

$('#clear-all-numbers').click(function() {
  expr=$('#result').text('');
});

$('#clear-current-numbers').click(function() {
  expr=$('#result').text($('#result').text().slice(0,-1));
  });

$('#plus').click(function() {
  revise();
  $('#result').text($('#result').text() + '+');
});

$('#minus').click(function() {
  revise();
  $('#result').text($('#result').text() + '-');
});

$('#mult').click(function() {
  revise();
  $('#result').text($('#result').text() + '*');
});

$('#division').click(function() {
  revise();
  $('#result').text($('#result').text() + '/');
});

$('#dot').click(function() {
  revise();
  $('#result').text($('#result').text() + '.');
});

$('#equal').click(function() {
  $('#result').text(eval($('#result').text()));
});

$('#nine').click(function() {
  $('#result').text($('#result').text() + 9);
});

$('#eight').click(function() {
  $('#result').text($('#result').text() + 8);
});

$('#seven').click(function() {
  $('#result').text($('#result').text() + 7);
});

$('#six').click(function() {
  $('#result').text($('#result').text() + 6);
});

$('#five').click(function() {
  $('#result').text($('#result').text() + 5);
});

$('#four').click(function() {
  $('#result').text($('#result').text() + 4);
});

$('#three').click(function() {
  $('#result').text($('#result').text() + 3);
});

$('#two').click(function() {
  $('#result').text($('#result').text() + 2);
});

$('#one').click(function() {
  $('#result').text($('#result').text() + 1);
});

$('#zero').click(function() {
  $('#result').text($('#result').text() + 0);
});