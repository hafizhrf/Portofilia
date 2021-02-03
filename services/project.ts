/* eslint-disable @typescript-eslint/no-explicit-any */
import client from './sanity/api'

const getProjects = (): Promise<Project[]> => {
  const query = '*[_type == "project"]'
  const params = {}

  return client.fetch(query, params)
}

export { getProjects }
