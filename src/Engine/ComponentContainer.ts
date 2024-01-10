type ComponentClass<T extends Component> = new (...args: any[]) => T

/**
 * The container for components.
 *
 */
export class ComponentContainer {
  /**
   * Adds a component to the container.
   * 
   */
  public add(component: Component): void {
      this.map.set(component.constructor, component);
  }

  /**
   * Gets a component from this container.
   * 
   */
  public get<T extends Component>(
      componentClass: ComponentClass<T>
  ): T {
      return this.map.get(componentClass) as T;
  }

  /**
   * True if the container has the component class.
   * 
   */
  public has(componentClass: Function): boolean {
      return this.map.has(componentClass);
  }

  /**
   * True if the container has all the specified component classes.
   * 
   */
  public hasAll(componentClasses: Iterable<Function>): boolean {
      for (let cls of componentClasses) {
          if (!this.map.has(cls)) {
              return false;
          }
      }
      return true;
  }

  /**
   * True if the container has all the specified component classes.
   * 
   */
  public delete(componentClass: Function): void {
      this.map.delete(componentClass);
  }

  private map = new Map<Function, Component>()
}