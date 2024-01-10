import { PhysicsSystemImpl } from '../../../src/Game/Systems/PhysicsSystemImpl';
import { EcsContainer } from '../../../src/Engine/EcsContainer';
import { Fallable } from '../../../src/Game/Components/Fallable';
import { Placeable } from '../../../src/Game/Components/Placeable';

describe('PhysicsSystemImpl', () => {
  test('gravity applied to Fallable', () => {
    
    let ecs = new EcsContainer();

    let placeable = new Placeable(1, 1);

    let e = ecs.createEntity();
    ecs.addComponent(e, new Fallable(1.0));
    ecs.addComponent(e, placeable);

    let p = new PhysicsSystemImpl(9.8);
    p.SetCurrentTime(1.0);
    p.SetTimeDelta(0.05)
    ecs.addSystem(p);

    ecs.update();

    // Retrieve the new position from the placable, and ensure a gravity effect
    // has been applied to its y component.
    let updatedPos = placeable.getPosition();
    expect(updatedPos[0]).toBe(1);
    expect(updatedPos[1]).toBeLessThan(1);
  });
});