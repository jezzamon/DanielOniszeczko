
$('select.dropdown')
  .dropdown('set selected', ['html', 'css','angular'])
;


$('.dropdown')
  .dropdown({
    // you can use any ui transition
    transition: 'drop'
  })
;

$('.ui.sidebar').first()
    .sidebar('attach events', '.toggle.button')
    ;
 
$('.toggle.button')
    .removeClass('disabled')
;