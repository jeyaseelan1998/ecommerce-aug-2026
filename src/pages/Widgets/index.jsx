import Hero from "./Hero";
import Brands from "./Brands";
import Products from "./Products";

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

                    if (data?.type === 'products') {
                        return <Products {...data} key={idx} />
                    }

                    return null;
                })
            }
        </>
    )
}
