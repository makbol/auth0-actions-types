export interface EventRequest {
  /**
   * The ASN (autonomous system number) of the user-agent making the request.
   */
  asn: string

  /**
   * The body of the POST request. This data will only be available during refresh token and Client Credential Exchange flows.
   */
  body: Record<string, string>

  geoip: EventRequestGeoip
  /**
   * The hostname that is being used for the authentication flow.
   */
  hostname?: string
  /**
   * The originating IP address of the request.
   */
  ip: string
  /**
   * The language requested by the browser.
   */
  language?: string
  /**
   * The HTTP method used for the request.
   */
  method: string
  /**
   * The query string parameters sent to the authorization request.
   */
  query: Record<string, string>
  /**
   * The value of the User-Agent header received when initiating the transaction.
   */
  user_agent: string
}

export interface EventRequestGeoip {
  cityName?: string
  continentCode?: string
  countryCode?: string
  countryCode3?: string
  countryName?: string
  latitude?: string
  longitude?: string
  subdivisionCode?: string
  subdivisionName?: string
  timeZone?: string
}
