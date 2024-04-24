// code to add new subjects and textboxes
$(document).ready(function() {
    var subjectCount = 1; 

    $(".subjBtn").click(function() {
        subjectCount++;

        var newSubjectDiv = $("<div class='inputRow'><div class='subjects'><h4>Subject " + subjectCount + "</h4></div></div>");
        var newGradeBox = $("<div class='gradeBoxes'><input type='number' placeholder='Grade' class='grade'></div>");
        var newUnitBox = $("<div class='unitBoxes'><input type='number' placeholder='Units' class='unit'></div>");

        $(".inputContainer").append(newSubjectDiv);
        newSubjectDiv.append(newGradeBox);
        newSubjectDiv.append(newUnitBox);
        
        newSubjectDiv.addClass('fadeIn');
    });

/*
    formula ng gwa with units
    (Grade x Units) / (Total Units)
    Example:
        4   :   3 units
        3.5 :   1 units

    (4*3 + 3.5*1)/4
*/

    $(".computeBtn").click(function() {
        var totalGradeUnits = 0;
        var totalUnits = 0;

        $(".inputRow").each(function() {
            var grade = parseFloat($(this).find(".grade").val());
            var units = parseFloat($(this).find(".unit").val());

            if (!isNaN(grade) && !isNaN(units)) {
                totalGradeUnits += grade * units;
                totalUnits += units;
            }
        });

        if (totalUnits !== 0) {
            var gwa = totalGradeUnits / totalUnits;
            // alert("Your GWA is: " + gwa.toFixed(4));
            $(".gwaResult").html("<h2 class='result'>Your GWA is: " + gwa.toFixed(4) + "</h2>");
            $(".gwaResult").addClass('fadeIn')
        } else {
            alert("Please enter your grades and units.");
        }
    });

});