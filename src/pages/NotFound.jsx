import Meta from '../Components/Meta'
import Section from '../Components/Section'
import Container from '../Components/Container'
import Title from '../Components/Title'
import Image from '../Components/Image'
import Button from '../Components/Button'
import Spacer from '../Components/Spacer'

import notFoundImage from '../assets/images/404.svg'

import style from './NotFound.module.css'

const IMAGE = { url: notFoundImage, width: 480, height: 480 }

function NotFound() {
  return (
    <>
      <Meta title="Page not found" description="The page you are looking for doesn't exist." />
      <Section background="grey" className={style.section}>
        <Container className={style.container}>
          <div className={style.image}>
            <Image image={IMAGE} alt="A sad empty shopping cart" />
          </div>
          <Spacer size={32} />
          <Title tag="h1" size={64} weight={900}>
            404
          </Title>
          <Spacer size={16} />
          <Title tag="h2" size={24} weight={900}>
            Oops! This page is empty
          </Title>
          <Spacer size={16} />
          <Title tag="p" size={16} className={style.text}>
            {"The page you're looking for was moved, removed or never existed.\nLet's get you back to shopping."}
          </Title>
          <Spacer size={32} />
          <Button to="/" size="large">Back to home</Button>
        </Container>
      </Section>
    </>
  )
}

export default NotFound
