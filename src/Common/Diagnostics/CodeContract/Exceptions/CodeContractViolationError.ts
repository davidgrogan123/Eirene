/**
 * Exception thrown when a code contract is violated.
 * 
 * @remarks
 * This only results from a developer error and an application failure.
 * 
 */
class CodeContractViolationError extends Error {
    constructor(message: string) {
        super(message);
    }
}