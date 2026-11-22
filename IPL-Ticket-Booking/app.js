
// Reusable Toast Notification Function
function showToast(message) {
    let toast = document.getElementById("toast");

    toast.innerText = message;
    toast.classList.add("show");

    setTimeout(function () {
        toast.classList.remove("show");
    }, 3000);
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


// Wait Until HTML Loads
document.addEventListener("DOMContentLoaded", function () {

    // Booking Button Click Event
    let bookButton = document.getElementById("bookBtn");

    if (bookButton) {
        bookButton.addEventListener("click", scrollToBooking);
    }


    // Booking Form Elements
    let form = document.getElementById("bookingForm");

    let matchSelect = document.getElementById("match");
    let standSelect = document.getElementById("stand");
    let ticketInput = document.getElementById("ticket");


    // Booking Summary Elements
    let summaryMatch = document.getElementById("summaryMatch");
    let summaryStand = document.getElementById("summaryStand");
    let summaryQuantity = document.getElementById("summaryQuantity");
    let totalPrice = document.getElementById("totalPrice");


    // Stand Category Prices
    let standPrices = {
        "General Stand": 1000,
        "Premium Stand": 2000,
        "VIP Stand": 3500
    };


    // Activity 7: Update Booking Summary
    function updateBookingSummary() {

        if (!matchSelect || !standSelect || !ticketInput) {
            return;
        }

        let selectedMatch = matchSelect.value;
        let selectedStand = standSelect.value;

        let quantity = Number(ticketInput.value);

        // Validate ticket quantity
        if (
            !Number.isInteger(quantity) ||
            quantity < 1 ||
            quantity > 10
        ) {
            if (ticketInput.value !== "") {
                totalPrice.textContent = "0";
                summaryMatch.textContent = selectedMatch || "Not Selected";
                summaryStand.textContent = selectedStand || "Not Selected";
                summaryQuantity.textContent = "Invalid Quantity";
            }
            return;
        }

        // Calculate Total Price
        let ticketPrice = standPrices[selectedStand] || 0;

        let total = ticketPrice * quantity;


        // Update Booking Summary Card
        if (summaryMatch) {
            summaryMatch.textContent =
                selectedMatch || "Not Selected";
        }

        if (summaryStand) {
            summaryStand.textContent =
                selectedStand || "Not Selected";
        }

        if (summaryQuantity) {
            summaryQuantity.textContent = quantity;
        }

        if (totalPrice) {
            totalPrice.textContent =
                total.toLocaleString("en-IN");
        }

    }


    // Match Selection Event
    if (matchSelect) {
        matchSelect.addEventListener("change", function () {

            updateBookingSummary();

            showToast("Match Selection Updated!");
        });
    }


    // Stand Category Selection Event
    if (standSelect) {
        standSelect.addEventListener("change", function () {

            updateBookingSummary();

            showToast("Stand Category Updated!");
        });
    }


    // Ticket Quantity Event
    if (ticketInput) {

        ticketInput.addEventListener("input", function () {
            updateBookingSummary();
        });

        ticketInput.addEventListener("change", function () {

            updateBookingSummary();

            showToast("Ticket Quantity Updated!");
        });
    }


    // Booking Form Submission
    if (form) {

        form.addEventListener("submit", function (event) {

            event.preventDefault();

            updateBookingSummary();

            if (!form.checkValidity()) {
                form.reportValidity();
                return;
            }

            showToast(
                "Your ticket booking details are submitted successfully!"
            );

        });


        // Reset Booking Form
        form.addEventListener("reset", function () {

            setTimeout(function () {

                if (summaryMatch) {
                    summaryMatch.textContent = "Not Selected";
                }

                if (summaryStand) {
                    summaryStand.textContent = "Not Selected";
                }

                if (summaryQuantity) {
                    summaryQuantity.textContent = "1";
                }

                if (totalPrice) {
                    totalPrice.textContent = "0";
                }

                showToast("Booking Form Reset Successfully!");

            }, 0);

        });

    }

});

