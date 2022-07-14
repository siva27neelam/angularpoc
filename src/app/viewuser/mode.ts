export interface User {
    firstName: string
    lastName: string
    email: string
    region: any
    hobbies: any
    address: Address
  }
  
  export interface Address {
    street: string
    city: string
    state: string
    zipcode: string
  }
  