export interface EventSecurityContext {
  /**
   * JA3 fingerprint signature. This will be available only if the client is using a TLS connection.
   */
  ja3: string | undefined

  /**
   * JA4 fingerprint signature. This will be available only if the client is using a TLS connection.
   */
  ja4: string | undefined
}
