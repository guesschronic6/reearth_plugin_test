const html = `
<div
 style="display:flex;padding:1rem;align-content:center;justify-content:center"
>
  <h6>Hello World</h6>
</div>
`;

reearth.ui.show(html);
reearth.on("update", () => {
  reearth.ui.postMessage(reearth.block);
});
reearth.on("message", (msg) => {
  console.log("message received:", msg);
});
