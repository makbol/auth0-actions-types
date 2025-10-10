/**
 * String value of a custom claim on either the Access Token or the Identity Token.
 */
export type CustomClaimString = string;

/**
 * Nested object inside custom claim on either the Access Token or the Identity Token.
 */
export type CustomClaimObject = Record<string, CustomClaimString | CustomClaimString[] | Record<string, CustomClaimString>>;

/**
 * Value of a custom claim on either the Access Token or the Identity Token.
 */
export type CustomClaimValue = CustomClaimString | CustomClaimObject;
