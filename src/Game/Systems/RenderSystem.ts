/**
 * Renders required entities to the display.
 *
 */
class RenderSystem implements System {
  /** {@inheritDoc} */
  update(entities: Set<Entity>, ecsContainer: EcsContainer): void {

    // TODO: implement rendering of the entities. This should be done via
    // the following steps:
    //
    // 1. Find all entities in the engine that have an associated StaticImage
    // component and a Placeable component.
    // 2. Render each entity. Its StaticImage component will provide the
    // image, and its Placeable component will provide the world position. It is
    // up to the render system to translate the world position to a suitable
    // screen position.
  }
}
