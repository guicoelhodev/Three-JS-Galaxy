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

  async load() {
    const loader = new FBXLoader()
    loader.setPath('gltf/astronaut/')

    
    const fbx = await loader.loadAsync('character.fbx')

    fbx.scale.setScalar(0.3)
    fbx.traverse((c) => {
      c.castShadow = true
    })

    fbx.position.y = -3.4
    fbx.rotation.y = 3

    this.scene.add(fbx)
    this.mixer = new THREE.AnimationMixer(fbx)

    return fbx
  }

  async loadAllAnimations() {
    const animLoader = new FBXLoader()
    animLoader.setPath('gltf/astronaut/')
    const animations = []

    const relativeAnimPaths = [
      'breathing.fbx',
      'sitted.fbx',
      'standingUp.fbx',
      'jumping.fbx',
      'flying.fbx',
    ]

    for await (let anim of relativeAnimPaths) {
      let animFbx = await animLoader.loadAsync(anim)

      let nameWithoutExtension = anim.split('.')[0]
      animFbx = { ...animFbx, name: nameWithoutExtension } as THREE.Group

      animations.push(animFbx)
    }

    return {
      animations,
    }
  }
}
