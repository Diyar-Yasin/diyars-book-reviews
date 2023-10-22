import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'

const HomeText = () => {

    return (
        <Canvas>
            <Perf position='top-left' />

            <OrbitControls makeDefault />

            <mesh scale={1.5}>
                <boxGeometry />
                <meshNormalMaterial />
            </mesh>

        </Canvas>
            
    );
};

export default HomeText;