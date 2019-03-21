
function myLoad() {
        var ESPValue1   = 1;
        var ESPValue2   = 1;
        var ESPValue3   = 1;
        var ESPValue4   = 1 ;
        var ESPValue5   = 1;
        var ESPValue6   = 1;
        var ESPValue7   = 1;
        var ESPValue8   = 1;
        var ESPValue9   = 1;
        var ESPValue10 = 1;
    $("#ESPValue1").value = ESPValue1;
    $("#ESPValue2").value = ESPValue2;
    $("#ESPValue3").value = ESPValue3;
    $("#ESPValue4").value = ESPValue4;
    $("#ESPValue5").value = ESPValue5;
    $("#ESPValue6").value = ESPValue6;
    $("#ESPValue7").value = ESPValue7;
    $("#ESPValue8").value = ESPValue8;
    $("#ESPValue9").value = ESPValue9;
    $("#ESPValue10").value = ESPValue10;
}

function myCalculate(){
  var projectValue = $("#projectValue").val();
  var businessUnit = $("#BusinessUnit").val();
  var geographicalLocation = $("#GeoLocation").val();
  
        // Ensure projectValue and businessUnit have been selected.
        if (projectValue === "" || businessUnit === "" || geographicalLocation === "") {
            // swal("Please select the product origin and projectValue.");
            //swal('Oops...', 'Please select the business Unit, geographical Location  and projectValue.','error');
            // alert("Please select the businessUnit and projectValue.");
            return;
        }


        // If no geographical location is set, use businessUnit.
        if (businessUnit === "RegionalBuilding" && geographicalLocation === "England") {
            var tableToUse = "RegionalBuilding";
        } else if (businessUnit === "RegionalBuilding" && geographicalLocation === "Wales") {
            var tableToUse = "RegionalBuildingWales";
        } else if (businessUnit === "RegionalBuilding" && geographicalLocation === "Scotland") {
            var tableToUse = "RegionalBuildingScotland";
        } else {
            var tableToUse = geographicalLocation !== "" ? businessUnit : geographicalLocation;

        }
  
 // var tableToUse = geographicalLocation === "" ? productOrigin : geographicalLocation;
  
  $("input[type='text']").each(function(i){
    
    // Current product ID, e.g. "Apple", "Apricot", etc.
	  var currentProductId = $(this).attr('id');
    
    // Amount to multiply.
    var multiplier = $(`table#${tableToUse} tbody > tr[product='${currentProductId}'] > td[projectValue='${projectValue}']`).text();
    
    // A <span> element, to be populated with the calculated product volume.
	var result = $("<span name='result'>");

	// Calculate the figure and update the result element.
    result.text($(this).val() * multiplier); 

	// Remove any previously added <span> result elements.
	$(this).next("span").remove();

	// Insert result after the current input field.
    $(this).after(result);
    // var results += result;
    // $("#Total")= results;

        // to calculate Grand total
        function getDivSum(selector) {
          var sum = 0;
          $(selector).each(function() {
            $(this).find("span").each(function() {
              sum += parseInt($(this).html());
              $('#GrandTotal').val(parseInt($(this).html()));
            });
          });
          return sum;
         // $("#GrandTotal")=sum ;
        //   var textvalue = $("#<span name='result'>").text();
        //     $('#GrandTotal').val(textvalue);
        }
    console.log(getDivSum("#sumDiv"))
    $("#GrandTotal").next().html(getDivSum("#sumDiv"))
        $(document).ready(function() {
          console.log(getDivSum("#sumDiv"));
        //$("#GrandTotal.val();
        var someValue = $("sumDiv").text();
        console.log("Value is "+someValue);

        });


  }); 

}

myLoad();

$('.select').on('change', myCalculate);
$("input[type='text']").on('keyup', myCalculate);
