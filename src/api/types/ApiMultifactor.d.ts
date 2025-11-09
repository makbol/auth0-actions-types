import { PostLoginAPI } from '../PostLoginAPI'

/**
 * Set the requirement for multifactor authentication on the login attempt.
 */
export interface ApiMultifactor {
  /**
   * Enable multifactor authentication for this login flow. When enabled, users must complete the configured multifactor challenge. The actual multifactor challenge will be deferred to the end of the login flow.
   * @param provider The name of the multifactor provider to use or the value any to use any of the configured providers.
   * @param options Additional options for enabling multifactor challenges.
   * @param options.allowRememberBrowser Determines if browser should be remembered, so that the multifactor challenge can later be skipped. Defaults to false.
   * @param options.providerOptions Additional options to configure the challenge, only available for the duo provider.
   * @param options.providerOptions.host This is the API hostname value from your Duo account.
   * @param options.providerOptions.ikey This is the Client ID (previously Integration key) value from your Duo account.
   * @param options.providerOptions.skey This is the Client secret (previously Secret key) value from your Duo account.
   * @param options.providerOptions.username Use some attribute of the profile as the username in DuoSecurity. This is also useful if you already have your users enrolled in Duo.
   * @returns Returns a reference to the api object.
   */
  enable(
    provider: 'any' | 'duo' | 'google-authenticator' | 'guardian' | 'none',
    options: {
      allowRememberBrowser?: boolean
      providerOptions?: {
        host: string
        ikey: string
        skey: string
        username?: string
      }
    }
  ): PostLoginAPI
}
