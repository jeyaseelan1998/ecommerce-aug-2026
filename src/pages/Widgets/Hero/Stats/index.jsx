import Stat from "../Stat";

import style from "./style.module.css";

export default function Stats({ stats = [] }) {
  return (
    <div className={style.stats}>
      {stats.map((stat) => (
        <Stat end={stat.unit} label={stat.label} key={stat.label} />
      ))}
    </div>
  )
}
