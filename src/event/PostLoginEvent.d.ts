import {
  EventAuthentication,
  EventAuthorization,
  EventClient,
  EventConnection,
  EventCustomDomain,
  EventOrganization,
  EventRequest,
  EventResourceServer,
  EventStats,
  EventTenant,
  EventTransaction,
  EventUser,
  EventRefreshToken,
  EventSecurityContext,
  EventPrompt,
  EventSession,
  EventSessionTransferToken
} from './types'

export interface PostLoginEvent {
  /**
   * Details about authentication signals obtained during the login flow.
   */
  authentication?: EventAuthentication

  /**
   * An object containing information describing the authorization granted to the user who is logging in.
   */
  authorization?: EventAuthorization

  /**
   * Information about the Client with which this login transaction was initiated.
   */
  client: EventClient

  /**
   * Details about the Connection that was used to authenticate the user.
   */
  connection: EventConnection

  /**
   * Details about the custom domain name information
   *
   * Early access
   */
  custom_domain: EventCustomDomain

  /**
   * Details about the Organization associated with the current transaction.
   */
  organization: EventOrganization | undefined

  /**
   * Collected data from rendered custom prompts.
   */
  prompt: EventPrompt | undefined

  /**
   * The current refresh token. Enterprise customers only.
   */
  refresh_token: EventRefreshToken | undefined

  /**
   * Details about the request that initiated the transaction.
   */
  request: EventRequest

  /**
   * Details about the resource server to which the access is being requested.
   */
  resource_server: EventResourceServer | undefined

  /**
   * An object containing fingerprint signatures. This will be available only when traffic is handled through the Auth0 Edge (default Auth0-managed proxy layer). It may not be available if requests are routed through a customer-managed reverse proxy. The JA3/JA4 fingerprint can be null or empty in some cases. The most common case is for HTTP requests because JA3 and JA4 are calculated in TLS. It can also be empty due to the Worker sending requests within the same zone or to a zone that is not proxied (or a third party).
   */
  security_context: EventSecurityContext | undefined

  /**
   * The current login session.
   */
  session: EventSession | undefined

  /**
   * Details of the current session transfer token being used to establish Single Sign-On (SSO) from a native application to a web application.
   *
   * [Private Early Access]
   */
  session_transfer_token: EventSessionTransferToken | undefined

  /**
   * Login statistics for the current user.
   */
  stats: EventStats

  /**
   * Details about the Tenant associated with the current transaction.
   */
  tenant: EventTenant

  /**
   * Details about the current transaction.
   */
  transaction: EventTransaction | undefined

  /**
   * An object describing the user on whose behalf the current transaction was initiated.
   */
  user: EventUser

  /**
   * An object containing the secrets set in the Auth0 Management Dashboard.
   */
  secrets: {
    [key: string]: string
  }
}
