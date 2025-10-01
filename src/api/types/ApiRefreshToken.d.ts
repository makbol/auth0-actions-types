import { PostLoginAPI } from '../PostLoginAPI'

/**
 * Manage refresh tokens, such as by revoking a refresh token.
 */
export interface ApiRefreshToken {
  /**
   * Reject the current token exchange and revoke the refresh token.
   * This will prevent the user from completing the flow and no further Actions are executed.
   * @param reason A human-readable explanation for rejecting the refresh token. This is sent as error_description to the application that initiated the request.
   * @returns A reference to the api object.
   */
  revoke(reason: string): PostLoginAPI

  /**
   * Set a new absolute expiration date for a specified refresh token.
   * @param absolute The absolute expiry time in milliseconds since the unix epoch.
   * @returns A reference to the api object.
   */
  setExpiresAt(absolute: number): PostLoginAPI

  /**
   * Set a new inactivity expiration date for a specified refresh token.
   *
   * This method sets the refresh token inactivity timeout for the current interaction.
   * If the method is not reapplied, subsequent successful interactions will override the inactivity timeout using the refresh token inactivity timeout settings.
   * @param idle The inactivity expiry time in milliseconds since the unix epoch.
   * @returns A reference to the api object.
   */
  setIdleExpiresAt(idle: number): PostLoginAPI
}
