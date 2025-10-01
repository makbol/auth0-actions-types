export interface EventSession {
  /**
   * The date and time when the session was last authenticated.
   */
  authenticated_at?: string

  /**
   * List of client details for the session.
   */
  clients?: Array<{
    /**
     * ID of client for the session.
     */
    client_id: string
  }>

  /**
   * The date and time when the session was created.
   */
  created_at?: string

  /**
   * Metadata related to the device used in the session.
   */
  device?: SessionDevice

  /**
   * The date and time when the session will expire.
   */
  expires_at?: string

  /**
   * The ID of the current session.
   */
  id: string

  /**
   * The date and time when the session will expire if idle.
   */
  idle_expires_at?: string

  /**
   * The date and time when the session was last successfully interacted with.
   */
  last_interacted_at?: string

  /**
   * This object is defined when the session is created from a session transfer token (Native to Web SSO), undefined otherwise.
   */
  session_transfer?: SessionTransfer

  /**
   * The date and time when the session was last updated.
   */
  updated_at?: string

  /**
   * ID of the user which can be used when interacting with other APIs.
   */
  user_id?: string
}

interface SessionDevice {
  /**
   * First autonomous system number associated with this session.
   */
  initial_asn?: string

  /**
   * First IP address associated with this session.
   */
  initial_ip?: string

  /**
   * First user agent of the device associated with this session.
   */
  initial_user_agent?: string

  /**
   * Last autonomous system number from which this user logged in.
   */
  last_asn?: string

  /**
   * Last IP address from which this user logged in.
   */
  last_ip?: string

  /**
   * Last user agent of the device from which this user logged in.
   */
  last_user_agent?: string
}

interface SessionTransfer {
  /**
   * This object is defined when the refresh token is created from a session initiated as a result of session transfer (Native to Web SSO), undefined otherwise.
   */
  parent_refresh_token?: {
    /**
     * The ID of the parent refresh token from which this session/refresh token was created as result of a session transfer (Native to Web SSO).
     */
    id?: string
  }
}
