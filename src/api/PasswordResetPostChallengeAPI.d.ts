import { ApiAccess, ApiAuthentication, ApiCache, ApiRedirect } from './types'

export interface PasswordResetPostChallengeAPI {
  /**
   * Modify the user's login access, such as by rejecting the login attempt.
   */
  access: ApiAccess

  /**
   * Request changes to the access token being issued.
   */
  authentication: Pick<ApiAuthentication, 'challengeWith' | 'challengeWithAny'>

  /**
   * Store and retrieve data that persists across executions.
   */
  cache: ApiCache

  redirect: ApiRedirect

  transaction: {
    /**
     * Trigger a browser redirect to the target url after the user resets their password.
     * @param url The URL a user is directed to after updating their password. Ensure this URL is validated and safe for end users.
     * @param options An object representing any additional query string parameters appended to the target URL.
     * @param options.query Additional query string parameters to append to the target URL.
     */
    setResultUrl(
      url: string,
      options?: {
        query: Record<string, string>
      }
    ): void
  }
}
