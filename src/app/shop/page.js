import Container from "@/Components/shared/Container";
import data from "../../Components/data/shop.json";
import redPanjabi from "../../assets/shop/red.png";
import women from "../../assets/shop/women.png";
import Image from "next/image";

const Shop = () => {
  return (
    <div className="py-2 lg:py-5">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 lg:gap-4">
          {/* left side content */}

          <div className=" w-full  col-span-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
            
            {data.map((item, i) => (
              <div className=" " key={i}>
                <Image
                  className="w-full h-[160px] md:h-[185px] lg:h-[200px]"
                  src={item.image}
                  height={70}
                  width={120}
                  alt="product"
                />
                <div className="space-y-2 mt-2 p-2 mb-4 lg:mb-6">
                  <h1 className="font-semibold text-[15px]">{item.name}</h1>
                  <div className="flex items-center gap-2">
                    <p className="text-[14px] text-[#9A236F]">
                      ${item.current}
                    </p>
                    <p className="text-[14px] text-slate-400">${item.old}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* right side content */}
          <div className=" w-full  col-span-1">
            <div>
              <form className="flex mb-5 flex-col gap-y-3">
                <input
                  type="text"
                  className="w-full px-3 placeholder:text-white py-2 bg-purple text-white rounded-md"
                  placeholder="Search here"
                />
                <select
                  className="py-2 outline-none w-full  px-3 text-white rounded-md bg-purple"
                  name="biodata"
                  id="biodata"
                >
                  <option value="">All Categories</option>
                  <option value="">Boy biodata</option>
                  <option value="">girl biodata</option>
                </select>

                <button className="text-purple font-semibold rounded-md border border-borderColor w-full py-[6px]">
                  Recently added items
                </button>
              </form>

              <div className="grid grid-cols-2 gap-2">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(
                  (pt, index) => (
                    <div key={index}>
                      <div className=" ">
                        <Image
                          className="w-full h-[80px] md:h-[115px] lg:h-[120]"
                          src={redPanjabi}
                          height={70}
                          width={120}
                          alt="panjabi"
                        />
                        <div className="space-y-2 mt-1 mb-2 lg:mb-3">
                          <h1 className="font-semibold text-[13px]">
                            HAVIT HV-G92....
                          </h1>
                          <div className="flex items-center gap-2">
                            <p className="text-[14px] text-[#9A236F]">$425</p>
                            <p className="text-[14px] text-slate-400">$650</p>
                          </div>
                        </div>
                      </div>

                      <div className=" ">
                        <Image
                          className="w-full h-[80px] md:h-[115px] lg:h-[120]"
                          src={women}
                          height={70}
                          width={120}
                          alt="panjabi"
                        />
                        <div className="space-y-2 mt-1 mb-2 lg:mb-3">
                          <h1 className="font-semibold text-[13px]">
                            HAVIT HV-G92....
                          </h1>
                          <div className="flex items-center gap-2">
                            <p className="text-[14px] text-[#9A236F]">$425</p>
                            <p className="text-[14px] text-slate-400">$650</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Shop;
