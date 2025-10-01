export interface ApiValidation {
  /**
   * Define custom error codes and user messaging for denied registration attempts.
   *
   * When a user's attempt to register is denied, the signup flow immediately stops following the completion of the current Action and no further Actions are executed.
   * @param errorCode A custom error code that describes why a registration attempt was denied. This value appears in tenant logs.
   * @param errorMessage A custom error message presented to users when their registrations are deinied.
   */
  error(errorCode: string, errorMessage: string): void
}
