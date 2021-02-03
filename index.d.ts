/* eslint-disable camelcase */

declare interface Project {
  _id: string
  name: string
  description: string
  technologies: string[]
  url: string
  _createdAt: string
  _updatedAt: string
  image?: {
    asset?: {
      _ref?: string
    }
  }
}
declare interface Skill {
  _id: string
  rating: number
  name: string
  _createdAt: string
  _updatedAt: string
}
