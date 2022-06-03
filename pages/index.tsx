import {NextPage} from "next";
import Viewer3d from "../components/viewer-3d";
import RotatingTorusKnot from "../components/rotating-torus-knot";
import CameraController from "../components/camera-controller";

const Home: NextPage = () => {
  return (
      <div className="home">
        <div className="home__content">
          <div className="home__message">Welcome to Boring Engineer<br/></div>
          <div className="home__description">A collection of blogs and everything else</div>
        </div>
        <Viewer3d background={true}>
          <CameraController/>
          <ambientLight/>
          <directionalLight/>
          <RotatingTorusKnot></RotatingTorusKnot>
        </Viewer3d>
      </div>
  )
}

export default Home
