import { EventConnection, EventRequest, EventTenant, EventUser } from './types'

export interface PasswordResetPostChangeEvent {
  /**
   * Details about the Connection that was used to authenticate the user.
   */
  connection: EventConnection

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
  user: Pick<
    EventUser,
    | 'email'
    | 'email_verified'
    | 'last_password_reset'
    | 'phone_number'
    | 'phone_verified'
    | 'user_id'
    | 'username'
  >

  /**
   * An object containing the secrets set in the Auth0 Management Dashboard.
   */
  secrets: {
    [key: string]: string
  }
}
