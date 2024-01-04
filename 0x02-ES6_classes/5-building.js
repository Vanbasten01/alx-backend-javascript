export default class Building {
  constructor(sqft) {
    if (typeof sqft === 'number' && sqft > 0) {
      this._sqft = sqft;
    }
    if (this.constructor !== Building && typeof this.evacuationWarningMessage !== 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }
}