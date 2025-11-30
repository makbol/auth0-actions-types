import {
  EventCustomDomain,
  EventClient,
  EventConnection,
  EventRequest,
  EventSecurityContext,
  EventTenant,
  EventTransaction,
  EventUser
} from './types'

export interface PreUserRegistrationEvent {
  /**
   * Information about the Client with which this login transaction was initiated.
   */
  client: Omit<EventClient, 'refresh_token'> | undefined

  /**
   * Details about the custom domain name information
   *
   * Early access
   */
  custom_domain: EventCustomDomain

  /**
   * Details about the Connection that was used to authenticate the user.
   */
  connection: EventConnection
  /**
   * Details about the request that initiated the transaction.
   */
  request: Omit<EventRequest, 'query' | 'asn'>

  /**
   * An object containing fingerprint signatures. This will be available only when traffic is handled through the Auth0 Edge (default Auth0-managed proxy layer). It may not be available if requests are routed through a customer-managed reverse proxy. The JA3/JA4 fingerprint can be null or empty in some cases. The most common case is for HTTP requests because JA3 and JA4 are calculated in TLS. It can also be empty due to the Worker sending requests within the same zone or to a zone that is not proxied (or a third party).
   */
  security_context: EventSecurityContext | undefined
  /**
   * Details about the Tenant associated with the current transaction.
   */
  tenant: EventTenant
  /**
   * Details about the current transaction.
   */
  transaction: Omit<EventTransaction, 'id'> | undefined

  /**
   * An object describing the user on whose behalf the current transaction was initiated.
   */
  user: Pick<
    EventUser,
    | 'app_metadata'
    | 'email'
    | 'family_name'
    | 'given_name'
    | 'name'
    | 'nickname'
    | 'phone_number'
    | 'picture'
    | 'user_metadata'
    | 'username'
  >
  /**
   * An object containing the secrets set in the Auth0 Management Dashboard.
   */
  secrets: {
    [key: string]: string
  }
}
