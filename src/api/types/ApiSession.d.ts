import { PostLoginAPI } from '../PostLoginAPI'

export interface ApiSession {
  /**
   * Reject the current transaction, revoke the session, and delete associated refresh tokens.
   * This will prevent the user from completing the flow and no further Actions are executed.
   *
   * Note: This method initiates a session-revoked OIDC Back-Channel Logout Initiator to logout users from all applications
   * bound to the current session. Deletion of session associated refresh tokens is an asynchronous operation.
   * @param reason A human-readable explanation for rejecting the login. This is sent as error_description to the application that initiated the request.
   * @param options Options to control revoke behavior.
   * @param options.preserveRefreshTokens
   * @returns A reference to the api object.
   */
  revoke(
    reason: string,
    options?: {
      preserveRefreshTokens: boolean
    }
  ): PostLoginAPI

  /**
   * Set a new absolute expiration date for a specified session.
   * @param absolute The absolute expiry time in milliseconds since the unix epoch.
   * @returns A reference to the api object.
   */
  setExpiresAt(absolute: number): PostLoginAPI

  /**
   * Set a new inactivity expiration date for a specified session.
   *
   * This method sets the session inactivity timeout for the current interaction.
   * If the method is not reapplied, subsequent successful interactions will override the inactivity timeout using the session inactivity timeout settings.
   * @param idle The inactivity expiry time in milliseconds since the unix epoch.
   * @returns A reference to the api object.
   */
  setIdleExpiresAt(idle: number): PostLoginAPI
}
