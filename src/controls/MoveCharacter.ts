import { ICamera, IScene } from '@/types/types'
import * as THREE from 'three'

import gsap from 'gsap'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export class MoveCharacter {
  keys = {
    w: {
      pressed: false,
    },
    a: {
      pressed: false,
    },
    s: {
      pressed: false,
    },
    d: {
      pressed: false,
    },
    shift: {
      pressed: false,
    },
    space: {
      pressed: false,
    },
  }

  firstAnimation = true
  astronaut?: THREE.Group

  camera?

  constructor(aCamera: ICamera, astronautModel: THREE.Group) {
    this.camera = aCamera
    this.astronaut = astronautModel
    this.eventListener()
  }

  private moveCamera() {
    if (!this.camera) return

    gsap.to(this.camera.position, {
      z: 3,
      y: -2,
      // ease: 'power3.inOut',
      duration: 1,
    })

    gsap.to(this.camera.position, {
      y: 31,
      z: 0,
      duration: 2,
      delay: 2.2,
    })

    gsap.to(this.camera.position, {
      z: -1000.5,
      delay: 4.5,
      duration: 1,
    })
  }

  private navigateAstronaut() {
    if (!this.astronaut) return

    gsap.to(this.astronaut.position, {
      y: 30,
      duration: 2,
      delay: 2.2,
    })

    gsap.to(this.astronaut.rotation, {
      z: 0,
      duration: 1,
      delay: 1,
    })

    gsap.to(this.astronaut.position, {
      z: -1000,
      delay: 4.5,
      duration: 1,
    })
  }

  private moveAstronaut(
    animations: THREE.Group[],
    mixer: THREE.AnimationMixer
  ) {
    if (!this.astronaut) return

    const sittedAnimAction = animations.filter((i) => i.name === 'sitted')[0]
      .animations[0]

    const sittedAnimCliper = mixer.clipAction(sittedAnimAction)

    if (this.firstAnimation) {
      sittedAnimCliper.play()
      return
    }

    const standingUpAction = animations.filter(
      (i) => i.name === 'standingUp'
    )[0].animations[0]

    const standingUpCliper = mixer.clipAction(standingUpAction)

    // animation load 2
    standingUpCliper.crossFadeFrom(sittedAnimCliper, 0.5, true)

    standingUpCliper.loop = THREE.LoopOnce
    standingUpCliper.play()

    // animation load 3
    const breathingAction = animations.filter((i) => i.name === 'breathing')[0]
      .animations[0]
    const breathingCliper = mixer.clipAction(breathingAction)

    breathingCliper.crossFadeFrom(standingUpCliper, 2, true)
    breathingCliper.loop = THREE.LoopOnce
    breathingCliper.play()

    // animation load 4

    const jumpAnimAction = animations.filter((i) => i.name === 'jumping')[0]
      .animations[0]

    const jumpAnimCliper = mixer.clipAction(jumpAnimAction)

    jumpAnimCliper.crossFadeFrom(breathingCliper, 1, true)

    jumpAnimCliper.setDuration(5)

    jumpAnimCliper.loop = THREE.LoopOnce

    jumpAnimCliper.weight = 0.6

    jumpAnimCliper.play()
    // jumpAnimCliper.setDuration(2)

    mixer.addEventListener('finished', (e) => {
      console.log(e)
      // animation load 4
      // mixer.stopAllAction()
      const flyingAnimAction = animations.filter((i) => i.name === 'flying')[0]
        .animations[0]

      const flyingAnimCliper = mixer.clipAction(flyingAnimAction)

      // flyingAnimCliper.timeScale = 20
      flyingAnimCliper.crossFadeFrom(jumpAnimCliper, 0.5, true)

      flyingAnimCliper.play()
    })

    this.navigateAstronaut()
  }

  flyingAnimation(
    animations: THREE.Group[],
    mixer: THREE.AnimationMixer | undefined
  ) {
    if (!mixer) return

    const moveAstronautFn = () => this.moveAstronaut(animations, mixer)

    moveAstronautFn()

    window.addEventListener('keydown', (event) => {
      if (event.code !== 'Space') return

      this.firstAnimation = false
      this.moveCamera()

      moveAstronautFn()

      // orbit.update()
    })
  }
  eventListener() {
    window.addEventListener('keydown', (event) => {
      console.log(event.code)
      switch (event.key) {
        case 'w': {
          this.keys.w.pressed = true
          break
        }
        case 'a': {
          this.keys.a.pressed = true
          break
        }
        case 's': {
          this.keys.s.pressed = true
          break
        }
        case 'd': {
          this.keys.d.pressed = true
          break
        }
        case ' ': {
          this.keys.space.pressed = true
        }
        case 'Shift': {
          this.keys.shift.pressed = true
        }
      }
    })

    window.addEventListener('keyup', (event) => {
      switch (event.key) {
        case 'w': {
          this.keys.w.pressed = false
          break
        }
        case 'a': {
          this.keys.a.pressed = false
          break
        }
        case 's': {
          this.keys.s.pressed = false
          break
        }
        case 'd': {
          this.keys.d.pressed = false
          break
        }
      }
    })
  }

  moveCameraKeyBoard() {
    if (!this.camera) return
    // if (this.keys.w.pressed) {
    //   this.camera.rotation.x += 0.02
    // }
    // if (this.keys.s.pressed) {
    //   this.camera.rotation.x -= 0.02
    // }
    if (this.keys.a.pressed) {
      this.camera.rotateY(0.02)
    }
    if (this.keys.d.pressed) {
      this.camera.rotateY(-0.02)
    }
  }
}
