export interface EventRequest {
  /**
   * The ASN (autonomous system number) of the user-agent making the request.
   */
  asn: string | undefined

  /**
   * Body of the POST request (available in refresh token, Client Credential Exchange, Post Login Action).
   */
  body: Record<string, string>

  geoip: EventRequestGeoip

  /**
   * The hostname that is being used for the authentication flow.
   */
  hostname: string | undefined

  /**
   * The originating IP address of the request.
   */
  ip: string

  /**
   * The language requested by the browser.
   */
  language: string | undefined

  /**
   * The HTTP method used for the request.
   */
  method: string

  /**
   * The query string parameters sent to the authorization request.
   */
  query: Record<string, string>

  /**
   * Value of the User-Agent header.
   */
  user_agent: string
}

export interface EventRequestGeoip {
  cityName: string | undefined
  continentCode: string | undefined
  countryCode: string | undefined
  countryCode3: string | undefined
  countryName: string | undefined
  latitude: string | undefined
  longitude: string | undefined
  subdivisionCode: string | undefined
  subdivisionName: string | undefined
  timeZone: string | undefined
}
