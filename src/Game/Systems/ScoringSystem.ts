/**
 * Keeps track of the game score.
 *
 */
interface ScoringSystem extends System {
  /**
   * The current number of lives the user has left.
   */
  getCurrentLives(): number;
}
