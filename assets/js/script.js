//function to force document to wait for render
$(document).ready(function() {

    var saveButton = $('.saveBtn');

    $(function () {
        saveButton.on("click", function() {
            // console.log(this);
            var userInput = $(this).prev('.description').val();
            // console.log(userInput);
            var time = $(this).parent().attr("id");
            // console.log(time);
            //set user inputs to local storage so they will be saved upon refresh
            localStorage.setItem(time, userInput);
        });

        //get current time for site functions
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

        //Extra (outside criteria): Try change() or another method to have page refresh when day.js updates
        //to the next hour so the time block color changes in real time

        //Push local storage to blank array to get key values
        valueArray = [];
        Object.keys(localStorage).forEach((key) => {
            const value = localStorage.getItem(key);
            console.log(value);
            valueArray.push({key, value});
            console.log(valueArray);
        });

        //cycle through keys, pull values and insert them to the 'textarea' by matching the related element #id
        for (let i = 0; i < valueArray.length; i++) {
            let key = valueArray[i].key;
            let value = valueArray[i].value;
            $('#' + key + ' > textarea').text(value);
        };


        //Display current day and date to user
        today = dayjs().format('dddd, MMMM D');
        // console.log(today);
        $('#currentDay').text(today);

    });

});



