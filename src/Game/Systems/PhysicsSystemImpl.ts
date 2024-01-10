import { Requires } from "../../Common/Diagnostics/CodeContract/Requires";
import { EcsContainer } from "../../Engine/EcsContainer";
import { Fallable } from "../Components/Fallable";
import { Placeable } from "../Components/Placeable";
import { Dead } from "../Components/Dead";

/**
 * @inheritdoc
 *
 * @remarks
 * It may be necessary to break this class up to provide specific physics
 * effects for components down the track, however this isn't needed yet for this
 * simple game.
 *
 * eg. GravitySystem, FlightSystem, etc.
 *
 */
export class PhysicsSystemImpl implements PhysicsSystem {
  constructor(gravity: number) {
    this.gravity = gravity;
  }

  /**
   * @inheritdoc
   *
   */
  SetCurrentTime(t: number): void {
    Requires.thatArgument(t >= 0, "t", "Current time must greater then zero");

    this.currentTime = t;
  }

  /**
   * @inheritdoc
   *
   */
  SetTimeDelta(t: number): void {
    Requires.thatArgument(t >= 0, "t", "Time delta must greater then zero");

    this.timeDelta = t;
  }

  /**
   * @inheritdoc
   *
   */
  update(entities: Set<Entity>, ecsContainer: EcsContainer): void {
    Requires.that(this.currentTime >= 0, "Current time must be set");
    Requires.that(this.timeDelta >= 0, "Time delta must be set");

    // Apply gravity to all entities with both Fallable and Placeable
    // components.
    for (let entity of entities) {

      let components = ecsContainer.getComponents(entity);
      if (components.hasAll([Fallable, Placeable])) {

        // Retrieve the current position in world space.
        let placable = components.get(Placeable);
        let pos = placable.getPosition();

        // Calculate a new position in world space.

        // TODO: Fix the calculation so it makes sense and looks good on the
        // screen. The effect of gravity is actually dependent upon the current
        // speed, but this is just a nominal calculation for demonstration
        // purposes. It isn't meant to represent real physics.
        let oldX = pos[0];
        let oldY = pos[1];
        let x = oldX;
        let y = oldY * -1 * this.gravity * this.timeDelta;

        // Update the entity with the new position.
        placable.setPosition(x, y);

        // Check whether any falling entities are dead. Assume a falling entity
        // is dead when it's Y component reaches 0.
        if (y <= 0) {
          // The entity can be marked as dead by adding a Dead component to the
          // entity.
          ecsContainer.addComponent(entity, new Dead());
        }
      }
    }
  }

  private gravity: number;
  private currentTime: number = -1;
  private timeDelta: number = -1;
}
