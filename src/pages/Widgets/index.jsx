import Hero from "./Hero";

export default function WidgetBuilder({ widgets = null }) {
    return (
        <>
            {
                widgets && widgets.length > 0 && widgets.map((data, idx) => {

                    if (data?.type === 'hero') {
                        return <Hero {...data} key={idx} />
                    }

                    return null;
                })
            }
        </>
    )
}
