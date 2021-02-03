/* eslint-disable @typescript-eslint/no-explicit-any */
import client from './sanity/api'

const getSkills = (): Promise<Skill[]> => {
  const query = '*[_type == "skill"]'
  const params = {}

  return client.fetch(query, params)
}

export { getSkills }
