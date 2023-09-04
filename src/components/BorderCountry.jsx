import { useNavigate } from "react-router-dom";
import { data } from "../helpers/data";

const BorderCountry = ({ detailCountry }) => {
  const navigate2 = useNavigate();

  const changeCountry = (country) => {
    const getCountry = data.find((i) => i.alpha3Code == country);
    navigate2(`/country/${getCountry.name}`);
  };

  const getName = (country) => {
    const newName = data.find((i) => i.alpha3Code == country);
    return newName.name;
  };

  return (
    <div>
      <h2 className="text-base lg:text-lg font-semibold my-5">
        Border Countries:
      </h2>
      <div className="flex flex-wrap gap-3 mb-10">
        {detailCountry.borders == undefined ? (
          <div>-</div>
        ) : (
          detailCountry.borders.map((border, index) => (
            <div
              onClick={() => changeCountry(border)}
              className="cursor-pointer font-light text-xs sm:text-base bg-white py-2 px-4 sm:py-1 rounded sm:rounded-md shadow-md dark:bg-dark-blue"
              key={index}
            >
              {getName(border)}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BorderCountry;
