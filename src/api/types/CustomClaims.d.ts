/**
 * As defined in Section 2 of RFC 7519 (the JSON Web Token specification):
 * ```
 * The value portion of a claim representation.  A Claim Value can be any JSON value.
 * ```
 * <https://datatracker.ietf.org/doc/html/rfc7519#section-2>
 * 
 * The JavaScript Object Notation (JSON), as defined in RFC 7159, defines a value as one of six types:
 * ```
 * A JSON value MUST be an object, array, number, or string, or one of the following three literal names:
 *       false null true
 * ```
 * <https://datatracker.ietf.org/doc/html/rfc7159#section-3>
 */
type Claim =
  | { [key: string]: Claim } // object
  | Claim[]                  // array
  | number
  | string
  | boolean
  | null
/**
 * Value of a claim on either the Access Token or the Identity Token.
 */
export type CustomClaimValue = Claim;
