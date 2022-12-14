// Show and hide navbar
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-5rem";
  }
  prevScrollpos = currentScrollPos;
};

// Show and hide side navbar
function showSideNavbar() {
  const sideNavbar = document.getElementById("sideNavbar");
  sideNavbar.classList.toggle("fixed");
  sideNavbar.classList.toggle("hidden");
}

// Change work navigation
let prevWorkId = "Ttl";
function changeWork(id) {
  const prevBtnWork = document.getElementById("btn" + prevWorkId);
  const btnWork = document.getElementById("btn" + id);
  const prevElWork = document.getElementById("work" + prevWorkId);
  const elWork = document.getElementById("work" + id);

  prevBtnWork.classList.toggle("text-green-neon");
  prevBtnWork.classList.toggle("link-underline-size");
  btnWork.classList.toggle("text-green-neon");
  btnWork.classList.toggle("link-underline-size");

  prevElWork.classList.toggle("flex");
  prevElWork.classList.toggle("hidden");
  elWork.classList.toggle("flex");
  elWork.classList.toggle("hidden");

  prevWorkId = id;
}

// Change work navigation
let prevOrgId = "Uro";
function changeOrg(id) {
  const prevBtnOrg = document.getElementById("btn" + prevOrgId);
  const btnOrg = document.getElementById("btn" + id);
  const prevElOrg = document.getElementById("org" + prevOrgId);
  const elOrg = document.getElementById("org" + id);

  prevBtnOrg.classList.toggle("text-green-neon");
  prevBtnOrg.classList.toggle("link-underline-size");
  btnOrg.classList.toggle("text-green-neon");
  btnOrg.classList.toggle("link-underline-size");

  prevElOrg.classList.toggle("flex");
  prevElOrg.classList.toggle("hidden");
  elOrg.classList.toggle("flex");
  elOrg.classList.toggle("hidden");

  prevOrgId = id;
}
