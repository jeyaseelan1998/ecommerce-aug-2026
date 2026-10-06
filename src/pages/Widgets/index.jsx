import Hero from "./Hero";
import Brands from "./Brands";

export default function WidgetBuilder({ widgets = null }) {
    return (
        <>
            {
                widgets && widgets.length > 0 && widgets.map((data, idx) => {

                    if (data?.type === 'hero') {
                        return <Hero {...data} key={idx} />
                    }

                    if (data?.type === 'brands') {
                        return <Brands {...data} key={idx} />
                    }

                    return null;
                })
            }
        </>
    )
}
