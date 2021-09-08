const html = `
<div
 style="display:flex;padding:1rem;align-content:center;justify-content:center;"
>
  <h6 style="font-family:Arial;font-weight:bold;color:#FFFFFF;">Hello World</h6>
  <script>
      addEventListener("message", e=>{

        if(e.source!==parent) return;
        console.log(e.data);
      })
  </script>
</div>
`;

reearth.ui.show(html);
reearth.on("update", () => {
  reearth.ui.postMessage(reearth.block);
});
reearth.on("message", (msg) => {
  console.log("message received:", msg);
});
