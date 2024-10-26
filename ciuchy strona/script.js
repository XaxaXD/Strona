// Wyszukiwanie produktów i obsługa klawisza Enter
document.getElementById('search-input').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        performSearch();
    }
});

// Wyszukiwanie produktów
function performSearch() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const products = document.querySelectorAll('.product');
    let found = false;

    products.forEach(product => {
        const productName = product.querySelector('h2').innerText.toLowerCase();
        if (productName.includes(searchTerm) || searchTerm === 'wszystko') {
            product.style.display = 'block';
            found = true;
        } else {
            product.style.display = 'none';
        }
    });

    if (!found) {
        document.getElementById('no-products-message').style.display = 'block';
        document.getElementById('retry-button').style.display = 'inline-block';
        document.getElementById('toggle-button').style.display = 'none';
    } else {
        document.getElementById('no-products-message').style.display = 'none';
        document.getElementById('retry-button').style.display = 'none';
        document.getElementById('toggle-button').style.display = 'inline-block';
    }
}

function toggleList() {
    const productList = document.getElementById('product-list');
    if (productList.style.display === 'none') {
        productList.style.display = 'block';
    } else {
        productList.style.display = 'none';
    }
}

function retrySearch() {
    document.getElementById('search-input').value = '';
    document.getElementById('no-products-message').style.display = 'none';
    document.getElementById('retry-button').style.display = 'none';
    document.getElementById('toggle-button').style.display = 'none';
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        product.style.display = 'block';
    });
}

function updateDateTime() {
    const now = new Date();
    // Przesunięcie do strefy czasowej UTC+1 (lub UTC+2 w czasie letnim)
    const options = { timeZone: 'Europe/Warsaw', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const formatter = new Intl.DateTimeFormat('pl-PL', options);
    const formattedDate = formatter.format(now).replace(",", ""); // Usunięcie przecinka

    document.getElementById('date-time').innerText = formattedDate + " UTC+1";
}

setInterval(updateDateTime, 1000); // Aktualizacja co sekundę
updateDateTime(); // Wywołanie początkowe

