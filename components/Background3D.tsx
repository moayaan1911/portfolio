"use client";

import * as React from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

type CoinKey =
  | "bitcoin"
  | "ethereum"
  | "binance"
  | "solana"
  | "chainlink"
  | "tron";

const COIN_TEXTURE_URL: Record<CoinKey, string> = {
  bitcoin: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
  ethereum: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
  binance: "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png",
  solana: "https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png",
  chainlink: "https://s2.coinmarketcap.com/static/img/coins/64x64/1975.png",
  tron: "https://s2.coinmarketcap.com/static/img/coins/64x64/1958.png",
};

const BOUNDS = 14; // world bounds for bouncing
const MIN_SPEED = 1.2; // calmer pace
const MAX_SPEED = 2.2; // calmer pace
const COUNT_PER_COIN = 8; // slightly fewer sprites

function randomBetween(min: number, max: number): number {
  return min + Math.random() * (max - min);
}

function Bouncer({ texture }: { texture: THREE.Texture }) {
  const ref = React.useRef<THREE.Sprite>(null);
  const velocity = React.useRef(
    new THREE.Vector3(
      randomBetween(-1, 1),
      randomBetween(-1, 1),
      randomBetween(-1, 1)
    )
      .normalize()
      .multiplyScalar(randomBetween(MIN_SPEED, MAX_SPEED))
  );

  // Initial position
  React.useEffect(() => {
    if (!ref.current) return;
    ref.current.position.set(
      randomBetween(-BOUNDS, BOUNDS),
      randomBetween(-BOUNDS, BOUNDS),
      randomBetween(-BOUNDS, BOUNDS)
    );
  }, []);

  useFrame((state, delta) => {
    const sprite = ref.current;
    if (!sprite) return;
    const pos = sprite.position;
    pos.addScaledVector(velocity.current, delta);

    // Bounce on bounds
    if (pos.x > BOUNDS || pos.x < -BOUNDS) velocity.current.x *= -1;
    if (pos.y > BOUNDS || pos.y < -BOUNDS) velocity.current.y *= -1;
    if (pos.z > BOUNDS || pos.z < -BOUNDS) velocity.current.z *= -1;

    // No shake/pulse; keep size steady and small
    sprite.scale.setScalar(0.6);
  });

  return (
    <sprite
      ref={ref}
      scale={[0.6, 0.6, 0.6]}>
      <spriteMaterial
        map={texture}
        transparent
        depthWrite={false}
        depthTest={false}
        toneMapped={false}
      />
    </sprite>
  );
}

function SpritesField() {
  const urls = React.useMemo(() => Object.values(COIN_TEXTURE_URL), []);
  const textures = useTexture(urls) as THREE.Texture[];

  React.useEffect(() => {
    textures.forEach((t) => {
      t.generateMipmaps = true;
      t.minFilter = THREE.LinearMipmapLinearFilter;
      t.magFilter = THREE.LinearFilter;
      // three@0.179 uses colorSpace instead of encoding
      (t as unknown as { colorSpace?: unknown }).colorSpace = (
        THREE as unknown as { SRGBColorSpace?: unknown }
      ).SRGBColorSpace;
      t.needsUpdate = true;
    });
  }, [textures]);

  const movers = React.useMemo(() => {
    const arr: { key: string; texture: THREE.Texture }[] = [];
    textures.forEach((tex, i) => {
      for (let j = 0; j < COUNT_PER_COIN; j++) {
        arr.push({ key: `${i}-${j}`, texture: tex });
      }
    });
    return arr;
  }, [textures]);

  return (
    <group>
      {movers.map((m) => (
        <Bouncer
          key={m.key}
          texture={m.texture}
        />
      ))}
    </group>
  );
}

export default function Background3D() {
  return (
    <div
      style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0 }}>
      <Canvas
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
        camera={{ position: [0, 0, 22], fov: 60 }}>
        {/* Minimal scene for calm background */}
        <SpritesField />
      </Canvas>
    </div>
  );
}
