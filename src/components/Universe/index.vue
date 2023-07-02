<script lang="ts" setup>
import * as THREE from 'three'
import { onMounted } from 'vue'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

// imports planets and astronaut

import { StarsShip } from '../../models/starShip/Starship'
import { EarthModel } from '../../models/earth/EarthModel'
import { MarsModel } from '../../models/mars/MarsMode'
import { RocketModel } from '../../models/rocket/RocketModel'

import { AstronautModel } from '../../models/astronaut/Astronaut'
import * as t from './types'

const create3dSpace = (camera: t.ICamera, renderer: t.IRenderer) => {
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)

  new OrbitControls(camera, renderer.domElement)
}

onMounted(() => {
  // set camera and scene
  const camera = new THREE.PerspectiveCamera(
    75,
    innerWidth / innerHeight,
    0.1,
    1000
  )
  const scene = new THREE.Scene()

  const renderer = new THREE.WebGLRenderer()

  // load 3d-models

  const starshipModel = new StarsShip(scene)
  const earthModel = new EarthModel(scene)
  const marsModel = new MarsModel(scene)
  const rocketModel = new RocketModel(scene)

  const astronautModel = new AstronautModel(scene)

  starshipModel.load()
  earthModel.load()
  marsModel.load()
  rocketModel.load()

  astronautModel.load()

  // load Astronaut model

  // rotatePlaneta
  const rotatePlanets = () => {
    const planets = [rocketModel.rocketScene, earthModel.earthScene]

    if (planets.some((i) => i)) {
      planets.forEach((planet) => {
        planet!.scene.rotation.y += 0.001
        planet!.scene.rotation.x += 0.0001
      })
    }
  }

  //lights

  const light = new THREE.DirectionalLight(0xffffff, 1)
  const lightUp = new THREE.DirectionalLight(0xffffff, 1)

  light.position.set(1, 0, 1)
  lightUp.position.set(0, 1, 0)

  // add mash-models
  scene.add(light)
  scene.add(lightUp)

  // camera position
  camera.position.z = 6
  camera.rotation.x = 1.4

  // animate framers
  const clock = new THREE.Clock()

  const animate = () => {
    requestAnimationFrame(animate as any)
    renderer.render(scene, camera)
    starshipModel.starsMesh.rotation.x += 0.0005

    rotatePlanets()
    if (!astronautModel.mixer) return

    astronautModel.mixer.update(clock.getDelta())
  }

  create3dSpace(camera, renderer)
  animate()

  // add responsivity resize
  addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  })

  // addEventListener('keydown', (e) => {
  //   const moveCharacter = () => {
  //     if (!loadedMars) return
  //     if (e.key === 'a') {
  //       loadedMars.scene.rotateY(0.008)
  //     } else if (e.key === 'd') {
  //       loadedMars.scene.rotateY(-0.008)
  //     } else if (e.key === 's') {
  //       loadedMars.scene.rotateX(-0.008)
  //     } else if (e.key === 'w') {
  //       loadedMars.scene.rotateX(0.008)
  //     }
  //   }

  //   requestAnimationFrame(() => moveCharacter())
  // })
})
</script>

<template></template>
