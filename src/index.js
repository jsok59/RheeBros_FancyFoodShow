import "./index.css";
import "./reset.css";

function scaleAllSectionsToFit() {
	const sections = document.querySelectorAll(".section-wrapper");

	if (sections.length === 0) return;

	const viewportHeight = window.innerHeight;

	// First reset scale to 1 to get their true heights
	sections.forEach((section) => {
		section.style.transform = "scale(1)";
		section.style.transformOrigin = "top center";
	});

	// Find the maximum section height
	let maxHeight = 0;

	sections.forEach((section) => {
		maxHeight = Math.max(maxHeight, section.scrollHeight);
	});

	// Calculate scale to make maximum section fit in view
	let scale = 1;

	while (maxHeight * scale > viewportHeight && scale > 0) {
		scale -= 0.03;
	}

	// Apply the scale to all
	sections.forEach((section) => {
		section.style.transform = `scale(${scale})`;
	});
}

// Run on load
window.addEventListener("load", scaleAllSectionsToFit);

// Run on resize
window.addEventListener("resize", scaleAllSectionsToFit);
