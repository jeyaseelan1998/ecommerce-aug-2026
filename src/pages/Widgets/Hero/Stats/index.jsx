import Stat from "../Stat";

import style from "./style.module.css";

export default function Stats({ stats = [] }) {
  return (
    <div className={style.stats}>
      {stats.map((stat, index) => (
        <Stat end={stat.unit} label={stat.label} key={stat.id ?? stat._id ?? index} />
      ))}
    </div>
  )
}
