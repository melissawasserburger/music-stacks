// these are some values available from /me endpoint
// for a full list, visit: https://developer.spotify.com/documentation/web-api/reference/#/operations/get-current-users-profile

export interface Profile {
    display_name: string,
    email: string,
    href: string,
    id: string,
    uri: string
}