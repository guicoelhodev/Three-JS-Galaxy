class BasicCharacterControllerProxy {
  _animations: any
  constructor(animations: any) {
    this._animations = animations
  }

  get animations() {
    return this._animations
  }
}
