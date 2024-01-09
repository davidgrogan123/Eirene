/**
 * The container for the various game elements; it coordinates entities,
 * components, and systems within the game.
 *
 * @remarks
 * A very simple implementation of the Entity Component System (ECS) pattern.
 *
 * See below for more information about this pattern:
 * https://en.wikipedia.org/wiki/Entity_component_system
 *
 */
class EcsContainer {
  /**
   * Creates a new entity and returns it.
   *
   * @remarks
   * The entity value is cached internally, and can only be used with this game
   * engine.
   */
  public createEntity(): Entity {
    let entity = this.nextEntityID;
    this.nextEntityID++;
    this.entities.set(entity, new Set<Component>());
    return entity;
  }

  /**
   * Marks an entitiy for removal.
   *
   * @remarks
   * The entity and its associated components will be removed at the end of the
   * update method. This ensures it isn't removed before all systems have had a
   * chance to act upon it.
   *
   */
  public markEntityForRemoval(entity: Entity): void {
    this.entitiesToDestroy.push(entity);
  }

  /**
   * Adds a component to the specified entity.
   *
   */
  public addComponent(entity: Entity, component: Component): void {
    Requires.thatArgument(
      this.entities.has(entity),
      "entity",
      "Entity must have been added to entities collection"
    );

    this.entities.get(entity)!.add(component);
  }

  /**
   * Removes a component from the specified entity.
   *
   */
  removeComponent(entity: Entity, componentClass: Function): void {
    Requires.thatArgument(
      this.entities.has(entity),
      "entity",
      "Entity must have been added to entities collection"
    );

    this.entities.get(entity)!.delete(componentClass);
  }

  /**
   * Adds a system to the engine.
   *
   */
  addSystem(system: System): void {
    this.systems.set(system, new Set());
  }

  /**
   * Updates all Systems, then destroys any Entities that were marked
   * for removal.
   */
  public update(): void {
    // TODO: Add a way to specify the update order.
    // TODO: Define which entities are relevant for a particular system.
    for (let [system, entities] of this.systems.entries()) {
      system.update(entities, this);
    }

    while (this.entitiesToDestroy.length > 0) {
      this.entities.delete(this.entitiesToDestroy.pop()!);
    }
  }

  private entities = new Map<Entity, Set<Component>>();
  private systems = new Map<System, Set<Entity>>();
  private nextEntityID = 0;
  private entitiesToDestroy = new Array<Entity>();
}
