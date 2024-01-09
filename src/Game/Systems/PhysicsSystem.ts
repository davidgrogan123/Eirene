/**
 * Applies gravity and other physical effects to all required entities.
 *
 */
interface PhysicsSystem extends System {
  /**
   * Sets the current time within the world.
   *
   */
  SetCurrentTime(t: number): void;
}
