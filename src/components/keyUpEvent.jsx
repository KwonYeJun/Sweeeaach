export function HandleSvgInjection(event, code,svgLoaded) {
  if (svgLoaded) {
    const svgElement = document.querySelector("svg");
    const rectElement = svgElement.querySelector(`#${event}`);
    rectElement.style.fill = "#d90429";
    console.log(event, rectElement);
  }
}
