// code to add new subjects and textboxes
$(document).ready(function() {
    var subjectCount = 1; 

    $(".subjBtn").click(function() {
        subjectCount++;

        var newSubjectDiv = $("<div class='inputRow'><div class='subjects'><h4>Subject " + subjectCount + "</h4></div></div>");
        var newGradeBox = $("<div class='gradeBoxes'><input type='number' placeholder='Final Grade' class='grade'></div>");
        var newUnitBox = $("<div class='unitBoxes'><input type='number' placeholder='Units' class='unit'></div>");

        $(".inputContainer").append(newSubjectDiv);
        newSubjectDiv.append(newGradeBox);
        newSubjectDiv.append(newUnitBox);
    });
});

/*

    formula ng gwa with units

    (Summation ng Grade x Units) / (Total Units)

    Kunyari
        4   -   3 units
        3.5 -   1 unit

    (4*3 + 3.5*1)/4

*/

