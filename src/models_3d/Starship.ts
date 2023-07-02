import * as THREE from 'three'

export default class Startship {
  starGeometry = new THREE.BufferGeometry()

  startMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
  })
  startVertices: number[] = []

  starsMesh = new THREE.Points(this.starGeometry, this.startMaterial)

  createStarGalaxy() {
    for (let i = 0; i < 6000; i++) {
      const x = (Math.random() - 0.5) * 2000
      const y = (Math.random() - 0.5) * 2000
      const z = (Math.random() - 0.5) * 2000

      this.startVertices.push(x, y, z)
    }

    this.starGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(this.startVertices, 3)
    )

    return { starsMesh: this.starsMesh }
  }
}
