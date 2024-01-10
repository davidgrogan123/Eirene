/**
 * Creates entities and implements the main game loop.
 *
 */
class Game {
  /**
   * Constructor.
   *
   * @remarks
   * The systems are injectable via the constructor which enables them to be
   * mocked if necessary for unit testing.
   */
  constructor(
    physicsSystem: PhysicsSystem,
    renderSystem: System,
    userInputSystem: System,
    scoringSystem: ScoringSystem
  ) {
    // Construct the plane entity and add behaviour via components
    let plane = this.ecsContainer.createEntity();
    this.ecsContainer.addComponent(plane, new Plane());
    this.ecsContainer.addComponent(plane, new StaticImage("images/plane.png"));
    this.ecsContainer.addComponent(
      plane,
      new DropsParachutists(
        0.4 /*The frequency with which parachutists are dropped*/
      )
    );
    this.ecsContainer.addComponent(
      plane,
      new Placeable(
        0 /*The X starting position of the plane in world space*/,
        100 /*The Y starting position of the plane in world space*/
      )
    );

    // Construct the boat entity and add behaviour via components
    let boat = this.ecsContainer.createEntity();
    this.ecsContainer.addComponent(boat, new Boat());
    this.ecsContainer.addComponent(boat, new StaticImage("images/boat.png"));
    this.ecsContainer.addComponent(boat, new UserControlable());

    // Keep a reference to the systems that we need later.
    this.physicsSystem = physicsSystem;
    this.scoringSystem = scoringSystem;

    // Add systems into the ECS container
    this.ecsContainer.addSystem(physicsSystem);
    this.ecsContainer.addSystem(renderSystem);
    this.ecsContainer.addSystem(userInputSystem);
  }

  /**
   * Updates all systems.
   * 
   * @param currentTime The current game world time.
   */
  public onFrame(currentTime: number) {

    this.physicsSystem.SetCurrentTime(currentTime);

    this.ecsContainer.update();

    if (this.scoringSystem.getCurrentLives() <= 0) {

      // TODO: Game is finished, user has lost the game.
    }
  }

  private ecsContainer: EcsContainer = new EcsContainer();
  private physicsSystem: PhysicsSystem;
  private scoringSystem: ScoringSystem;
}
