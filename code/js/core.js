function filterRecords() {
    const filterCheckboxes = document.querySelectorAll('.filterCheckbox');
    const saleCards = document.querySelectorAll('.saleCard');
    const searchInput = document.querySelector('input[type="search"]');

    const filterCards = () => {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedGenres = Array.from(filterCheckboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.dataset.genre);

        saleCards.forEach(card => {
            const cardTitle = card.querySelector('h2').textContent.toLowerCase();
            const cardGenres = card.dataset.genre.split(' ');
            const shouldShowByGenre = selectedGenres.length === 0 || cardGenres.some(genre => selectedGenres.includes(genre));
            const shouldShowBySearch = searchTerm === '' || cardTitle.includes(searchTerm);
            const shouldShow = shouldShowByGenre && shouldShowBySearch;
            card.style.display = shouldShow ? 'block' : 'none';
            card.classList.toggle('hidden', !shouldShow);
        });
    };

    filterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', filterCards);
    });

    searchInput.addEventListener('input', filterCards);
}

// Call the filterRecords function when the page loads
window.addEventListener('DOMContentLoaded', filterRecords);
