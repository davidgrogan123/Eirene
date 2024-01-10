import { EcsContainer } from "../../Engine/EcsContainer";
import { Dead } from "../Components/Dead";

/**
 * @inheritdoc
 *
 */
export class ScoringSystemImpl implements ScoringSystem {
  constructor(maxlives: number) {
    this.maxlives = maxlives;
    this.currentLives = maxlives;
  }

  /**
   * @inheritdoc
   *
   */
  public getCurrentLives(): number {
    return this.currentLives;
  }

  /**
   * @inheritdoc
   *
   */
  update(entities: Set<Entity>, ecsContainer: EcsContainer): void {
    // Find all dead entities.
    for (let entity of entities) {
      let components = ecsContainer.getComponents(entity);
      if (components.has(Dead)) {
        // The user loses one life for each dead entity.
        this.currentLives--;

        // The dead entity can be removed.
        ecsContainer.markEntityForRemoval(entity);
      }
    }
  }

  private maxlives: number;
  private currentLives: number;
}
