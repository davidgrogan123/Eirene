/**
 * A system is something that operates on entities and their associated
 * components.
 *
 */
interface System {
  /**
   * Updates all provided entities within the ECS container.
   *
   * @remarks
   * The container can be used to add/remove additional entities or components as
   * necessary.
   *
   */
  update(entities: Set<Entity>, ecsContainer: EcsContainer): void;
}
