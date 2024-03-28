function useScreenDrag() {
  // renderer Process
  const { ElectronMouse } = window;

  const mouseMoveHandelr = (e: React.MouseEvent<SVGSVGElement>) => {
    console.log("🚀 ~ mouseMoveHandelr ~ mouseMoveHandelr: 움직임");
    // ipcRenderer.send("SCREEN_DRAG_MOVE", {
    //   mouseX: e.screenX,
    //   mouseY: e.screenY,
    // });
    ElectronMouse.getData("움직여");
  };

  const mouseUpHandler = () => {
    console.log("🚀 ~ mouseUpHandler ~ mouseUpHandler: 땜");
    // document.removeEventListener('mousemove', onMouseMove);
    // document.removeEventListener('mouseup', onMouseUp);
  };

  const mouseDownHandler = (e: React.MouseEvent<SVGSVGElement>) => {
    console.log("🚀 ~ mouseDownHandler ~ mouseDownHandler: 누름");
    // ipcRenderer.send("SCREEN_DRAG_DOWN", {
    //   startMouseX: e.screenX,
    //   startMouseY: e.screenY,
    // });
    //   document.addEventListener('mousemove', onMouseMove);
    //   document.addEventListener('mouseup', onMouseUp);
  };
  return { mouseMoveHandelr, mouseUpHandler, mouseDownHandler };
}

export default useScreenDrag;
