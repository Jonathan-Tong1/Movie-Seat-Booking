const container = document.querySelector('.container');
// querySelector will only select one

const seats = document.querySelectorAll('.row .seat:not(.occupied)');
// querySelectorAll collects all classes with .seat that are not occupied

const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value;

// Update total and count 
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');

    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount;
    // setting the inner text of the id: count element 

    total.innerText = selectedSeatsCount * ticketPrice;
    // setting the inner text of the id: total 
}

// Movie select event
movieSelect.addEventListener('change', function(e) {
    ticketPrice = +e.target.value;
    updateSelectedCount();
});

// Seat click event
container.addEventListener('click', function(e) {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');

        updateSelectedCount();
    }
});