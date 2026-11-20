
// Reusable Toast Notification Function

function showToast(message) {

    let toast = document.getElementById("toast");

    if (toast) {

        toast.innerText = message;

        toast.classList.add("show");

        // Hide notification after 3 seconds
        setTimeout(function () {

            toast.classList.remove("show");

        }, 3000);

    }
}


// Smooth Scrolling Function

function scrollToBooking() {

    let bookingForm = document.getElementById("booking");

    if (bookingForm) {

        bookingForm.scrollIntoView({

            behavior: "smooth"

        });

        showToast("You are redirected to the booking form!");

    }

}


// Booking Button Click Event

document.addEventListener("DOMContentLoaded", function () {

    let bookButton = document.getElementById("bookBtn");

    if (bookButton) {

        bookButton.addEventListener("click", function () {

            scrollToBooking();

        });

    }


    // Booking Form Submission

    let form = document.getElementById("bookingForm");

    if (form) {

        form.addEventListener("submit", function (event) {

            event.preventDefault();

            showToast(
                "Your ticket booking details are submitted successfully!"
            );

        });

    }

});
