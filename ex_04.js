let items = document.querySelectorAll('.item');
items.forEach(function(item) {
    let quantityInput = item.querySelector('input[type="text"]');

    let plusButton = item.querySelector('.plus-btn');
    plusButton.addEventListener('click', function() {
        quantityInput.value++;
    });

    let minusButton = item.querySelector('.minus-btn');
    minusButton.addEventListener('click', function() {
        if (quantityInput.value > 1) {
            quantityInput.value--;
   }
    });

    let deleteButton = item.querySelector('.delete-btn');
    deleteButton.addEventListener('click', function() {
        item.remove();
    });

    let likeButton = item.querySelector('.like-btn');
    likeButton.addEventListener('click', function() {
        likeButton.classList.toggle('is-active');
    });
});
