/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/test.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0,0, 0]} scale={0.0015}>
        <group position={[55.24, 190.49, -160.66]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[1.27, 1.57, 1.29]}>
          <mesh geometry={nodes.网格009.geometry} material={materials['04 - Default']} />
          <mesh geometry={nodes.网格009_1.geometry} material={materials['02 - Default.001']} />
          <mesh geometry={nodes.网格009_2.geometry} material={materials['03 - Default.001']} />
        </group>
        <group position={[164.42, 190.49, 61.52]} rotation={[Math.PI / 2, 0, Math.PI]} scale={[1.27, 1.57, 1.29]}>
          <mesh geometry={nodes.网格010.geometry} material={materials['01 - Default.001']} />
          <mesh geometry={nodes.网格010_1.geometry} material={materials['02 - Default.001']} />
          <mesh geometry={nodes.网格010_2.geometry} material={materials['03 - Default.001']} />
        </group>
        <group position={[-168.06, 190.49, -54.53]} rotation={[Math.PI / 2, 0, 0]} scale={[1.27, 1.57, 1.29]}>
          <mesh geometry={nodes.网格011.geometry} material={materials['05 - Default']} />
          <mesh geometry={nodes.网格011_1.geometry} material={materials['02 - Default.001']} />
          <mesh geometry={nodes.网格011_2.geometry} material={materials['03 - Default.001']} />
        </group>
        <group position={[0, -518.48, 0]} scale={[0.88, 1.17, 0.88]}>
          <mesh geometry={nodes.网格012.geometry} material={materials['02 - Default.001']} />
          <mesh geometry={nodes.网格012_1.geometry} material={materials['08 - Default']} />
        </group>
        <group position={[-9.78, -323.52, 1.4]} scale={[1.13, 0.87, 1.13]}>
          <mesh geometry={nodes.网格013.geometry} material={materials['01 - Default.001']} />
          <mesh geometry={nodes.网格013_1.geometry} material={materials['05 - Default']} />
          <mesh geometry={nodes.网格013_2.geometry} material={materials['04 - Default']} />
          <mesh geometry={nodes.网格013_3.geometry} material={materials['02 - Default.001']} />
          <mesh geometry={nodes.网格013_4.geometry} material={materials['07 - Default']} />
          <mesh geometry={nodes.网格013_5.geometry} material={materials['06 - Default']} />
        </group>
        <group position={[-57.96, 190.49, 169.66]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[1.27, 1.57, 1.29]}>
          <mesh geometry={nodes.网格014.geometry} material={materials['06 - Default']} />
          <mesh geometry={nodes.网格014_1.geometry} material={materials['02 - Default.001']} />
          <mesh geometry={nodes.网格014_2.geometry} material={materials['03 - Default.001']} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/test.gltf')
