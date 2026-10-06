import Meta from '../Components/Meta';
import Fetch from '../Components/Fetch';
import WidgetBuilder from './Widgets';
import Loader from '../Components/Loader';

function Home() {
  return (
    <>
      <Fetch
        url={'/page/home'}
        fetchOnMount
        skeleton={
          <Loader fullScreen />
        }
        render={({ data }) => {
          return (
            <>
              <Meta
                title={data?.page?.metaTitle}
                description={data?.page?.metaDescription}
                keywords={data?.page?.keywords}
                image={data?.page?.ogImage?.url}
              />
              <WidgetBuilder widgets={data?.page?.widgets || []} />
            </>
          )
        }}
      />
    </>
  )
}

export default Home
