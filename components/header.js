document.addEventListener("DOMContentLoaded", () => {
  // Inject header
  const header = document.createElement("header");
  header.innerHTML = `
    <div class="navbar">
      <div class="logo">Pleasant Darkness</div>
      <div class="menu-toggle" id="menu-toggle">&#9776;</div>
      <nav class="nav-links" id="nav-links">
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="#">Poetry</a>
        <a href="#">Journal</a>
        <a href="#">Contact</a>
      </nav>
    </div>
  `;
  document.body.insertBefore(header, document.body.firstChild);

  // Toggle menu for mobile
  document.getElementById("menu-toggle").addEventListener("click", () => {
    document.getElementById("nav-links").classList.toggle("active");
  });
});
