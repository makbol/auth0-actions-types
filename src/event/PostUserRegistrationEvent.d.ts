import {
  EventConnection,
  EventRequest,
  EventSecurityContext,
  EventTenant,
  EventTransaction,
  EventUser
} from './types'

export interface PostUserRegistrationEvent {
  /**
   * Details about the Connection that was used to authenticate the user.
   */
  connection: EventConnection

  /**
   * Details about the request that initiated the transaction.
   */
  request: Omit<EventRequest, 'asn' | 'query' | 'body'>

  /**
   * An object containing fingerprint signatures. This will be available only when traffic is handled through the Auth0 Edge (default Auth0-managed proxy layer). It may not be available if requests are routed through a customer-managed reverse proxy. The JA3/JA4 fingerprint can be null or empty in some cases. The most common case is for HTTP requests because JA3 and JA4 are calculated in TLS. It can also be empty due to the Worker sending requests within the same zone or to a zone that is not proxied (or a third party).
   */
  security_context: EventSecurityContext

  /**
   * Details about the Tenant associated with the current transaction.
   */
  tenant: EventTenant

  /**
   * Details about the current transaction.
   */
  transaction?: Omit<
    EventTransaction,
    'id' | 'linking_id' | 'metadata' | 'requested_authorization_details'
  >

  /**
   * An object describing the user on whose behalf the current transaction was initiated.
   */
  user: Omit<EventUser, 'enrolledFactors' | 'identities' | 'multifactor'>

  /**
   * An object containing the secrets set in the Auth0 Management Dashboard.
   */
  secrets: {
    [key: string]: string
  }
}
