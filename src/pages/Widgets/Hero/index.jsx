import Container from "../../../Components/Container";
import Image from "../../../Components/Image";
import Title from "../../../Components/Title";
import Button from "../../../Components/Button";
import Stats from "./Stats";
import Spacer from "../../../Components/Spacer";
import Section from "../../../Components/Section";

import style from "./style.module.css";

export default function Hero({ title, text, image = null, stats = null }) {
  return (
    <Section background="grey">
      <Container>
        <div className={style.wrapper}>
          <div className={style.left}>
            <Spacer size={100} />
            <Title font="integralCF" weight={600} size={64}>
              {title}
            </Title>
            <Spacer size={32} />
            <Title>
              {text}
            </Title>
            <Spacer size={32} />
            <Button className={style.button}>
              Shop Now
            </Button>
            {
              stats && (
                <>
                  <Spacer size={48} />
                  <Stats stats={stats} />
                </>
              )
            }
            <Spacer size={100} />
          </div>
          <div className={style.right}>
            <Image image={image} background className={style.image} />
          </div>
        </div>
      </Container>
    </Section>
  )
}