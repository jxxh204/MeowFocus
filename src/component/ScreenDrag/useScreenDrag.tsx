import { useEffect, useRef } from "react";

function useScreenDrag() {
  const on = useRef(false);
  // renderer Process

  const mouseMoveHandler = (e: React.MouseEvent<SVGSVGElement>) => {
    const move = {
      mouseX: e.screenX,
      mouseY: e.screenY,
    };
    if (on.current) {
      window.electron.sendMessage("MOUSE_MOVE", move);
      console.log("move");
    }
  };

  const mouseUpHandler = () => {
    // window.electron.sendMessage("MOUSE_UP", null);
    on.current = false;
    console.log("up");
  };

  const mouseDownHandler = (e: React.MouseEvent<SVGSVGElement>) => {
    const move = {
      mouseX: e.screenX,
      mouseY: e.screenY,
    };
    window.electron.sendMessage("MOUSE_DOWN", move);
    on.current = true;
    console.log("down");
  };
  return {
    mouseMoveHandler,
    mouseUpHandler,
    mouseDownHandler,
  };
}

export default useScreenDrag;
