import React from 'react'

export type Person = {
  firstName: string
  lastName: string
  age: number
  job: string
  birthday: string
  phone: string
  description: string
}

export type PersonContext = {
  people: Person[]
  addPerson: (person: Person) => void
}

export default React.createContext<PersonContext>({
  people: [],
  addPerson: person => person
})
