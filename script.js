document.addEventListener('DOMContentLoaded', function() {
    // Get the "Add Subject" button
    var addButton = document.querySelector('.subjBtn');
    // Get the container where new subject inputs will be added
    var subjectContainer = document.getElementById('inputContainer');

    // Counter for keeping track of the number of subjects
    var subjectCount = 1;

    // Event listener for the "Add Subject" button
    addButton.addEventListener('click', function() {
        // Increment the subject count
        subjectCount++;

        // Create new elements for the new subject input
        var newSubject = document.createElement('div');
        newSubject.classList.add('subject');

        var subjectsDiv = document.createElement('div');
        subjectsDiv.classList.add('subjects');
        var subjectHeading = document.createElement('h3');
        subjectHeading.textContent = 'Subject ' + subjectCount;
        subjectsDiv.appendChild(subjectHeading);

        var gradeBoxesDiv = document.createElement('div');
        gradeBoxesDiv.classList.add('gradeBoxes');
        var gradeInput = document.createElement('input');
        gradeInput.type = 'number';
        gradeInput.placeholder = 'Number of Units';
        gradeInput.classList.add('grade');
        gradeBoxesDiv.appendChild(gradeInput);

        var unitBoxesDiv = document.createElement('div');
        unitBoxesDiv.classList.add('unitBoxes');
        var unitInput = document.createElement('input');
        unitInput.type = 'number';
        unitInput.placeholder = 'Final Grade';
        unitInput.classList.add('unit');
        unitBoxesDiv.appendChild(unitInput);

        // Append new elements to the new subject container
        newSubject.appendChild(subjectsDiv);
        newSubject.appendChild(gradeBoxesDiv);
        newSubject.appendChild(unitBoxesDiv);

        // Append the new subject container to the subject container
        subjectContainer.appendChild(newSubject);
    });
});
