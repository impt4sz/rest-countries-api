import { Link } from "react-router-dom";
const Card = (props) => {
  return (
    <Link to={`country/${props.name}`}>
      <section className="bg-white w-[285px] h-[350px] rounded-md  shadow-md cursor-pointer dark:bg-dark-blue dark:text-white">
        <img
          src={props.image}
          className="w-full h-[170px] object-cover rounded-t-md shadow-sm"
          alt=""
        />
        <article className="px-4">
          <h2 className="font-bold mt-6 my-4">{props.name}</h2>
          <div className="my-1 flex gap-x-2 text-sm">
            <p className="font-semibold">Population:</p>
            <span>{props.population.toLocaleString("en-GB")}</span>
          </div>
          <div className="my-1 flex gap-x-2 text-sm">
            <p className="font-semibold">Region:</p>
            <span>{props.region}</span>
          </div>
          <div className="my-1 mb-10 flex gap-x-2 text-sm">
            <p className="font-semibold">Capital:</p>
            <span>{props.capital ? `${props.capital}` : "-"}</span>
          </div>
        </article>
      </section>
    </Link>
  );
};

export default Card;
