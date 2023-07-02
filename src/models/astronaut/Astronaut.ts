import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import * as THREE from 'three'

export class AstronautModel {
  private scene: THREE.Scene
  public mixer?: THREE.AnimationMixer

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
    })
  }

  animate(mixer: THREE.AnimationMixer) {
    const animLoader = new FBXLoader()
    animLoader.setPath('../../assets/astronaut/')

    animLoader.load('walking.fbx', (anim) => {
      const idle = mixer.clipAction(anim.animations[0])

      idle.play()
    })
  }
}
