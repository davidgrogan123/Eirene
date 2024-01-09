/**
 * Design by contract pre-condition checks.
 *
 * @remarks
 * TODO: This class is designed as a very quick and simple demonstration of how
 * contract precondition enforcement might work in TypeScript. There are
 * likely much better ways of doing this for real usage. This entire class should be
 * reconsidered.
 *
 */
class Requires {
  /**
   * Check argument predicate result.
   * 
   * @param predicate the predicate that needs evaluation
   * @param argName the name of the argument
   * @param predicateErrorMessage provides additional context about the predicate failure
   */
  public static thatArgument(
    predicate: boolean, 
    argName: string, 
    predicateErrorMessage: string
  ): void {

    if (!predicate) {

      // TODO: Need to retrieve the current call stack for error violation
      let context = "Not Available";

      let msg = `Predicate failed with context ${context} for arg ${argName}. ${predicateErrorMessage}`;

      // log message to the log
      // TODO: Need to use proper logging provider!
      console.log(msg)

      throw new CodeContractViolationError(msg);
    }
  }

  /**
   * Check predicate result.
   * 
   * @param predicate the predicate that needs evaluation
   * @param predicateErrorMessage provides additional context about the predicate failure
   */
  public static that(
    predicate: boolean, 
    predicateErrorMessage: string
  ): void {

    if (!predicate) {

      // TODO: Need to retrieve the current call stack for error violation
      let context = "Not Available";

      let msg = `Predicate failed with context ${context}. ${predicateErrorMessage}`;

      // log message to the log
      // TODO: Need to use proper logging provider!
      console.log(msg)

      throw new CodeContractViolationError(msg);
    }
  }}
