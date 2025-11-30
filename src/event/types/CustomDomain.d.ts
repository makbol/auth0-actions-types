export interface EventCustomDomain {
  /**
   * The custom domain where the authentication event occurred.
   */
  domain: string

  /**
   * Metadata associated with the custom domain.
   */
  domain_metadata: Record<string, string>
}
