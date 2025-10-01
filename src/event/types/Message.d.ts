/**
 *
An object describing the user on whose behalf the current transaction was initiated.
 */
export interface EventMessage {
  /**
   * The flow that triggered this action
   */
  action: 'enrollment' | 'second-factor-authentication'

  /**
   * One-time password that the user needs to use to enter in the form.
   */
  code: string

  /**
   * Type of message sms/voice
   */
  message_type: 'sms' | 'voice'

  /**
   * Phone number where the message will be sent.
   */
  recipient: string

  /**
   * Content of the message to be sent.
   */
  text: string
}
