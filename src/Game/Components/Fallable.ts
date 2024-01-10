/**
 * An entity that is falling under the effects of gravity.
 *
 * @remarks
 * The gravity multiplier adjusts the gravity effect to reduce/increase the
 * speed of the fall.
 *
 */
export class Fallable implements Component {
  constructor(gravityMultiplier: number) {
    this.gravityMultiplier = gravityMultiplier;
  }

  readonly gravityMultiplier: number;
}
