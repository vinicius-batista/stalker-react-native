import React from 'react'

export interface IPerson {
  firstName: string
  lastName: string
  age: number
  job: string
  birthday: string
  phone: string
  description: string
}

export interface IPersonContext {
  people: IPerson[]
  addPerson: (person: IPerson) => void
}

export default React.createContext<IPersonContext>({
  people: [],
  addPerson: person => person
})
