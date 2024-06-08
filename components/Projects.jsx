/** @format */

'use client';
import { Image, Text } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { animate, useMotionValue } from 'framer-motion';

import { motion } from 'framer-motion-3d';
import { atom, useAtom } from 'jotai';
import { useEffect, useRef } from 'react';

export const projects = [
  {
    title: 'Powered Heroes',
    url: 'https://powered-heroes.vercel.app',
    image: 'projects/ai-nft.png',
    description: 'AI NFT Generator and Gasless Minter',
  },
  {
    title: 'zkFund',
    url: 'https://zkfund.vercel.app',
    image: 'projects/crowdfunding.png',
    description: 'Decentralized Crowdfunding dApp built on BNB Testnet',
  },
  {
    title: 'ERC404',
    url: 'https://github.com/moayaan1911/erc404-uniswap',
    image: 'projects/erc404.png',
    description: 'ERC-404 smart contract implementation',
  },
  {
    title: 'PolyCloud',
    url: 'https://polycloud.vercel.app/',
    image: 'projects/polycloud.png',
    description: 'Decentralized Storage web app built on Polygon',
  },
  {
    title: 'FULL3',
    url: 'https://www.npmjs.com/package/full3',
    image: 'projects/full3.png',
    description:
      'FULL STACK WEB3 Starter Template built on React.js, Vite, Hardhat and Thirdweb',
  },
  {
    title: 'Finstar Avenue',
    url: 'https://finstaravenue.com',
    image: 'projects/finstar.png',
    description: 'Landing page for Finstar Avenue as Freelancer',
  },
  {
    title: 'Kronobits',
    url: 'https://kronobits.com',
    image: 'projects/kronobits.jpg',
    description: 'Landing page for Kronobits Solutions as a Freelancer',
  },
];

const Project = (props) => {
  const { project, highlighted } = props;

  const background = useRef();
  const bgOpacity = useMotionValue(0.4);

  useEffect(() => {
    animate(bgOpacity, highlighted ? 0.7 : 0.4);
  }, [highlighted]);

  useFrame(() => {
    background.current.material.opacity = bgOpacity.get();
  });

  return (
    <group {...props}>
      <mesh
        position-z={-0.001}
        onClick={() => window.open(project.url, '_blank')}
        ref={background}>
        <planeGeometry args={[3.2, 3]} />
        <meshBasicMaterial
          color='black'
          transparent
          opacity={0.4}
        />
      </mesh>
      <Image
        scale={[3, 2, 1]}
        url={project.image}
        toneMapped={false}
        position-y={0.5}
      />
      <Text
        maxWidth={3}
        anchorX={'left'}
        anchorY={'top'}
        fontSize={0.3}
        position={[-1.5, -0.5, 0]}>
        {project.title.toUpperCase()}
      </Text>
      <Text
        maxWidth={3}
        anchorX='left'
        anchorY='top'
        fontSize={0.15}
        position={[-1.5, -0.8, 0]}>
        {project.description}
      </Text>
    </group>
  );
};

export const currentProjectAtom = atom(Math.floor(projects.length / 2));

export const Projects = () => {
  const { viewport } = useThree();
  const [currentProject] = useAtom(currentProjectAtom);

  return (
    <group position-y={-viewport.height * 2.8 + 1}>
      {projects.map((project, index) => (
        <motion.group
          key={'project_' + index}
          position={[index * 3.5, 0, -3]}
          animate={{
            x: 0 + (index - currentProject) * 3.5,
            y: currentProject === index ? 0 : -0.1,
            z: currentProject === index ? -2 : -3,
            rotateX: currentProject === index ? 0 : -Math.PI / 3,
            rotateZ: currentProject === index ? 0 : -0.1 * Math.PI,
          }}>
          <Project
            project={project}
            highlighted={index === currentProject}
          />
        </motion.group>
      ))}
    </group>
  );
};
