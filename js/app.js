var operation = ['+', '-', '*', '/'];
var expr=$('#result').text();

function revise() {
  var lastChar = $('#result').text().slice(-1);
  for (var i = 0; i < operation.length; i++) {
    if (operation[i] === lastChar) {
      expr=$('#result').text('error typing');
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
  expr=$('#result').text();
  if(expr !== '') {
    $('#result').text($('#result').text() + '+');
  }
});

$('#minus').click(function() {
  revise();
  expr=$('#result').text();
  if(expr !== '') {
    $('#result').text($('#result').text() + '-');
  }
});

$('#mult').click(function() {
  revise();
  expr=$('#result').text();
  if(expr !== '') {
    $('#result').text($('#result').text() + '*');
  }
});

$('#division').click(function() {
  revise();
  expr=$('#result').text();
  if(expr !== '') {
    $('#result').text($('#result').text() + '/');
  }
});

$('#dot').click(function() {
  revise();
  for (var i=0; i<operation.length;i++) {
  expr=$('#result').text();
    if ((expr !== '')&&(expr.indexOf('.', expr.indexOf(operation[i])) == -1)) {
      $('#result').text($('#result').text() + '.');
    }
  }
});


$('#equal').click(function() {
  $('#result').text(eval($('#result').text()));
});


  $('#nine').click(function () {
    expr=$('#result').text();
    if (expr.length<16) {
      $('#result').text($('#result').text() + 9);
    }
  });

  $('#eight').click(function () {
    expr=$('#result').text();
    if (expr.length<16) {
      $('#result').text($('#result').text() + 8);
    }
  });

  $('#seven').click(function () {
    expr=$('#result').text();
    if (expr.length<16) {
      $('#result').text($('#result').text() + 7);
    }
  });

  $('#six').click(function () {
    expr=$('#result').text();
    if (expr.length<16) {
      $('#result').text($('#result').text() + 6);
    }
  });

  $('#five').click(function () {
    expr=$('#result').text();
    if (expr.length<16) {
      $('#result').text($('#result').text() + 5);
    }
  });

  $('#four').click(function () {
    expr=$('#result').text();
    if (expr.length<16) {
      $('#result').text($('#result').text() + 4);
    }
  });

  $('#three').click(function () {
    expr=$('#result').text();
    if (expr.length<16) {
      $('#result').text($('#result').text() + 3);
    }
  });

  $('#two').click(function () {
    expr=$('#result').text();
    if (expr.length<16) {
      $('#result').text($('#result').text() + 2);
    }
  });

  $('#one').click(function () {
    expr=$('#result').text();
    if (expr.length<16) {
      $('#result').text($('#result').text() + 1);
    }
  });

  $('#zero').click(function () {
    expr=$('#result').text();
    if (expr.length<16) {
      $('#result').text($('#result').text() + 0);
    }
  });
