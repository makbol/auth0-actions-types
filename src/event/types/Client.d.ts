export interface EventClient {
  /**
   * The client id of the application the user is logging in to.
   */
  client_id: string
  /**
   * An object for holding other application properties.
   */
  metadata: {
    [key: string]: string
  }
  /**
   * The name of the application (as defined in the Dashboard).
   */
  name: string

  /**
   * An object for holding refresh token configuration properties.
   */
  refresh_token?: {
    policies: Array<RefreshTokenPolicies>
  }
}

interface RefreshTokenPolicies {
  /**
   * The specific resource server (audience) to which this MRRT policy applies.
   */
  audience?: string

  /**
   * The scopes of access that are authorized for the resource server (audience).
   */
  scope?: Array<string>
}
