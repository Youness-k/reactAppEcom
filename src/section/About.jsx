import style from "./About.module.css";
import styleHome from "../section/Home.module.css";

import { brands } from "../data/brands";
import { families } from "../data/families";

export default function About() {
    return (
        <section id="aboutUs" className={style.about}>
            <h2>A propos de nous</h2>
            <p className={style.text}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laborum sunt quasi blanditiis ab aspernatur architecto eveniet,
                exercitationem facilis dolor esse sint omnis amet in voluptates
                sapiente totam? Perferendis, praesentium. Illum, soluta sequi
                dignissimos nesciunt itaque cupiditate quisquam ea voluptas
                expedita delectus earum nulla voluptates! Quos architecto
                voluptatum libero exercitationem delectus.
            </p>

            <h3>Nos Marques</h3>
            <div className={styleHome.grid}>
                {brands.map((b) => (
                    <div className={styleHome.card} key={b.id}>
                        <img src={b.image} alt="" />
                        <h4>{b.name}</h4>
                    </div>
                ))}
            </div>

            <h3>Nos Marques</h3>
            <div className={styleHome.grid}>
                {families.map((b) => (
                    <div className={styleHome.card} key={b.id}>
                        <img src={b.image} alt="" />
                        <h4>{b.name}</h4>
                    </div>
                ))}
            </div>
        </section>
    );
}
