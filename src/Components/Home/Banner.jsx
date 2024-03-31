import Link from "next/link";
import banner from "../../assets/banner.jpeg";
import Container from "../shared/Container";
const Banner = () => {
  return (
    <div>
      <div
        className="relative h-[40vh] md:h-[65vh] lg:h-[80vh] w-full"
        style={{
          backgroundImage: `url("https://i.ibb.co/WVdtY83/banner.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-white opacity-40"></div>

        <Container>
          <div className="relative">
            <div className="h-72 absolute right-0 w-20  bg-white lg:top-20"></div>
          </div>
        </Container>
      </div>

      <div className="text-center mx-auto my-4 lg:my-6">
        <p>
          Lorem ipsum dolor sit amet consectetur. Posuere laoreet <br /> donec
          nibh quam. Tempus leo accumsan non iaculis. Nunc <br /> ullamcorper
          diam nibh eleifend eu vitae. Felis ipsum vivamus <br /> et egestas
          orci leo.
        </p>

        <div className="space-y-3 flex flex-col mt-3">
          <Link href="/">
            <button className="rounded-md border border-[#2D1843] py-[5px] px-5 tracking-wider">
              Create your own biodata
            </button>
          </Link>
          <Link href="/">
            <button className="rounded-md border border-[#2D1843] py-[5px] px-5 tracking-wider">
              How to create your biodata (Video)
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
