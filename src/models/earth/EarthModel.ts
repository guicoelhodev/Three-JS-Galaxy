import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export class EarthModel {
  private glftLoader = new GLTFLoader()
  private scene
  public earthScene?: GLTF

  constructor(scene: THREE.Scene) {
    this.scene = scene
  }

  load() {
    this.glftLoader.load('../../assets/earth/scene.gltf', (gltfScene) => {
      gltfScene.scene.position.x = -3.8
      gltfScene.scene.position.y = 31.5
      gltfScene.scene.position.z = -1004
      gltfScene.scene.rotation.x = 0.2

      gltfScene.scene.scale.set(0.002, 0.002, 0.002)

      this.scene.add(gltfScene.scene)
      this.earthScene = gltfScene
    })
  }
}
