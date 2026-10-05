const projects = [
  {
    title: "CTFT",
    description: "CTFT — Comparison Tool for Teachers. AI-powered Excel comparison tool for KV teachers. Compare student records against portal data, generate CBSE/KVS reports, and query data in plain English or Hindi.",
    tags: ["AI", "Python", "Excel", "Education"],
    image: "https://picsum.photos/seed/ctft/600/350.jpg",
    demoUrl: "#",
    sourceUrl: "https://github.com/Nitikpsn/CTFT"
  },
  {
    title: "Gxpdns",
    description: "A fast DNS auditing and network reconnaissance tool built for inspecting records and network security diagnostics.",
    tags: ["Networking", "DNS", "Security"],
    image: "https://picsum.photos/seed/gxpdns/600/350.jpg",
    demoUrl: "#",
    sourceUrl: "https://github.com/Nitikpsn/Gxpdns"
  }
];

const grid = document.getElementById('projects-grid');

projects.forEach(project => {
    const card = document.createElement('article');
    card.className = 'project-card';
    card.innerHTML = `
        <img src="${project.image}" alt="${project.title}" loading="lazy">
        <div class="card-content">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="tags">
                ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <div class="project-links">
                <a href="${project.sourceUrl}" target="_blank" rel="noopener">Source</a>
                ${project.demoUrl !== '#' ? `<a href="${project.demoUrl}" target="_blank" rel="noopener">Demo</a>` : ''}
            </div>
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