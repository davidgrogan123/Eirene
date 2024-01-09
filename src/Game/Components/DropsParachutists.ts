/**
 * An entity that can drop parachutists in the game.
 * 
 */
class DropsParachutists implements Component {
  constructor(dropFrequency: number) {
    this.dropFrequency = dropFrequency;
  }

  /**
   * The frequency with which parachutists should drop.
   */
  readonly dropFrequency: number;
}
