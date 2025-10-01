import { EventRequestGeoip } from './Request'

export interface EventSessionTransferToken {
  /**
   * The client identifier of the application that issued the token.
   */
  client_id: string

  /**
   * Details about the request that issued the token.
   */
  request: SessionTransferTokenRequest

  /**
   * The scopes requested when the token was issued.
   */
  scope: string[]
}

interface SessionTransferTokenRequest {
  /**
   * The Autonomous System Number (ASN) associated with the request that issued the token.
   */
  asn?: string

  geoip?: EventRequestGeoip

  /**
   * The IP address associated with the request that issued the token.
   */
  ip: string

  /**
   * The User-Agent string of the device that issued the token.
   */
  user_agent?: string
}
