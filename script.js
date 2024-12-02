function toggleExpand(card) {
    // Check if the clicked card is already expanded
    const isExpanded = card.classList.contains('expanded');

    // Collapse all cards
    const cards = document.querySelectorAll('.card');
    cards.forEach((c) => {
        c.classList.remove('expanded');
        c.querySelector('.expanded-content').style.display = 'none';
    });

    // If the clicked card was not expanded, expand it
    if (!isExpanded) {
        card.classList.add('expanded');
        card.querySelector('.expanded-content').style.display = 'block';
    }
}

