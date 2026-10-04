const projects = [
    {
        title: "Project One",
        description: "A brief description of what this project does and why it matters.",
        tags: ["React", "TypeScript", "Tailwind"],
        links: [
            { text: "Live Demo", url: "#" },
            { text: "Source", url: "#" }
        ]
    },
    {
        title: "Project Two",
        description: "Another project showcasing different skills and technologies.",
        tags: ["Node.js", "Express", "PostgreSQL"],
        links: [
            { text: "Live Demo", url: "#" },
            { text: "Source", url: "#" }
        ]
    },
    {
        title: "Project Three",
        description: "A third project demonstrating full-stack capabilities.",
        tags: ["Vue", "Firebase", "CSS"],
        links: [
            { text: "Live Demo", url: "#" },
            { text: "Source", url: "#" }
        ]
    }
];

const grid = document.getElementById('projects-grid');

projects.forEach(project => {
    const card = document.createElement('article');
    card.className = 'project-card';
    card.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="tags">
            ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        <div class="links">
            ${project.links.map(link => `<a href="${link.url}" target="_blank" rel="noopener">${link.text}</a>`).join('')}
        </div>
    `;
    grid.appendChild(card);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});