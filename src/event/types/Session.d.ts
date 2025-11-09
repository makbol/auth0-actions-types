export interface EventSession {
  /**
   * The date and time when the session was last authenticated.
   *
   * [Enterprise Customers]
   */
  authenticated_at: string | undefined

  /**
   * List of client details for the session.
   *
   * [Enterprise Customers]
   */
  clients:
    | Array<{
        /**
         * ID of client for the session.
         */
        client_id: string
      }>
    | undefined

  /**
   * The date and time when the session was created.
   *
   * [Enterprise Customers]
   */
  created_at: string | undefined

  /**
   * Device metadata
   *
   * [Enterprise Customers]
   */
  device: SessionDevice | undefined

  /**
   * The date and time when the session will expire.
   *
   * [Enterprise Customers]
   */
  expires_at: string | undefined

  /**
   * The ID of the current session.
   */
  id: string

  /**
   * The date and time when the session will expire if idle.
   *
   * [Enterprise Customers]
   */
  idle_expires_at: string | undefined

  /**
   * The date and time when the session was last successfully interacted with.
   *
   * [Private Early Access]
   */
  last_interacted_at: string | undefined

  /**
   * Last interaction time
   *
   * [Enterprise Customers]
   */
  metadata: string | undefined

  /**
   * This object is defined when the session is created from a session transfer token (Native to Web SSO), undefined otherwise.
   *
   * [Private Early Access]
   */
  session_transfer: SessionTransfer | undefined

  /**
   * The date and time when the session was last updated.
   *
   * [Enterprise Customers]
   */
  updated_at: string | undefined

  /**
   * ID of the user which can be used when interacting with other APIs.
   *
   * [Enterprise Customers]
   */
  user_id: string | undefined
}

interface SessionDevice {
  /**
   * First autonomous system number associated with this session.
   */
  initial_asn: string | undefined

  /**
   * First IP address associated with this session.
   */
  initial_ip: string | undefined

  /**
   * First user agent of the device associated with this session.
   */
  initial_user_agent: string | undefined

  /**
   * Last autonomous system number from which this user logged in.
   */
  last_asn: string | undefined

  /**
   * Last IP address from which this user logged in.
   */
  last_ip: string | undefined

  /**
   * Last user agent of the device from which this user logged in.
   */
  last_user_agent: string | undefined
}

interface SessionTransfer {
  /**
   * This object is defined when the refresh token is created from a session initiated as a result of session transfer (Native to Web SSO), undefined otherwise.
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
