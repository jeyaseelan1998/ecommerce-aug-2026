import Image from '../Image'
import Title from '../Title'
import Rating from '../Rating'
import Spacer from '../Spacer'
import { discountedPrice, formatPrice } from '../../helpers/price'

import style from './style.module.css'

// Matches the design's 295 x 298 image box.
const IMAGE_RATIO = 295 / 298

// Thumbnail, name, rating and price; a discount shows the old price struck through and a "-20%" badge.
export default function ProductCard({ name, thumbnail, rating = 0, price = 0, discount = 0 }) {
  return (
    <div className={style.card}>
      <div className={style.image}>
        <Image image={thumbnail} alt={name} background aspectRatio={IMAGE_RATIO} />
      </div>
      <Spacer size={16} />
      <Title tag="h3" size={20} weight={700}>
        {name}
      </Title>
      <Spacer size={8} />
      <Rating rating={rating} />
      <Spacer size={8} />
      <div className={style.price}>
        <Title tag="p" size={24} weight={700}>
          {formatPrice(discountedPrice(price, discount))}
        </Title>
        {discount > 0 && (
          <>
            <Title tag="p" size={24} weight={700} className={style.oldPrice}>
              {formatPrice(price)}
            </Title>
            <Title tag="span" size={12} weight={500} className={style.badge}>
              -{discount}%
            </Title>
          </>
        )}
      </div>
    </div>
  )
}
