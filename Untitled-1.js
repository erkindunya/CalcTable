function myLoad() {
        var apple   = 777777;
        var apricot   = 111111  ;
        var banana   = 222222  ;
        var bilberry   = 3333 ;
        var blackberry   = 3333  ;
        var blackcurrant   = 2222 ;
        var blueberry   = 88888 ;
        var boysenberry   = 8888888 ;
        var cherry   = 99999 ;
        var coconut = 99887 ;
    $("#Apple").value = apple;
    $("#Apricot").value = apricot;
    $("#Banana").value = banana;
    $("#Bilberry").value = bilberry;
    $("#Blackberry").value = blackberry;
    $("#Blackcurrant").value = blackcurrant;
    $("#Blueberry").value = blueberry;
    $("#Boysenberry").value = boysenberry;
    $("#Cherry").value = cherry;
    $("#Coconut").value = coconut;
}

function myCalculate(){
  var volume = $("#Volume").val();
  var productOrigin = $("#ProductOrigin").val();
  var geographicalLocation = $("#GeoLocation").val();
  
  if (volume === "" || productOrigin === "") {
		// alert("Please select the product origin and volume.");
		return;
	}
  
  var tableToUse = geographicalLocation === "" ? productOrigin : geographicalLocation;
  
  $("input[type='text']").each(function(i){
    
    // Current product ID, e.g. "Apple", "Apricot", etc.
	  var currentProductId = $(this).attr('id');
    
    // Amount to multiply.
    var multiplier = $(`table#${tableToUse} tbody > tr[product='${currentProductId}'] > td[volume='${volume}']`).text();
    
    // A <span> element, to be populated with the calculated product volume.
	var result = $("<span name='result'>");

	// Calculate the figure and update the result element.
	result.text($(this).val() * multiplier); 

	// Remove any previously added <span> result elements.
	$(this).next("span").remove();

	// Insert result after the current input field.
	$(this).after(result);
    
  }); 
  
}

myLoad();

$('.select').on('change', myCalculate);
$("input[type='text']").on('keyup', myCalculate);