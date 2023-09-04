import { FiSearch } from "react-icons/fi";
import Card from "../components/Card";
import { data } from "../helpers/data";
import { useState } from "react";

const Home = () => {
  const [countries, setCountries] = useState(data);
  const [findCountry, setFindCountry] = useState({ input: "", select: "" });

  const handleChange = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    setFindCountry({ ...findCountry, [name]: value });
  };

  const filterCountries = countries.filter(
    (country) =>
      findCountry.input == "" ||
      country.name.toLowerCase().includes(findCountry.input.toLowerCase())
  );

  const filterRegion = filterCountries.filter(
    (country) =>
      findCountry.select == "" ||
      country.region.toLowerCase() == findCountry.select
  );

  return (
    <div className="pt-6 m-auto w-[88%] sm:pt-4">
      <form className="flex flex-col mx-auto w-full gap-4 max-w-[1440px] sm:flex-row sm:justify-between sm:items-center dark:text-white">
        <div className="relative">
          <FiSearch className="absolute top-4 left-4" />
          <input
            onChange={handleChange}
            name="input"
            value={findCountry.input}
            className="text-sm border bg-white w-full max-w-sm h-12 pl-11 shadow rounded-lg sm:max-w-none sm:w-96 dark:bg-dark-blue dark:border-none"
            type="text"
            placeholder="Search for a country..."
          />
        </div>
        <select
          onChange={handleChange}
          name="select"
          value={findCountry.select}
          className="text-sm bg-white w-56 h-12 px-4 shadow rounded-lg my-6 dark:bg-dark-blue dark:border-none dark:text-white"
        >
          <option className="" value="">
            Filter by Region
          </option>
          <option className="" value="africa">
            Africa
          </option>
          <option className="" value="americas">
            Americas
          </option>
          <option className="" value="asia">
            Asia
          </option>
          <option className="" value="europe">
            Europe
          </option>
          <option className="" value="oceania">
            Oceania
          </option>
        </select>
      </form>
      <article className="flex flex-wrap mx-auto gap-10 justify-center mt-4 max-w-[1440px] sm:gap-16">
        {filterRegion.map((country, index) => (
          <Card
            key={index}
            name={country.name}
            image={country.flags.svg}
            region={country.region}
            population={country.population}
            capital={country.capital}
          />
        ))}
      </article>
    </div>
  );
};

export default Home;
