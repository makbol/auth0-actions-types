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
   * Modify the session cookie persistence.
   *
   * [Early Access]
   * @param options
   * @param options.persistent The session is stored in a persistent cookie and survives browser restarts, unless manually cleared.
   * @param options.non-persistent The session is stored in memory only and cleared when the browser or application is closed.
   */
  setCookieMode(options: {
    persistent: string
    'non-persistent': string
  }): PostLoginAPI

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

  /**
   * Sets a key-value pair in the metadata object of the current session. Setting the value to null will delete the provided metadata key.
   *
   * [Private Early Access]
   * @param key The key of the metadata property to be set. No special and a maximum of 256 characters.
   * @param value The value of the metadata property. No special and a maximum of 256 characters. Set to null removes the metadata property.
   */
  setMetadata(key: string, value: string): void

  /**
   * [Private Early Access]
   * @param key The key of the metadata property to delete.
   */
  deleteMetadata(key: string): void

  /**
   * Deletes all keys from the metadata object of the current session.
   */
  evictMetdata(): void
}
