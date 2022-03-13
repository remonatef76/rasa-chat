export const StyleSheetBuilder = ({ variable, value }) => {
  const STYLES = document
    .querySelector("#rasaChatAppDynamicCSS")
    .textContent.replace(
      RegExp("\\-\\-" + variable + "\\:" + ".+\\;", "g"),
      `--${variable}: ${value};`
    );
  console.log(STYLES);
  document.querySelector("#rasaChatAppDynamicCSS").textContent = STYLES;
};
