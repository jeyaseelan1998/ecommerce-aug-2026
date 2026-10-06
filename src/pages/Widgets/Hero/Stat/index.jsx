import Counter from "../../../../Components/Counter";
import Spacer from "../../../../Components/Spacer";
import Title from "../../../../Components/Title";

import style from "./style.module.css";

// A counted number with a caption underneath, e.g. "200+" / "International Brands".
export default function Stat({ end, suffix = "+", label }) {
  return (
    <div className={style.stat}>
      <Counter end={end} suffix={suffix} />
      <Spacer size={4} />
      <Title tag="p" className={style.label} size="16to12">
        {label}
      </Title>
    </div>
  )
}
