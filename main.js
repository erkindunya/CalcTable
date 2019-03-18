//     function myLoad() {
//         var ESP1calc = 10;
//         var ESP2calc = 10  ;
//         var ESP3calc = 10  ;
//         var ESP3calc = 10 ;
//         var ESP4calc = 10  ;
//         var ESP5calc = 10 ;
//         var ESP6calc = 10 ;
//         var ESP7calc = 10 ;
//         var ESP8calc = 10 ;
//         var ESP9calc = 10 ;
//         var ESP10calc = 10;
//     $("#ESPValue1").value = ESP1calc;
//     $("#ESPValue2").value = ESP2calc;
//     $("#ESPValue3").value = ESP3calc;
//     $("#ESPValue4").value = ESP4calc;
//     $("#ESPValue5").value = ESP5calc;
//     $("#ESPValue6").value = ESP6calc;
//     $("#ESPValue7").value = ESP7calc;
//     $("#ESPValue8").value = ESP8calc;
//     $("#ESPValue9").value = ESP9calc;
//     $("#ESPValue10").value = ESP10calc;
// }


function onSelectChangeMind() {
    var total = 0,
        businessUnit = $("#BusinessUnit").find('option:selected'),
        geoLocation = $("#GeoLocation").find('option:selected');
        projectValue = $("#projectValue").find('option:selected');

        if (value = ESPValue1.attr('rel')) {
            total += parseInt(value);
        }
    
        if (value = ESPValue2.attr('rel')) {
            total += parseInt(value);
        }
    
        $("#outputMind").html(total);
    }



$("#BusinessUnit").change(onSelectChangeMind);
$("#GeoLocation").change(onSelectChangeMind);
$("#projectValue").change(onSelectChangeMind);

function myCalculate() {
    $("input[type='text'].element").blur(function (e) {
        // Current product ID, e.g. "Apple", "Apricot", etc.
        var currentProductId = this.id;

        // Current product ID, e.g. "Apple", "Apricot", etc.
        // var currentSemtricaId = this.id;

        // projectValue of products.
        var projectValue = $("#projectValue").val();
        // var valueToCalc = $("#valueToCalc").val();

        // businessUnit
        var businessUnit = $("#BusinessUnit").val();
        //swal('Oops...', businessUnit, 'error');

        // Geographical location of the product.
        var geographicalLocation = $("#GeoLocation").val();

        // Ensure projectValue and businessUnit have been selected.
        if (projectValue === "" || businessUnit === "" || geographicalLocation === "") {
            // swal("Please select the product origin and projectValue.");
            swal('Oops...', 'Please select the business Unit, geographical Location  and projectValue.',
                'error');
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

        // var tableToUseSemtrica = "multiplierSemtricaValues";
        //alert("Please select the product origin and volume.", tableToUseSemtrica);
        // var multiplierSemtricaValues = $(
        //     `table#${tableToUseSemtrica} tbody > tr[Semtrica='${currentSemtricaId}'] > td[valueToCalc='${valueToCalc}']`
        // ).text();

        // Amount to multiply.

        var ESP1calc = 27165;
        var ESP2calc = 3241;
        var ESP3calc = 27165;
        var ESP4calc = 185.47;
        var ESP5calc = 32;
        var ESP6calc = 20.92;
        var ESP7calc = 32;
        var ESP8calc = 50;
        var ESP9calc = 100;
        var ESP10calc = 50;

        $("#ESPValue1").value = ESP1calc;
        $("#ESPValue2").value = ESP2calc;
        $("#ESPValue3").value = ESP3calc;
        $("#ESPValue4").value = ESP4calc;
        $("#ESPValue5").value = ESP5calc;
        $("#ESPValue6").value = ESP6calc;
        $("#ESPValue7").value = ESP7calc;
        $("#ESPValue8").value = ESP8calc;
        $("#ESPValue9").value = ESP9calc;
        $("#ESPValue10").value = ESP10calc;
        var multiplier = $(
            `table#${tableToUse} tbody > tr[product='${currentProductId}'] > td[projectValue='${projectValue}']`
        ).text();

        // A <span> element, to be populated with the calculated product projectValue.
        var result = $("<span name='result'>");

        // if (value = wrinkle.attr('rel')) {
        //     total += parseInt(value);
        // }
        // Calculate the figure and update the result element.  result.text($(this).val() * multiplier);
        result.text($(this).val()) * multiplier;
        // result.text(multiplierSemtricaValues * multiplier);

        //         $("#BusinessUnit").bind("change keyup", function(event){
        //    //Code here
        //     var ESP1calc = 777777 * multiplier;
        //     document.getElementById("ESPValue1").value = ESP1calc;

        //     });


        // Calculate the figure and update the result element.
        // var ESP1calc = 10 * multiplier;
        // var ESP2calc = 100 * multiplier;
        // var ESP3calc = 200 * multiplier;
        // var ESP3calc = 300 * multiplier;
        // var ESP4calc = 400 * multiplier;
        // var ESP5calc = 500 * multiplier;
        // var ESP6calc = 600 * multiplier;
        // var ESP7calc = 700 * multiplier;
        // var ESP8calc = 800 * multiplier;
        // var ESP9calc = 900 * multiplier;
        // var ESP10calc = 1000 * multiplier;
        // result.text(ESP1calc);
        // result.text(ESP2calc);
        // result.text(ESP3calc);
        // result.text(ESP4calc);
        // result.text(ESP5calc);
        // result.text(ESP6calc);
        // result.text(ESP7calc);
        // result.text(ESP8calc);
        // result.text(ESP9calc);
        // result.text(ESP10calc);
        //result.text($(this).val() * multiplier);

        // Remove any previously added <span> result elements.
        $(this).next("span").remove();

        // Insert result after the current input field.
        $(this).after(result);
    })


}

// myLoad();

$('.select').on('change', myCalculate);
$("input[type='text']").on('keyup', myCalculate);

function onSelectChange() {
    var total = 0,
        dermal = $("#t_dermal_name").find('option:selected'),
        wrinkle = $("#t_wrinkle_name").find('option:selected');

    if (value = dermal.attr('rel')) {
        total += parseInt(value);
    }

    if (value = wrinkle.attr('rel')) {
        total += parseInt(value);
    }

    $("#output").html(total);


}

$("#t_dermal_name").change(onSelectChange);
$("#t_wrinkle_name").change(onSelectChange);