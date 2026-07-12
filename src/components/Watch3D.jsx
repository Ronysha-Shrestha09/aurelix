import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import { Suspense } from "react";

function WatchModel() {
  // 12 hour markers around the face
  const markers = Array.from({ length: 12 }, (_, i) => {
    const angle = (i / 12) * Math.PI * 2;
    return {
      x: Math.sin(angle) * 0.88,
      z: Math.cos(angle) * 0.88,
    };
  });

  return (
    // tips into an edge-on view on its own
    <Float speed={1.5} rotationIntensity={0.08} floatIntensity={0.4}>
      <group>
        {/* Case — default cylinder orientation, flat face already pointing up */}
        <mesh>
          <cylinderGeometry args={[1.3, 1.3, 0.3, 64]} />
          <meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.2} />
        </mesh>

        {/* Strap lugs, top and bottom, so it reads as a wristwatch from above */}
        <mesh position={[0, -0.02, 1.55]}>
          <boxGeometry args={[0.55, 0.14, 0.9]} />
          <meshStandardMaterial color="#1a1512" metalness={0.1} roughness={0.85} />
        </mesh>
        <mesh position={[0, -0.02, -1.55]}>
          <boxGeometry args={[0.55, 0.14, 0.9]} />
          <meshStandardMaterial color="#1a1512" metalness={0.1} roughness={0.85} />
        </mesh>

        {/* Watch face — sits on top of the case, facing the camera above */}
        <mesh position={[0, 0.2, 0]}>
          <cylinderGeometry args={[1.1, 1.1, 0.05, 64]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.4} roughness={0.4} />
        </mesh>

        {/* Bezel ring, flush on top of the face */}
        <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0.24, 0]}>
          <torusGeometry args={[0.95, 0.025, 16, 64]} />
          <meshStandardMaterial color="#D4AF37" metalness={0.8} roughness={0.2} />
        </mesh>

        {/* Hour markers */}
        {markers.map((m, i) => (
          <mesh key={i} position={[m.x, 0.26, m.z]}>
            <boxGeometry args={[0.05, 0.02, 0.14]} />
            <meshStandardMaterial color="#D4AF37" metalness={0.7} roughness={0.3} />
          </mesh>
        ))}

        {/* Watch hands */}
        <mesh position={[0, 0.27, 0.2]}>
          <boxGeometry args={[0.04, 0.02, 0.5]} />
          <meshStandardMaterial color="#f5f5f5" metalness={0.5} roughness={0.3} />
        </mesh>
        <mesh position={[0.15, 0.27, 0.15]} rotation={[0, Math.PI / 4, 0]}>
          <boxGeometry args={[0.04, 0.02, 0.32]} />
          <meshStandardMaterial color="#f5f5f5" metalness={0.5} roughness={0.3} />
        </mesh>

        {/* Crown, sticking out the side */}
        <mesh rotation={[0, 0, Math.PI / 2]} position={[1.35, 0, 0]}>
          <cylinderGeometry args={[0.08, 0.08, 0.15, 16]} />
          <meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.2} />
        </mesh>
      </group>
    </Float>
  );
}

export default function Watch3D() {
  return (
    <section
      id="experience"
      className="flex flex-col w-full bg-[#090909] pt-6 pb-8 md:pt-10 md:pb-12"
    >
      {/* Camera positioned high and fairly close so we look DOWN onto the
          watch face, like a product photo — not from the side */}
      <div className="h-[32vh] sm:h-[46vh] md:h-[70vh] w-full">
        <Canvas camera={{ position: [0, 3.4, 2.6], fov: 40 }}>
          <ambientLight intensity={1.1} />
          <directionalLight position={[3, 6, 3]} intensity={1.8} />
          <directionalLight position={[-3, 2, -2]} intensity={0.7} />
          <directionalLight position={[0, -2, 4]} intensity={0.4} />

          <Suspense fallback={null}>
            <WatchModel />
          </Suspense>

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.8}
            minPolarAngle={Math.PI / 6}
            maxPolarAngle={Math.PI / 2.6}
          />
        </Canvas>
      </div>

      <div className="mt-4 md:mt-6 text-center text-gray-500 text-xs uppercase tracking-[3px]">
        Drag to rotate
      </div>
    </section>
  );
}