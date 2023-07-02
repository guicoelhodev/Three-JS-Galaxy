<script lang="ts" setup>
import * as THREE from 'three'
import { onMounted } from 'vue'

// imports planets and astronaut

import { StarsShip } from '../../models/starShip/Starship'
import { EarthModel } from '../../models/earth/EarthModel'
import { MarsModel } from '../../models/mars/MarsMode'
import { RocketModel } from '../../models/rocket/RocketModel'

import { AstronautModel } from '../../models/astronaut/Astronaut'
import { Galaxy } from '../../controls/Galaxy'

onMounted(() => {
  const galaxy = new Galaxy()

  const scene = galaxy.scene
  const camera = galaxy.camera
  const renderer = galaxy.renderer

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

  animate()

  // add responsivity resize
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
