import {
  EventAuthentication,
  EventAuthorization,
  EventCustomDomain,
  EventClient,
  EventConnection,
  EventOrganization,
  EventRequest,
  EventStats,
  EventTenant,
  EventTransaction,
  EventUser
} from './types'

export interface PasswordResetPostChallengeEvent {
  /**
   * Details about authentication signals obtained during the login flow.
   */
  authentication: Pick<EventAuthentication, 'methods'>

  /**
   * An object containing information describing the authorization granted to the user who is logging in.
   */
  authorization: EventAuthorization

  /**
   * Information about the Client with which this login transaction was initiated.
   */
  client: Omit<EventClient, 'refresh_token'>

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
   * Details about the request that initiated the transaction.
   */
  request: Omit<EventRequest, 'asn'>

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
  transaction: Pick<
    EventTransaction,
    'locale' | 'login_hint' | 'state' | 'ui_locales'
  >

  /**
   * An object describing the user on whose behalf the current transaction was initiated.
   */
  user: Omit<EventUser, 'multifactor'>

  /**
   * An object containing the secrets set in the Auth0 Management Dashboard.
   */
  secrets: {
    [key: string]: string
  }
}
