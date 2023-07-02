<script lang="ts" setup>
import * as THREE from 'three'
import { onMounted } from 'vue'
import StarShipModel from '../../models_3d/Starship'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import * as t from './types'

const create3dSpace = (camera: t.ICamera, renderer: t.IRenderer) => {
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)

  new OrbitControls(camera, renderer.domElement)
}

onMounted(() => {
  // load 3d-models

  const starshipModel = new StarShipModel()
  const { starsMesh } = starshipModel.createStarGalaxy()

  // set camera and scene
  const camera = new THREE.PerspectiveCamera(
    75,
    innerWidth / innerHeight,
    0.1,
    1000
  )
  const scene = new THREE.Scene()

  const renderer = new THREE.WebGLRenderer()

  // const geometryCube = new THREE.BoxGeometry(1, 1, 1)
  // const materialCube = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
  // const cubeMesh = new THREE.Mesh(geometryCube, materialCube)

  // scene.add(cubeMesh)

  // add mash-models
  scene.add(starsMesh)

  // animate framers

  camera.position.z = 5
  const animate = () => {
    requestAnimationFrame(animate as any)
    renderer.render(scene, camera)

    starsMesh.rotation.x += 0.001
  }
  create3dSpace(camera, renderer)
  animate()

  // add responsivity resize
})
</script>

<template></template>
