/**
 * @inheritdoc
 *
 */
class PhysicsSystemImpl implements PhysicsSystem {
  constructor(gravity: number) {
    this.gravity = gravity;
  }

  /**
   * @inheritdoc
   * 
   */
  SetCurrentTime(t: number): void {
    this.currentTime = t;
  }

  /**
   * @inheritdoc
   * 
   */
  update(entities: Set<Entity>, ecsContainer: EcsContainer): void {
    // Contract violation check
    Requires.that(this.currentTime > 0, "Current time must be set");

    // TODO: implement gravity and other physics for the entities. This should
    // be done via the following steps:
    //
    // 1. Find all entities in the engine that have an associated Droppable
    // component and a Placeable component.
    // 2. Apply the effect of gravity to each of these components
    // 3. Find the plane entity and move it
  }

  private gravity: number;
  private currentTime: number = -1;
}
