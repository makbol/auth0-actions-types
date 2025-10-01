import {
  EventClient,
  EventMessage,
  EventRequest,
  EventSecurityContext,
  EventTenant,
  EventUser
} from './types'

export interface SendPhoneMessageEvent {
  /**
   * Information about the Client with which this login transaction was initiated.
   */
  client: Omit<EventClient, 'refresh_token'>
  /**
   * Details about the message that is sent to the user.
   */
  message_options: EventMessage
  /**
   * Details about the request that initiated the transaction.
   */
  request: Omit<EventRequest, 'asn' | 'body' | 'query'>
  /**
   * Details about the Tenant associated with the current transaction.
   */
  tenant: EventTenant
  /**
   * An object describing the user on whose behalf the current transaction was initiated.
   */
  user: Omit<
    EventUser,
    | 'enrolledFactors'
    | 'family_name'
    | 'given_name'
    | 'last_password_reset'
    | 'nickname'
    | 'phone_number'
    | 'phone_verified'
    | 'username'
  >
  /**
   * An object containing the secrets set in the Auth0 Management Dashboard.
   */
  secrets: {
    [key: string]: string
  }

  // Not documented
  configuration: Record<string, unknown>

  security_context: EventSecurityContext
}
