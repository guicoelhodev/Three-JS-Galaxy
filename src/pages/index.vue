<script setup lang="ts">
import * as THREE from 'three'
import { onMounted } from 'vue'
import { Icon } from '@iconify/vue'
import { gsap } from 'gsap'

// imports planets and astronaut

import { StarsShip } from '@/models/starShip/Starship'
import { EarthModel } from '@/models/earth/EarthModel'
import { MarsModel } from '@/models/mars/MarsMode'
import { RocketModel } from '@/models/rocket/RocketModel'

import { AstronautModel } from '@/models/astronaut/Astronaut'
import { Galaxy } from '@/controls/Galaxy'
import { MoveCharacter } from '@/controls/MoveCharacter'

const componentWasMounted = ref(false)
const initialMesage: { msg: string; delay: number }[] = [
  {
    msg: "Hi, I'm Guilherme Coelho",
    delay: 3000,
  },
  {
    msg: "I'm work as front-end developer",
    delay: 8000,
  },
  {
    msg: 'Welcome to my galaxy',
    delay: 14000,
  },
]

onMounted(async () => {

  fadeIn('.info-1', 17)
  

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
        planet!.scene.rotation.y += 0.001
        planet!.scene.rotation.x += 0.0001
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
})
</script>

<template>
  <div
    :v-if="componentWasMounted"
    class="absolute inset-0 flex items-center justify-center"
  >
    <ul class="relative" v-for="message in initialMesage" :key="message.msg">
      <TypeWritter
        :msg="message.msg"
        :delayTime="message.delay"
        classname="text-4xl text-cyan-400 font-bold"
      />
    </ul>

    <div class="info-1" :v-if="componentWasMounted">
      <article
        id="space_container"
        class="flex flex-col items-center justify-center gap-2"
      >
        <p class="text-white text-3xl">Press space to begin</p>
        <Icon icon="tabler:space" color="white" width="68" height="68" />
      </article>
    </div>
  </div>
</template>

<style>
html {
  overflow: hidden;
}

.show {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
