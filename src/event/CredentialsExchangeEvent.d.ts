import {
  EventAccessToken,
  EventClient,
  EventOrganization,
  EventRequest,
  EventResourceServer,
  EventTenant,
  EventTransaction
} from './types'

export interface CredentialsExchangeEvent {
  /**
   * Information about the access token to be issued.
   */
  accessToken: EventAccessToken

  /**
   * Information about the Client with which this login transaction was initiated.
   */
  client: Omit<EventClient, 'refresh_token'>

  /**
   * Details about the Organization associated with the current transaction.
   */
  organization: EventOrganization

  /**
   * Details about the request that initiated the transaction.
   */
  request: Omit<EventRequest, 'asn' | 'query'>

  /**
   * Details about the resource server to which the access is being requested.
   */
  resource_server: EventResourceServer

  /**
   * Details about the Tenant associated with the current transaction.
   */
  tenant: EventTenant

  /**
   * Information about the Credentials Exchange transaction.
   */
  transaction: Pick<EventTransaction, 'requested_scopes'>

  /**
   * An object containing the secrets set in the Auth0 Management Dashboard.
   */
  secrets: {
    [key: string]: string
  }
}
