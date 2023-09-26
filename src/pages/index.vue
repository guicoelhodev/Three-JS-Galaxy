<script setup>
import * as THREE from 'three'
import { onMounted } from 'vue'
import { Icon } from '@iconify/vue'

// imports planets and astronaut

import { StarsShip } from '@/models/starShip/Starship'
import { EarthModel } from '@/models/earth/EarthModel'
import { MarsModel } from '@/models/mars/MarsMode'
import { RocketModel } from '@/models/rocket/RocketModel'

import { AstronautModel } from '@/models/astronaut/Astronaut'
import { Galaxy } from '@/controls/Galaxy'
import { MoveCharacter } from '@/controls/MoveCharacter'

const componentWasMounted = ref(false)

onMounted(async () => {
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
  const astronautFbx = await astronautModel.load()
  const { animations } = await astronautModel.loadAllAnimations()

  // make 3d camera move

  const moveCharacter = new MoveCharacter(camera, astronautFbx)

  const rotatePlanets = () => {
    const planets = [rocketModel.rocketScene, earthModel.earthScene]

    if (!planets) return
    if (planets.some((i) => i)) {
      planets.forEach((planet) => {
        planet.scene.rotation.y += 0.001
        planet.scene.rotation.x += 0.0001
      })
    }
  }

  moveCharacter.flyingAnimation(animations, astronautModel.mixer)
  // animate framers
  const clock = new THREE.Clock()

  const animate = () => {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
    starshipModel.starsMesh.rotation.x += 0.0005

    rotatePlanets()
    if (!astronautModel.mixer) return

    astronautModel.mixer.update(clock.getDelta())
    moveCharacter.moveCameraKeyBoard()

    // moveCharacter.moveCamera()
  }

  animate()

  componentWasMounted.value = true
})
</script>

<template>
  <div
    :v-if="componentWasMounted"
    class="absolute inset-0 flex items-center justify-center"
  >
    <TypeWritter
      msg="Hi, I'm Guilherme Coelho"
      :delayTime="2000"
      classname="text-4xl"
    />

    <TypeWritter
      msg="I'm work as front-end developer"
      :delayTime="9000"
      classname="text-4xl text-cyan-400 font-semibold"
    />

    <TypeWritter
      msg="Welcome to my galaxy"
      :delayTime="15000"
      classname="text-6xl font-bold"
    />

    <article
      id="space_container"
      class="flex flex-col items-center justify-center gap-2"
    >
      <p class="text-white text-3xl">Press space to begin</p>
      <Icon icon="tabler:space" color="white" width="68" height="68" />
    </article>
  </div>
</template>

<style>
html {
  overflow: hidden;
}
</style>
