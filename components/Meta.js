import Head from 'next/head'

const Meta = ({ title, keyword, description }) => (
  <Head>
    <meta
      name="viewport"
      content="minimum-scale=1, initial-scale=1, width=device-width"
    />
    <meta name="keyword" content={keyword} />
    <meta name="description" content={description} />
    <meta charSet="utf-8" />
    <title>{title}</title>
  </Head>
)

Meta.defaultProps = {
  title: 'Next.js - Material UI',
  keyword: 'react, next.js, material ui',
  description: 'Get info your transaction'
}
export default Meta
