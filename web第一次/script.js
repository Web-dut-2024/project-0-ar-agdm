document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('search-input').value;
    const searchType = document.querySelector('.search-type .active').id;

    if (query) {
        performSearch(searchType, query);
    } else {
        alert('Please enter a search term.');
    }
});

document.querySelectorAll('.search-type button').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelector('.search-type .active').classList.remove('active');
        this.classList.add('active');
    });
});

function performSearch(searchType, query) {
    let url;

    switch (searchType) {
        case 'google-search':
            url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
            break;
        case 'google-image-search':
            url = `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(query)}`;
            break;
        case 'google-advanced-search':
            url = `https://www.google.com/advanced_search?q=${encodeURIComponent(query)}`;
            break;
        default:
            url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    }

    // Open the search results in a new tab
    window.open(url, '_blank');
}