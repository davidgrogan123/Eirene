/**
 * Indicates an entity has x and y components in game world space.
 *
 */
export class Placeable implements Component {
  public constructor(x: number, y: number) {
    this.setPosition(x, y);
  }

  public setPosition(x: number, y: number): void {
    this.x = x;
    this.y = y;
  }

  public getPosition(): [number, number] {
    return [this.x, this.y];
  }

  private x!: number;
  private y!: number;
}
