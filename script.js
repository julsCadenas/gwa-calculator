// code to add new subjects and textboxes
$(document).ready(function() {
    var subjectCount = 1; 

    $(".subjBtn").click(function() {
        subjectCount++;

        var newSubjectDiv = $("<div class='subjects'><h4>Subject " + subjectCount + "</h4></div>");
        var newGradeBox = $("<div class='gradeBoxes'><input type='number' placeholder='Final Grade' class='grade'></div>");
        var newUnitBox = $("<div class='unitBoxes'><input type='number' placeholder='Units' class='unit'></div>");

        $(".inputContainer").append(newSubjectDiv);
        $(".inputContainer").append(newGradeBox);
        $(".inputContainer").append(newUnitBox);
    });
});

