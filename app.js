var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var span1 = document.getElementById("span1");
var span2 = document.getElementById("span2");
const aioColors = document.querySelectorAll('.color span');

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
	span1.textContent = color1.value;
	span2.textContent = color2.value;
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

aioColors.forEach(color => {
  color.addEventListener('click', () => {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(color);
    selection.removeAllRanges();
    selection.addRange(range);

    try {
      document.execCommand('copy');
      selection.removeAllRanges();

      const original = color.textContent;
      color.textContent = 'Copied!';
      color.classList.add('success');

      setTimeout(() => {
        color.textContent = original;
        color.classList.remove('success');
      }, 1200);
    } catch(e) {
      const errorMsg = document.querySelector('.error-msg');
      errorMsg.classList.add('show');

      setTimeout(() => {
        errorMsg.classList.remove('show');
      }, 1200);
    }
  });
});


