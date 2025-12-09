// PEOPLE CLICK → OPEN MEMO
document.querySelectorAll(".person").forEach(person => {
  person.addEventListener("click", () => {
    let target = person.dataset.target;
    document.getElementById(target).style.display = "flex";
  });
});

// BACK BUTTON
document.querySelectorAll(".backBtn").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.parentElement.style.display = "none";
  });
});

// CUSTOMIZATION PANEL
const bgPicker = document.getElementById("bgColorPicker");
const titleInput = document.getElementById("titleInput");
const floatSpeed = document.getElementById("floatSpeed");

bgPicker.addEventListener("input", () => {
  document.body.style.background = bgPicker.value;
});

titleInput.addEventListener("input", () => {
  document.title = titleInput.value || "Project 9: Harmonic Messages";
});

floatSpeed.addEventListener("change", () => {
  let speed = floatSpeed.value;
  document.querySelectorAll(".bgMove").forEach(img => {
    img.style.animationDuration = speed;
  });
});

// FIXED START BUTTON
document.getElementById("startBtn").addEventListener("click", () => {
  document.getElementById("startScreen").style.display = "none";
  document.getElementById("controlsPanel").style.display = "block"; 
});
