const profileForm = document.getElementById("profile-form");
const photo = document.getElementById("preview-photo");
const nameBox = document.getElementById("preview-name");

const noteInput = document.getElementById("note-input");
const notePreview = document.getElementById("note-preview");

// update memo live
function updateMemo() {
  notePreview.innerHTML = noteInput.value.replace(/\n/g, "<br>");
}
noteInput.addEventListener("input", updateMemo);

// initial
updateMemo();

// switching profiles
profileForm.querySelectorAll("input[name='profile']").forEach(r => {
  r.addEventListener("change", () => {
    const val = r.value;

    if (val === "david") {
      photo.src = "David.jpg";
      nameBox.textContent = "David";
    }
    else if (val === "tam") {
      photo.src = "Tam.jpg";
      nameBox.textContent = "Tam";
    }
    else if (val === "alice") {
      photo.src = "Alice.jpg";
      nameBox.textContent = "Alice";
    }
  });
});
