let currentIndex = 0;
const totalProjects = document.querySelectorAll('.project-card').length;

function showProject(index) {
    const projectCards = document.querySelectorAll('.project-card');
    currentIndex = (index + totalProjects) % totalProjects;

    projectCards.forEach((card, i) => {
        card.style.display = i === currentIndex ? 'block' : 'none';
    });
}

function nextProject() {
    showProject(currentIndex + 1);
}

function prevProject() {
    showProject(currentIndex - 1);
}

// Show the initial project
showProject(currentIndex);