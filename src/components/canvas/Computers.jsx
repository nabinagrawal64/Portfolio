import { Suspense, useEffect, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"

import CanvasLoader  from "../Loader"

const Computers = ({isMobile}) => {
    const computer = useGLTF("./desktop_pc/scene.gltf")

    return (
        <mesh>
            <hemisphereLight intensity={3.15} groundColor="black" />
            <spotLight
                position={[-20, 50, 10]}
                angle={0.12}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={1024}
            />
            <pointLight intensity={3} />
            <primitive 
                object={computer.scene} 
                scale={isMobile ? 0.70 :0.75} 
                position={isMobile ? [0,-2.7,-2.2] : [0,-3,-1.3]}
                rotation={[-0.01,-0.2,-0.15]}
            />
        </mesh>
    )
}

const ComputersCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);
    
    useEffect(() => {
        // Add a listener for changes to the screen size
        const mediaQuery = window.matchMedia('(max-width: 450px)');

        // Set the initial value of the `isMobile` state variable
        setIsMobile(mediaQuery.matches);

        // Define a callback function to handle changes to the media query
        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        }

        // Add the callback function as a listener for changes to the media query
        mediaQuery.addEventListener('change', handleMediaQueryChange);

        // Remove the listener when the component is unmounted
        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange);
        }
    }, [])
    
    return (
        <div style={{ width: "100vw", height: "100vh" }}>   
            <Canvas
                frameLoop = "demand"
                shadows
                dpr={isMobile ? 1 : [1, 2]}
                camera={{ position: [20, 3, 5], fov: 25 }}
                gl={{preserveDrawingBuffer: true}}
            >
                <Suspense fallback={<CanvasLoader/>}>
                    <OrbitControls 
                        enableZoom={false} 
                        maxPolarAngle={Math.PI / 2}
                        minPolarAngle={Math.PI / 3}    
                    />   
                    <Computers isMobile={isMobile} />
                </Suspense>

                <Preload all />
            </Canvas>
        </div>
    );
};

export default ComputersCanvas;