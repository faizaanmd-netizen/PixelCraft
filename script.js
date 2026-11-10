const projects = [
  { name: "BhoomiSetu", category: "GIS · Digital governance", filters: ["gis"], visual: "visual-map", visualText: "MAP / LAND PARCEL / WORKFLOW", description: "A GIS-enabled SIH 2026 demonstration prototype for coordinating land acquisition workflows, parcel visualization, compensation, and rehabilitation tracking.", tags: ["GIS workflows", "Project tracking", "Compensation & R&R"], link: "https://bhoomisetu.online/", linkText: "Explore prototype" },
  { name: "Smart Attendance System", category: "AI · Computer vision", filters: ["ai"], visual: "visual-green", visualText: "FACE / VERIFY / ATTENDANCE", description: "An AI-integrated attendance system developed with a team for Smart India Hackathon 2025, using face recognition to reduce manual processes.", tags: ["Face recognition", "AI integration", "Team collaboration"], link: "#contact", linkText: "Project details" },
  { name: "URL-Based Phishing Detection", category: "AI · Cybersecurity", filters: ["ai"], visual: "visual-red", visualText: "URL / SCAN / CLASSIFY", description: "An intelligent detection module designed to analyze website URLs and identify potentially malicious or phishing websites.", tags: ["URL analysis", "Phishing detection", "Classification"], link: "#contact", linkText: "Project details" },
  { name: "Aplyra", category: "Web · Student opportunities", filters: ["web"], visual: "visual-code", visualText: "DISCOVER / MATCH / GROW", description: "A student opportunities platform for discovering scholarships, internships, and government schemes, with profile-based matching and deadline tracking.", tags: ["Co-Founder & CTO", "Opportunities", "Student platform"], link: "https://aplyra.app/", linkText: "Visit Aplyra" }
];

const projectGrid = document.querySelector("#project-grid");
const renderProjects = (filter = "all") => {
  const visible = projects.filter((project) => filter === "all" || project.filters.includes(filter));
  projectGrid.innerHTML = visible.map((project) => `
    <article class="project-card">
      <div class="project-visual ${project.visual}"><span class="visual-code">${project.visualText}</span></div>
      <span class="project-category">${project.category}</span>
      <h3>${project.name}</h3>
      <p>${project.description}</p>
      <div class="project-footer">
        <div class="project-tags">${project.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
        <a class="project-link" href="${project.link}" ${project.link.startsWith("http") ? 'target="_blank" rel="noreferrer"' : ""}>${project.linkText} ↗</a>
      </div>
    </article>
  `).join("");
};

renderProjects();
document.querySelectorAll(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".filter.active").classList.remove("active");
    button.classList.add("active");
    renderProjects(button.dataset.filter);
  });
});

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".primary-nav");
menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.querySelector("span").textContent = isOpen ? "−" : "+";
});
nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.querySelector("span").textContent = "+";
}));
document.querySelector("#year").textContent = new Date().getFullYear();
