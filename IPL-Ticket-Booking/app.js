
// ========================================
// REUSABLE TOAST NOTIFICATION FUNCTION
// ========================================

let toastTimer;

function showToast(message) {
    let toast = document.getElementById("toast");

    if (!toast) return;

    toast.innerText = message;
    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(function () {
        toast.classList.remove("show");
    }, 3000);
}


// ========================================
// SMOOTH SCROLLING FUNCTION
// ========================================

function scrollToBooking() {
    let bookingForm = document.getElementById("booking");

    if (bookingForm) {
        bookingForm.scrollIntoView({
            behavior: "smooth"
        });

        showToast("You are redirected to the booking form!");
    }
}


// ========================================
// WAIT UNTIL HTML LOADS
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    // ====================================
    // ACTIVITY 7: BOOKING BUTTON
    // ====================================

    let bookButton = document.getElementById("bookBtn");

    if (bookButton) {
        bookButton.addEventListener("click", scrollToBooking);
    }


    // ====================================
    // BOOKING FORM ELEMENTS
    // ====================================

    let form = document.getElementById("bookingForm");

    let matchSelect = document.getElementById("match");
    let standSelect = document.getElementById("stand");
    let ticketInput = document.getElementById("ticket");


    // ====================================
    // BOOKING SUMMARY ELEMENTS
    // ====================================

    let summaryMatch = document.getElementById("summaryMatch");
    let summaryStand = document.getElementById("summaryStand");
    let summaryQuantity = document.getElementById("summaryQuantity");
    let totalPrice = document.getElementById("totalPrice");


    // ====================================
    // STAND CATEGORY PRICES
    // ====================================

    let standPrices = {
        "General Stand": 1000,
        "Premium Stand": 2000,
        "VIP Stand": 3500
    };


    // ====================================
    // ACTIVITY 7: UPDATE BOOKING SUMMARY
    // ====================================

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
            if (summaryMatch) {
                summaryMatch.textContent =
                    selectedMatch || "Not Selected";
            }

            if (summaryStand) {
                summaryStand.textContent =
                    selectedStand || "Not Selected";
            }

            if (summaryQuantity) {
                summaryQuantity.textContent = "Invalid Quantity";
            }

            if (totalPrice) {
                totalPrice.textContent = "0";
            }

            return;
        }

        // Calculate total price
        let ticketPrice = standPrices[selectedStand] || 0;
        let total = ticketPrice * quantity;

        // Update booking summary
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


    // ====================================
    // MATCH SELECTION EVENT
    // ====================================

    if (matchSelect) {
        matchSelect.addEventListener("change", function () {

            updateBookingSummary();

            showToast("Match Selection Updated!");

        });
    }


    // ====================================
    // STAND CATEGORY SELECTION EVENT
    // ====================================

    if (standSelect) {
        standSelect.addEventListener("change", function () {

            updateBookingSummary();

            showToast("Stand Category Updated!");

        });
    }


    // ====================================
    // TICKET QUANTITY EVENT
    // ====================================

    if (ticketInput) {

        ticketInput.addEventListener("input", function () {
            updateBookingSummary();
        });

        ticketInput.addEventListener("change", function () {

            updateBookingSummary();

            showToast("Ticket Quantity Updated!");

        });
    }


    // ====================================
    // BOOKING FORM SUBMISSION
    // ====================================

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


        // =================================
        // RESET BOOKING FORM
        // =================================

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


    // ====================================
    // ACTIVITY 8: HAMBURGER NAVIGATION
    // ====================================

    let hamburger = document.getElementById("hamburger");
    let navLinks = document.getElementById("navLinks");

    if (hamburger && navLinks) {

        hamburger.addEventListener("click", function () {

            navLinks.classList.toggle("active");

            let isExpanded = navLinks.classList.contains("active");

            hamburger.setAttribute("aria-expanded", isExpanded);

            hamburger.textContent = isExpanded ? "✕" : "☰";

        });


        // Close menu after clicking a navigation link
        let navigationLinks = navLinks.querySelectorAll("a");

        navigationLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                navLinks.classList.remove("active");

                hamburger.textContent = "☰";

                hamburger.setAttribute("aria-expanded", "false");

            });

        });

    }


    // ====================================
    // ACTIVITY 8: TEAM-WISE MATCH FILTER
    // ====================================

    let teamFilter = document.getElementById("teamFilter");

    let matchContainer = document.getElementById("matchContainer");

    let noMatches = document.getElementById("noMatches");


    if (teamFilter && matchContainer) {

        teamFilter.addEventListener("change", function () {

            let selectedTeam = teamFilter.value;

            let matchCards = matchContainer.querySelectorAll(".match-card");

            let visibleCount = 0;

            matchCards.forEach(function (card) {

                let teams = (card.dataset.teams || "").split(" ");

                if (
                    selectedTeam === "all" ||
                    teams.includes(selectedTeam)
                ) {

                    card.style.display = "";

                    visibleCount++;

                } else {

                    card.style.display = "none";

                }

            });


            // Show or hide no matches message
            if (noMatches) {
                noMatches.style.display =
                    visibleCount === 0 ? "block" : "none";
            }

            showToast(
                selectedTeam === "all"
                    ? "Showing All Matches!"
                    : "Showing " + selectedTeam + " Matches!"
            );

        });

    }


    // ====================================
    // ACTIVITY 8: GRID VIEW AND LIST VIEW
    // ====================================

    let gridButton = document.getElementById("gridView");

    let listButton = document.getElementById("listView");


    if (matchContainer && gridButton && listButton) {

        // GRID VIEW BUTTON
        gridButton.addEventListener("click", function () {

            matchContainer.classList.remove("list-view");

            gridButton.classList.add("active-view");

            listButton.classList.remove("active-view");

            showToast("Grid View Activated!");

        });


        // LIST VIEW BUTTON
        listButton.addEventListener("click", function () {

            matchContainer.classList.add("list-view");

            listButton.classList.add("active-view");

            gridButton.classList.remove("active-view");

            showToast("List View Activated!");

        });

    }


    // ====================================
    // INITIALIZE BOOKING SUMMARY
    // ====================================

    updateBookingSummary();

});
