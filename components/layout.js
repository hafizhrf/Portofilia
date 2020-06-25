import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = '[Your Name]'
export const siteTitle = 'H?'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <meta
          name="og:description"
          content="Do you want to know who i am? please don't.."
        />
        <meta name="og:title" content="Hafizh RF" />
      </Head>
      <main>{children}</main>
    </div>
  )
}
