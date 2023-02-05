import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { HeroeItem, heroesType } from "..";
import { useForm } from "../../hook";
import { useEffect, useMemo } from "react";
import { getHeroesByName } from "../helpers";

export const SeachPage = () => {
  const navigate = useNavigate();
  const loaction = useLocation();
  let heroes: heroesType[] = [];
  const { q = "" } = queryString.parse(loaction.search);

  let { searchText, formState, onInputChange, onResetForm } = useForm({
    searchText: (typeof q === "string" && q) || "",
  });

  heroes = useMemo(() => getHeroesByName(searchText), [q]);

  const showSearch = q?.length === 0;
  const showError = `${q}`.length > 0 && heroes.length === 0;

  const onSearchSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    navigate(`?q=${searchText.toLocaleLowerCase().trim()}`);
  };

  return (
    <>
      <h1>SeachPage</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              name="searchText"
              value={searchText}
              className="form-control"
              autoComplete="off"
              onChange={onInputChange}
            />

            <hr />
            <button className="btn btn-primary">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Resultado</h4>
          <hr />

          {showSearch && (
            <div className="alert alert-primary animate__animated animate__fadeIn">
              Search a Hero
            </div>
          )}
          {showError && (
            <div className="alert alert-danger animate__animated animate__fadeIn">
              No resoults with <b children={q} />
            </div>
          )}

          {heroes.map((heroe) => (
            <HeroeItem key={heroe.id} heroe={heroe} />
          ))}
        </div>
      </div>
    </>
  );
};
