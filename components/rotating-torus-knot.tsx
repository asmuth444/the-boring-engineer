import {useEffect, useRef, useState} from "react";
import {useFrame, Vector3} from "@react-three/fiber";
import {BufferGeometry, Material, Mesh} from "three";

interface RotatingBoxProps {
  size: number,
  rotation: Vector3,
  position: Vector3,
  color: string,
}

const RotatingTorusKnot = () => {
  const root = document.querySelector(":root");
  const styles = getComputedStyle(root as Element);
  const meshRef = useRef<Mesh<BufferGeometry, Material | Material[]> | null>(null);
  const [boxColor, setBoxColor] = useState<string>();
  useEffect(() => {
    setBoxColor(styles.getPropertyValue("--accent").trim());
  }, [boxColor, styles]);
  useFrame(() => {
    // @ts-ignore
    meshRef.current.rotation.y += 0.005;
    // @ts-ignore
    meshRef.current.rotation.x += 0.005;
  });
  return (
      <mesh ref={meshRef}>
        <torusKnotGeometry/>
        <meshBasicMaterial color={styles.getPropertyValue("--accent").trim()} wireframe={true}/>
      </mesh>
  )
}

export default RotatingTorusKnot;
