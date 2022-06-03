import { Canvas } from "@react-three/fiber";
import {ReactNode} from "react";

const Viewer3d = (props: { children: ReactNode, background: boolean }) => {
  return (
      <Canvas className={props.background ? "viewer-3d-background" : ""}>
        {props.children}
      </Canvas>
  )
};


export default Viewer3d;
