// Smooth Scroll for Navbar Links
document.querySelectorAll("nav a").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");

    if (targetId === "#") return;

    const target = document.querySelector(targetId);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});


// CTA Button Action
const ctaButton = document.querySelector(".cta button");

if (ctaButton) {
  ctaButton.addEventListener("click", () => {
    alert("🚀 Thank you! We will contact you soon.");
  });
}


// Navbar Active Link Highlight on Scroll
const sections = document.querySelectorAll("section, .card");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});


// Simple Lead Capture (Console-based)
function captureLead(name, email) {
  if (!name || !email) {
    console.log("❌ Missing details");
    return;
  }

  const lead = {
    name: name,
    email: email,
    date: new Date().toISOString()
  };

  console.log("✅ New Lead Captured:", lead);

  // You can later connect this to backend / Google Sheets
}


// Example Usage
// captureLead("John Doe", "john@email.com");


// Scroll to Top Button
const scrollBtn = document.createElement("button");
scrollBtn.innerText = "↑";
scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "20px";
scrollBtn.style.right = "20px";
scrollBtn.style.padding = "10px 15px";
scrollBtn.style.fontSize = "18px";
scrollBtn.style.border = "none";
scrollBtn.style.borderRadius = "5px";
scrollBtn.style.background = "#3498db";
scrollBtn.style.color = "#fff";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.display = "none";

document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
