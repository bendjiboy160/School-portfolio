import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import   CanvasLoader    from '../Loader'

const Computers = ({isMobile}) => {
const computer = useGLTF("./tiny_isometric_room/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' /> 
      <spotLight
        position={[0, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={15000}
        distance={0}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={2} />

      <primitive
        object={computer.scene}
        scale={isMobile ? 0.0045 : 0.0055}
        position={isMobile ? [-1, -3, -0.25] : [-1, -3.75, -0.5]}
        rotation={[0.01, 0.5, -0.01]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // add a listener for changes to the screen size
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    // set the initial value of the ` is movlie ` state variable 
    setIsMobile(mediaQuery.matches);

    //define a callback function to handle changes to the media query 
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    //add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    
    //remove the listener when the component is unmounted
      return () => {
        mediaQuery.removeEventListener('change', handleMediaQueryChange);
      }
  }, []);


  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
        enableZoom={false} 
        maxPolarAngle={Math.PI / 2} 
        minPolarAngle={Math.PI / 2}/>
        <Computers  isMobile={isMobile}/>
      </Suspense>
      
      <Preload all/>
    </Canvas>
  )
}

export default ComputersCanvas;