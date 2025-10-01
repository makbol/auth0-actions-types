export interface EventRefreshToken {
  /**
   * The ID of the client associated with the refresh token.
   */
  client_id?: string

  /**
   * Timestamp of when the refresh token was created.
   */
  created_at: string

  device?: RefreshTokenDevice

  /**
   * Timestamp of when the refresh token will absolutely expire.
   */
  expires_at?: string

  /**
   * The ID of the refresh token.
   */
  id: string

  /**
   * Timestamp of when the refresh token will idle expire.
   */
  idle_expires_at?: string

  /**
   * Timestamp of when the refresh token was last successfully exchanged.
   */
  last_exchanged_at?: string

  resource_servers?: Array<RefreshTokenResourceServer>

  /**
   * Indicates if the refresh token is a rotating refresh token.
   */
  rotating?: boolean

  /**
   * The ID of the session bound to the refresh token.
   */
  session_id?: string

  /**
   * This object is defined when the session is created from a session transfer token (Native to Web SSO), undefined otherwise
   */
  session_transfer?: {
    /**
     * This object is defined when the refresh token is created from a session initiated as a result of session transfer (Native to Web SSO)
     */
    parent_refresh_token?: {
      /**
       * The ID of the parent refresh token from which this session/refresh token was created as result of a session transfer (Native to Web SSO).
       */
      id?: string
    }
  }

  /**
   * The ID of the user bound to the refresh token.
   */
  user_id?: string
}

/**
 * Device characteristics observed over the lifetime of the refresh token.
 */
interface RefreshTokenDevice {
  /**
   * First autonomous system number associated with this refresh token.
   */
  initial_asn?: string

  /**
   * First IP address associated with this refresh token.
   */
  initial_ip?: string

  /**
   * First user agent of the device associated with this refresh token.
   */
  initial_user_agent?: string

  /**
   * Last autonomous system number from which this refresh token was last exchanged.
   */
  last_asn?: string

  /**
   * Last IP address from which this refresh token was last exchanged.
   */
  last_ip?: string

  /**
   * Last user agent of the device from which this refresh token was last exchanged.
   */
  last_user_agent?: string
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
