import { useParams, useNavigate } from "react-router-dom";
import { data } from "../helpers/data";
import { IoMdReturnLeft } from "react-icons/io";
import MainCountry from "../components/MainCountry";
import SecondaryCountry from "../components/SecondaryCountry";
import BorderCountry from "../components/BorderCountry";

const DetailCountry = () => {
  const { nameCountry } = useParams();

  const detailCountry = data.find((country) => country.name == nameCountry);
  const navigate = useNavigate();

  const backHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col justify-center items-center font-nunito-sans dark:text-white">
      <section className="bg-very-light-gray w-[88%] max-w-[1440px] dark:bg-very-dark-blue  ">
        <div className="relative mt-8 ">
          <IoMdReturnLeft className="absolute top-3 left-9" />
          <button
            onClick={backHome}
            className=" bg-white w-32 h-9 pl-7 shadow-lg rounded-lg dark:bg-dark-blue "
          >
            Back
          </button>
        </div>
      </section>
      <section className="w-[88%] max-w-[1440px] sm:flex  sm:flex-col lg:flex-row lg:justify-between lg:mt-10">
        <article className="my-14 lg:my-0 lg:w-[45%]  ">
          <img
            className="rounded shadow-md object-cover
             w-full  max-h-[280px] sm:max-w-md sm:mx-auto lg:max-w-2xl lg:max-h-[360px] "
            src={detailCountry.flags.svg}
            alt=""
          />
        </article>

        <article className="sm:max-w-md sm:mx-auto lg:mx-0 md:flex md:flex-col md:items-start lg:w-[45%] lg:max-w-2xl">
          <h1 className="text-2xl font-bold sm:text-4xl lg:my-5">
            {detailCountry.name}
          </h1>
          <article className="text-sm sm:text-base lg:max-w-2xl lg:flex lg:w-full lg:justify-between ">
            <MainCountry detailCountry={detailCountry} />
            <SecondaryCountry detailCountry={detailCountry} />
          </article>
          <article className="sm:text-lg">
            <BorderCountry detailCountry={detailCountry} />
          </article>
        </article>
      </section>
    </div>
  );
};

export default DetailCountry;
