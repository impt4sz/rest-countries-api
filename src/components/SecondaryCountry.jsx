const SecondaryCountry = ({ detailCountry }) => {
  return (
    <div>
      <section className="my-4">
        <div className="my-2 flex gap-1">
          <p className="font-semibold">Top Level Domain:</p>
          <span className="font-light ml-1 flex gap-x-1">
            {detailCountry.topLevelDomain == undefined ? (
              <span>-</span>
            ) : (
              detailCountry.topLevelDomain.map((top, index) => (
                <span key={index}>
                  {top}
                  {detailCountry.topLevelDomain.length - 1 == index
                    ? "."
                    : ", "}
                </span>
              ))
            )}
          </span>
        </div>
        <div className="my-2 flex gap-1">
          <p className="font-semibold">Currencies:</p>
          <span className="font-light ml-1 flex flex-wrap gap-x-1">
            {detailCountry.currencies == undefined ? (
              <span>-</span>
            ) : (
              detailCountry.currencies.map((curr, index) => (
                <span key={index}>
                  {curr.name}
                  {detailCountry.currencies.length - 1 == index ? "." : ", "}
                </span>
              ))
            )}
          </span>
        </div>
        <div className="my-2 flex gap-1">
          <p className="font-semibold">Languages:</p>
          <span className="font-light">
            {!detailCountry.languages.length ? (
              <span>-</span>
            ) : (
              detailCountry.languages.map((lang, index) => (
                <span key={index}>
                  {lang.name}
                  {detailCountry.languages.length - 1 == index ? "." : ", "}
                </span>
              ))
            )}
          </span>
        </div>
      </section>
    </div>
  );
};

export default SecondaryCountry;
