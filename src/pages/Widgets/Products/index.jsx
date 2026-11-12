import Section from "../../../Components/Section";
import Container from "../../../Components/Container";
import Title from "../../../Components/Title";
import Spacer from "../../../Components/Spacer";
import Fetch from "../../../Components/Fetch";
import Skeleton from "../../../Components/Skeleton";
import ProductCard from "../../../Components/ProductCard";

import style from "./style.module.css";

const LIMIT = 4;

// Card-shaped placeholders while the products load.
function ProductsSkeleton() {
  return (
    <>
      <Spacer size={48} />
      <ul className={style.list}>
        {Array.from({ length: LIMIT }, (_, index) => (
          <li key={index} className={style.item}>
            <Skeleton className={style.imageSkeleton} />
            <Spacer size={16} />
            <Skeleton shape="text" width="70%" />
            <Spacer size={8} />
            <Skeleton shape="text" width="40%" />
            <Spacer size={8} />
            <Skeleton shape="text" width="30%" />
          </li>
        ))}
      </ul>
    </>
  )
}

// A titled row of product cards, e.g. "NEW ARRIVALS". `listType` picks the list
// (new_arrivals, top_selling); with no products it still shows the title.
export default function Products({ title, listType }) {
  return (
    <Section>
      <Container>
        <Spacer size={64} />
        {title && (
          <Title font="integralCF" weight={700} size={48} className={style.title}>
            {title}
          </Title>
        )}
        <Fetch
          url="/product"
          params={{ type: listType, limit: LIMIT }}
          toastOnError={false}
          skeleton={<ProductsSkeleton />}
          render={({ data }) => {
            const products = data?.items || [];
            if (!products.length) return null;

            return (
              <>
                {title && <Spacer size={48} />}
                <ul className={style.list}>
                  {products.map((product) => (
                    <li key={product.id} className={style.item}>
                      <ProductCard {...product} />
                    </li>
                  ))}
                </ul>
              </>
            )
          }}
        />
        <Spacer size={64} />
      </Container>
    </Section>
  )
}
