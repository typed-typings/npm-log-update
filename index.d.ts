/**
 * Log to stdout.
 */
declare function logUpdate (...text: string[]): void;

declare namespace logUpdate {
  /**
   * Clear the logged output.
   */
  export function clear (): void;
  /**
   * Persist the logged output. Useful if you want to start a new log session below the current one.
   */
  export function done (): void;
  /**
   * Log to stderr.
   */
  export function stderr (...text: string[]): void;
  /**
   * Get a `logUpdate` method that logs to the specified stream.
   */
  export function create (stream: any): void;

  export namespace stderr {
    function clear (): void;
    function done (): void;
  }
}

export = logUpdate;
