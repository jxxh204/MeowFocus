import { useEffect } from "react";

function useScreenDrag() {
  // renderer Process
  useEffect(() => {}, []);

  const mouseMoveHandler = (e: React.MouseEvent<SVGSVGElement>) => {
    const move = {
      mouseX: e.screenX,
      mouseY: e.screenY,
    };
    window.electron.sendMessage("MOUSE_MOVE", move);
  };

  const mouseUpHandler = () => {
    window.electron.sendMessage("MOUSE_UP", null);
  };

  const mouseDownHandler = (e: React.MouseEvent<SVGSVGElement>) => {
    const move = {
      mouseX: e.screenX,
      mouseY: e.screenY,
    };
    window.electron.sendMessage("MOUSE_DOWN", move);
  };
  return {
    mouseMoveHandler,
    mouseUpHandler,
    mouseDownHandler,
  };
}

export default useScreenDrag;
