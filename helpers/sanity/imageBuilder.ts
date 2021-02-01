/* eslint-disable @typescript-eslint/no-explicit-any */
import client from '../../services/sanity/api'
import imageUrlBuilder from '@sanity/image-url'

export default function (source = ''): any {
  const builder = imageUrlBuilder(client)
  return builder.image(source)
}
