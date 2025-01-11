// profile.js

document.addEventListener('DOMContentLoaded', () => {
    const badgesSection = document.getElementById('badges');
    const badges = JSON.parse(localStorage.getItem('badges')) || [];

    // Display badges if available
    if (badges.length > 0) {
        badgesSection.innerHTML = '<h3>Your Badges</h3>';
        badges.forEach((badge) => {
            const badgeElement = document.createElement('div');
            badgeElement.classList.add('badge');
            badgeElement.textContent = badge;
            badgesSection.appendChild(badgeElement);
        });
    } else {
        badgesSection.innerHTML = '<p>You have no badges yet. Keep tracking to earn badges!</p>';
    }
});
