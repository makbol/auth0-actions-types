/**
 * Details about authentication signals obtained during the login flow.
 */
export interface EventAuthentication {
  /**
   * Contains the authentication methods a user has completed during their session.
   */
  methods: Array<AuthenticationMethod>
  /**
   * Details about risk assessments obtained during the login flow.
   */
  riskAssessment: RiskAssessment | undefined
  confidence: ConfidenceLevel
  external: ExternalRiskAssessment | undefined
  supplemental: SupplementalRiskAssessment | undefined
  version: string
}

/**
 * Contains the authentication methods a user has completed during their session.
 */
interface AuthenticationMethod {
  name:
    | 'federated'
    | 'pwd'
    | 'passkey'
    | 'sms'
    | 'email'
    | 'phone_number'
    | 'mock'
    | 'mfa'
  timestamp: string
}

/**
 * Details about risk assessments obtained during the login flow.
 */
interface RiskAssessment {
  assessments: {
    /**
     * Determines if the user is logging in from a location signaling impossible travel.
     */
    ImpossibleTravel: ImpossibleTravelAssessment | undefined
    /**
     * Determines if the user is logging in from a known device.
     */
    NewDevice: NewDeviceAssessment | undefined
    /**
     * Shows if the IP was found in Auth0's repository of low reputation IPs.
     */
    UntrustedIP: UntrustedIPAssessment | undefined
  }
}

/**
 * Determines if the user is logging in from a location signaling impossible travel.
 */
interface ImpossibleTravelAssessment {
  code:
    | 'minimal_travel_from_last_login'
    | 'travel_from_last_login'
    | 'substantial_travel_from_last_login'
    | 'impossible_travel_from_last_login'
    | 'invalid_travel'
    | 'missing_geoip'
    | 'anonymous_proxy'
    | 'unknown_location'
    | 'initial_login'
    | 'location_history_not_found'
    | 'assessment_not_available'
  confidence: ConfidenceLevel
}

/**
 * Determines if the user is logging in from a known device.
 */
interface NewDeviceAssessment {
  code:
    | 'match'
    | 'partial_match'
    | 'no_match'
    | 'initial_login'
    | 'unknown_device'
    | 'no_device_history'
    | 'assessment_not_available'
  confidence: ConfidenceLevel
  details?: {
    device?: 'known' | 'unknown'
    useragent?: 'known' | 'unknown'
  }
}

/**
 * Shows if the IP was found in Auth0's repository of low reputation IPs.
 */
interface UntrustedIPAssessment {
  code:
    | 'not_found_on_deny_list'
    | 'found_on_deny_list'
    | 'invalid_ip_address'
    | 'assessment_not_available'
  confidence: ConfidenceLevel
  details: {
    category: string | undefined
    /**
     * The originating IP address of the request
     */
    ip: string | undefined
    matches: string | undefined
    source: string | undefined
  }
}

interface ExternalRiskAssessment {
  akamai: AkamaiRiskAssessment | undefined
}

interface SupplementalRiskAssessment {
  akamai: AkamaiRiskAssessment | undefined
}

interface AkamaiRiskAssessment {
  /**
   * The bot detection results as forwarded by Akamai Bot Manager.
   */
  akamaiBot?: AkamaiBotResult

  /**
   * The user risk detection results as forwarded by Akamai Account Protector.
   */
  akamaiUserRisk?: AkamaiUserRiskResult
}

interface AkamaiBotResult {
  /**
   * The action of the Akamai bot manager results.
   */
  action?: string
  /**
   * The bot category of the Akamai bot manager results.
   */
  botCategory?: string[]
  /**
   * The bot score of the Akamai bot manager results.
   */
  botScore?: number
  /**
   * The bot score response segment of the Akamai bot manager results.
   */
  botScoreResponseSegment?: string
  /**
   * The botnet ID of the Akamai bot manager results.
   */
  botnetId?: string
  /**
   * The type of the Akamai bot manager results.
   */
  type?: string
}

interface AkamaiUserRiskResult {
  /**
   * The action of the Akamai user risk assessment.
   */
  action?: string
  /**
   * The allowed status of the Akamai user risk assessment.
   */
  allow?: number
  /**
   * The email domain of the user.
   */
  emailDomain?: string
  /**
   * The general risk of the Akamai user risk assessment.
   */
  general?: string
  /**
   * The OUID of the user.
   */
  ouid?: string
  /**
   * The request ID of the user.
   */
  requestid?: string
  /**
   * The risk of the Akamai user risk assessment.
   */
  risk?: string
  /**
   * The score of the Akamai user risk assessment.
   */
  score?: number
  /**
   * The status of the Akamai user risk assessment.
   */
  status?: number
  /**
   * The trust of the Akamai user risk assessment.
   */
  trust?: string
  /**
   * The username of the user.
   */
  username?: string
  /**
   * The UUID of the Akamai user risk assessment.
   */
  uuid?: string
}

type ConfidenceLevel = 'low' | 'medium' | 'high' | 'neutral'
