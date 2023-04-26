const navLink = document.querySelectorAll(".nav-link");
const linkContent = ["About", "Skill", "Project", "Contact"];

const checkContentLink = () => {
  if (window.innerWidth > 1000) {
    navLink.forEach((link, index) => {
      link.innerHTML = linkContent[index];
      link.style.fontWeight = "700";
    });
    return;
  }
  return;
};

checkContentLink();
