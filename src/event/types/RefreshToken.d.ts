export interface EventRefreshToken {
  /**
   * The ID of the client associated with the refresh token.
   */
  client_id: string | undefined

  /**
   * Timestamp of when the refresh token was created.
   */
  created_at: string

  device: RefreshTokenDevice | undefined

  /**
   * Timestamp of when the refresh token will absolutely expire.
   */
  expires_at: string | undefined

  /**
   * The ID of the refresh token.
   */
  id: string

  /**
   * Timestamp of when the refresh token will idle expire.
   */
  idle_expires_at: string | undefined

  /**
   * Timestamp of when the refresh token was last successfully exchanged.
   */
  last_exchanged_at: string | undefined

  resource_servers: Array<RefreshTokenResourceServer> | undefined

  /**
   * Indicates if the refresh token is a rotating refresh token.
   */
  rotating: boolean | undefined

  /**
   * The ID of the session bound to the refresh token.
   */
  session_id: string | undefined

  /**
   * This object is defined when the session is created from a session transfer token (Native to Web SSO), undefined otherwise
   */
  session_transfer:
    | {
        /**
         * This object is defined when the refresh token is created from a session initiated as a result of session transfer (Native to Web SSO)
         */
        parent_refresh_token:
          | {
              /**
               * The ID of the parent refresh token from which this session/refresh token was created as result of a session transfer (Native to Web SSO).
               */
              id: string | undefined
            }
          | undefined
      }
    | undefined

  /**
   * The ID of the user bound to the refresh token.
   */
  user_id: string | undefined
}

/**
 * Device characteristics observed over the lifetime of the refresh token.
 */
interface RefreshTokenDevice {
  /**
   * First autonomous system number associated with this refresh token.
   */
  initial_asn: string | undefined

  /**
   * First IP address associated with this refresh token.
   */
  initial_ip: string | undefined

  /**
   * First user agent of the device associated with this refresh token.
   */
  initial_user_agent: string | undefined

  /**
   * Last autonomous system number from which this refresh token was last exchanged.
   */
  last_asn: string | undefined

  /**
   * Last IP address from which this refresh token was last exchanged.
   */
  last_ip: string | undefined

  /**
   * Last user agent of the device from which this refresh token was last exchanged.
   */
  last_user_agent: string | undefined
}

interface RefreshTokenResourceServer {
  /**
   * The audience of the refresh token.
   */
  audience: string

  /**
   * Scopes of the refresh token. (Represented as a single string as specified.)
   */
  scopes: string
}
