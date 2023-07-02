export function KeyDownEvent(event, code,svgLoaded) {
  if (svgLoaded) {
    const svgElement = document.querySelector("svg");
    const rectElement = svgElement.querySelector(`#${event}`);
    rectElement.style.fill = null;
    console.log(code+'code', rectElement);
  }
}
