import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export class MarsModel {
  private glftLoader = new GLTFLoader()
  private scene

  constructor(scene: THREE.Scene) {
    this.scene = scene
  }

  load() {
    this.glftLoader.load('../../assets/mars/scene.gltf', (gltfScene) => {
      gltfScene.scene.position.x = 0
      gltfScene.scene.position.y = -11
      gltfScene.scene.position.z = 0
      gltfScene.scene.rotation.x = 5

      gltfScene.scene.scale.set(3, 3, 3)
      this.scene.add(gltfScene.scene)
    })
  }
}
