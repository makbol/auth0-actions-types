/**
 * Nested object inside custom claim on either the Access Token or the Identity Token.
 */
export type CustomClaimObject = Record<string, string | string[] | Record<string, string> | Record<string, string[]>>;

/**
 * Value of a custom claim on either the Access Token or the Identity Token.
 */
export type CustomClaimValue = string | string[] | Record<string, string> | Record<string, string[]> | CustomClaimObject;
