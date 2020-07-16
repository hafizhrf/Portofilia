import Head from 'next/head'
import styles from './layout.module.css'

export const siteTitle = 'H?'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <meta property="og:title" content="Hafizhrf" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hafizhrf.vercel.app/" />
        <meta property="og:image" content="https://avatars3.githubusercontent.com/u/52806525" />
        <meta property="og:description" content="Do you want to know who i am?" />
        <meta property="og:site_name" content="Hafizh Rifqi Fabian"></meta>
        <meta property="og:updated_time" content="1440432930" />
        <title>{siteTitle}</title>
      </Head>
      <main>{children}</main>
    </div>
  )
}
