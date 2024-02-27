import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div
        className="hero min-h-screen "
        style={{ backgroundImage: 'url("/img/6271651.jpg")' }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              LOVE LIFE <br /> LOVE TYESO
            </h1>
            <p
              className="mb-5 "
              style={{ fontSize: "15px", textTransform: "uppercase" }}
            >
              Our main product are stainless steel vacuum mug, Travelling pot,
              Coffee pot and wated bottle.
            </p>
            <a href="/auth/product" className="btn btn-base-content" >Get Started</a>
          </div>
        </div>
      </div>

      <h1
        className="m-20 text-5xl font-bold"
        style={{ fontSize: "100px", textTransform: "uppercase" }}
      >
        About us
      </h1>
      <p className="m-20" style={{ fontSize: "17px" }}>
        WUYI TACHISO DRINKWARE CORPORATION was established in 2007, specialized
        in manufacturing various stainless steel drinkware. Our main products
        are stainless Steel vacuum mug, travelling pot, Coffee pot and water
        bottle. Now company have more than 500 workers, Occupied 38000㎡
        production area, we hit 35000-45000 PCS products per day. With our
        completeded equipments especially as injection, Automatically spraying
        line.
        <br /> Advanced printing machine, strong and professional technology
        team, we can supply stable and excellent quality. With our talented
        graphic artists and strong R&D team, We develop new designs every year.
        We also accept OEM project, and work with some world famous brand.
        <br />
        <br />
        Our company will constantly aim to be the most professional supplier and
        manufacture of stainless steel vacuum bottles. We welcome the customer
        all over the world to visit Our company and establish long Term business
        relationship!
      </p>
    </div>
  );
}
