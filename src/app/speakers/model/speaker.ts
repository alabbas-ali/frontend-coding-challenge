import { Countries } from './countries'

interface SpeakerName {
    title:
        | 'Mr'
        | 'Mrs'
        | 'Miss'
        | 'Ms'
        | 'Dr'
        | 'Rev'
        | 'Sir'
        | 'Lady'
        | 'Lord'
        | 'Dame'
        | 'Professor'
        | 'Other'
    first: string
    last: string
}

interface Street {
    // eslint-disable-next-line id-blacklist
    number: number
    name: string
}

interface Coordinates {
    latitude: string | number
    longitude: string | number
}

interface Timezone {
    offset: number | string
    description: string
}

interface Location {
    street: Street
    city: string
    state: string
    country: string
    postcode: string | number
    coordinates: Coordinates
    timezone: Timezone
}

interface LoginInfo {
    uuid: string
    username: string
    password: string
    salt: string
    md5: string
    sha1: string
    sha256: string
}

interface DateAge {
    date: string
    age: number
}

interface Id {
    name: string
    value: string
}

interface Picture {
    large: string
    medium: string
    thumbnail: string
}

export interface Speaker {
    gender: 'male' | 'female' | 'other'
    name: SpeakerName
    location: Location
    email: string
    login: LoginInfo
    dob: DateAge
    registered: DateAge
    phone: string
    cell: string
    id: Id
    picture: Picture
    nat: Countries
}

export interface SpeakerPage {
    results: Array<Speaker>
    info: {
        seed: string
        results: number
        page: number
        version: string
    }
}
