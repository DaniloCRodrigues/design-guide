/*===========MENU===========*/
$(document).ready(function() {
  $(".sidenav").sidenav();
});

/*===========INFO===========*/
$(".btn-info-open").click(function() {
  $(".infoextra").show();
  $(".btn-info-close").show();
  $(".btn-info-open").hide();
});

$(".btn-info-close").click(function() {
  $(".infoextra").hide();
  $(".btn-info-close").hide();
  $(".btn-info-open").show();
});

/*===========MODAL===========*/
$(document).ready(function() {
  $(".modal").modal();
});


/*===========COPIAR CODIGO===========*/
$(".btn-copy").click(function(){

  $('<input>', {
    id: 'code',
    value : $(this).data("code"),
  }).appendTo(this);

  $('#code').select();
  document.execCommand('copy');
  $('#code').remove();
  M.toast({html: 'Copiado para área de transferência', classes: 'rounded'})
})