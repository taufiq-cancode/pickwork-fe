import { Helmet } from 'react-helmet-async'

const PageTitle = ({ title }: { title: string }) => {
  const defaultTitle = 'Pickwork'
  return (
    <Helmet>
      <title>{title || defaultTitle}</title>
    </Helmet>
  )
}

export default PageTitle