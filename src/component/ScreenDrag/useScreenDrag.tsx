import { useEffect, useRef } from "react";
import { Electron } from "type/interface";

function useScreenDrag() {
  // renderer Process
  const El = useRef<Electron>();
  useEffect(() => {
    El.current = window.electron;
  }, []);

  const mouseMoveHandler = (e: React.MouseEvent<SVGSVGElement>) => {
    console.log("🚀 ~ mouseMoveHandelr ~ mouseMoveHandelr: 움직임");
    // ipcRenderer.send("SCREEN_DRAG_MOVE", {
    //   mouseX: e.screenX,
    //   mouseY: e.screenY,
    // });
    try {
      //   ElectronMouse.getData("움직여");
      //   const res = El.current?.sendMessage("move",0)
      const move = {
        mouseX: e.screenX,
        mouseY: e.screenY,
      };
      window.electron.sendMessage("MOUSE_MOVE", "전달");
    } catch (err) {
      console.error(err);
    }
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
  return {
    mouseMoveHandelr: mouseMoveHandler,
    mouseUpHandler,
    mouseDownHandler,
  };
}

export default useScreenDrag;
