// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function() {

    var saveButton = $('.saveBtn');

    $(function () {
        // TODO: Add a listener for click events on the save button. This code should
        // use the id in the containing time-block as a key to save the user input in
        // local storage. HINT: What does `this` reference in the click listener
        // function? How can DOM traversal be used to get the "hour-x" id of the
        // time-block containing the button that was clicked? How might the id be
        // useful when saving the description in local storage?
        //
        saveButton.on("click", function() {
            // console.log(this);
            var userInput = $(this).prev('.description').val();
            // console.log(userInput);
            var time = $(this).parent().attr("id");
            // console.log(time);


            localStorage.setItem(time, userInput);

        });


        

        // TODO: Add code to apply the past, present, or future class to each time
        // block by comparing the id to the current hour. HINTS: How can the id
        // attribute of each time-block be used to conditionally add or remove the
        // past, present, and future classes? How can Day.js be used to get the
        // current hour in 24-hour time?
        //
        var currentHour = dayjs().format('HH');
        console.log(currentHour);
        //changed div "id" to number strings to match to Day.js time
        $('.time-block').each(function() {
            var  timeEl = $(this).attr("id");
            console.log(timeEl);

            if(timeEl == currentHour) {
                $(this).addClass("present");
            } else if (timeEl < currentHour) {
                $(this).addClass("past");
            } else {
                $(this).addClass("future");
            }

        });


        // TODO: Add code to get any user input that was saved in localStorage and set
        // the values of the corresponding textarea elements. HINT: How can the id
        // attribute of each time-block be used to do this?

            //on load should check for hour to hour changes too
        valueArray = [];
        Object.keys(localStorage).forEach((key) => {
            const value = localStorage.getItem(key);
            console.log(value);
            valueArray.push({key, value});
            console.log(valueArray);

        });

        for (let i = 0; i < valueArray.length; i++) {
            let key = valueArray[i].key;
            let value = valueArray[i].value;
            $('#' + key + ' > textarea').text(value);
        };


        //
        // TODO: Add code to display the current date in the header of the page.
        today = dayjs().format('dddd, MMMM D');
        // console.log(today);
        $('#currentDay').text(today);

    });

});



