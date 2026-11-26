/**
 * user.ts
 * Type definitions for the JSONPlaceholder /users API response.
 *
 * Key concepts demonstrated:
 *   - interface  : shape of an object
 *   - type alias : reusable primitive or union type
 *   - nested interfaces : Geo, Address, Company inside User
 *   - union type : string | null for optional nullable values
 */

// ── Primitive aliases ─────────────────────────────────────────────────────────

/** A numeric id that the API sends (always a positive integer) */
export type UserId = number

/** Latitude or longitude string from the API (e.g. "-37.3159") */
export type Coordinate = string

// ── Nested interfaces ─────────────────────────────────────────────────────────

export interface Geo {
  lat: Coordinate
  lng: Coordinate
}

export interface Address {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: Geo
}

export interface Company {
  name: string
  catchPhrase: string
  bs: string
}

// ── Main User interface ───────────────────────────────────────────────────────

export interface User {
  id: UserId
  name: string
  username: string
  email: string
  address: Address
  phone: string
  website: string
  company: Company
}

// ── API response alias ────────────────────────────────────────────────────────

/** The /users endpoint returns an array of User objects */
export type UsersResponse = User[]
