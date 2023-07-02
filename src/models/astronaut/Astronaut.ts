import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import * as THREE from 'three'

type IAnimation = {
  clip: THREE.AnimationClip
  action: THREE.AnimationAction
  name: string
}

export class AstronautModel {
  private scene: THREE.Scene
  public mixer?: THREE.AnimationMixer
  public animations: IAnimation[] = []

  constructor(scene: THREE.Scene) {
    this.scene = scene
  }

  load() {
    const loader = new FBXLoader()

    loader.setPath('../../assets/astronaut/')

    loader.load('character.fbx', (fbx) => {
      fbx.scale.setScalar(0.3)
      fbx.traverse((c) => {
        c.castShadow = true
      })

      fbx.position.y = -3.4
      fbx.rotation.y = 3.2

      this.scene.add(fbx)
      this.mixer = new THREE.AnimationMixer(fbx)
      this.animate(this.mixer)

      //console.log(this.animations)
    })
  }

  animate(mixer: THREE.AnimationMixer) {
    const animLoader = new FBXLoader()
    animLoader.setPath('../../assets/astronaut/')

    animLoader.load('walking.fbx', (a) => this.Onload('walking', a, mixer))
    animLoader.load('sitted.fbx', (a) => this.Onload('sitted', a, mixer))
    animLoader.load('standingUp.fbx', (a) =>
      this.Onload('standingUp', a, mixer)
    )

    const currentAnimation = this.animations[0]
    if (currentAnimation) {
      currentAnimation.action.play()
    }
  }

  private Onload(
    animName: string,
    anim: THREE.Group,
    mixer: THREE.AnimationMixer
  ) {
    const clip = anim.animations[0]
    const action = mixer.clipAction(clip)

    //action.play()

    this.animations.push({
      clip: clip,
      action: action,
      name: animName,
    })
  }
}
