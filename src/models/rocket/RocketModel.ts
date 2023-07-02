import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export class RocketModel {
  private glftLoader = new GLTFLoader()
  private scene
  public rocketScene?: GLTF
  constructor(scene: THREE.Scene) {
    this.scene = scene
  }

  load() {
    this.glftLoader.load('../../assets/rocket/scene.gltf', (gltfScene) => {
      gltfScene.scene.position.x = 3.4
      gltfScene.scene.position.y = 3.4
      gltfScene.scene.position.z = -4
      gltfScene.scene.rotation.x = 0.5

      gltfScene.scene.scale.set(0.1, 0.1, 0.1)
      this.scene.add(gltfScene.scene)

      this.rocketScene = gltfScene
    })
  }
}
