import Section from "../../../Components/Section";
import Slider from "../../../Components/Slider";
import Image from "../../../Components/Image";

import style from "./style.module.css";
import Container from "../../../Components/Container";

const MAX_LOGO_HEIGHT = 36;

// Image sizes itself from its width, so give each logo the width that makes it at most 36px tall.
const logoWidth = (image) => {
    if (!image?.width || !image?.height) return MAX_LOGO_HEIGHT;

    const height = Math.min(image.height, MAX_LOGO_HEIGHT);
    return Math.round((height * image.width) / image.height);
};

export default function Brands({ brands = [] }) {
    return (
        <Section background="black">
            <Container>
                <div className={style.wrapper}>
                    <Slider
                        marquee
                        speed={3000}
                        items={brands}
                        spaceBetween={64}
                        slideClassName={style.slide}
                        renderSlide={(brand) => (
                            <div className={style.logo} style={{ width: logoWidth(brand.image) }}>
                                <Image image={brand.image} alt={brand.name} placeholder="spinner" spinnerColor="#fff" />
                            </div>
                        )}
                    />
                </div>
            </Container>
        </Section>
    )
}
