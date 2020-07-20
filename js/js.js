
function closeHandler() {
  Enabler.reportManualClose(); 
  Enabler.close();
}

document.getElementById('close-btn').addEventListener('click', closeHandler, false);


$(function () {
  $("#datepicker").datepicker({
      changeMonth: true,
      changeYear: true
  });
});

jQuery(function () {
  $('#datetimepicker').datetimepicker({
  viewMode: 'years'
});
});


$(document).ready(function(){
  $('#btn1').on("click",function(e){
   $('#myImg').toggle('slow');
  });
});


