import React, { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroesById } from "../helpers";

export const HeroPage = () => {
  const navigate = useNavigate();
  const { id, ...rest } = useParams();

  let heroe = useMemo(() => getHeroesById(id || ""), [id]);

  if (!heroe) {
    return <Navigate to="Marvel" />;
  }

  const { superhero, publisher, alter_ego, first_appearance, characters } =
    heroe;
  const url = `/heroes/${id}.jpg`;
  const char = characters
    .split(", ")
    .filter((i) => i !== alter_ego)
    .join(", ");

  const goBack = () => navigate(-1);
  return (
    <>
      <h1>{superhero}</h1>
      <hr />
      <div className="row">
        <div className="">
          <div className="row">
            <div className="col-4">
              <img
                src={url}
                alt={superhero}
                className=" img-thumbnail animate__animated animate__fadeInLeft"
              />
            </div>
            <div className="col">
              <h3>{superhero}</h3>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Alter ego:</b>
                  {alter_ego}
                </li>
                <li className="list-group-item">
                  <b>Publisher:</b>
                  {publisher}
                </li>
                <li className="list-group-item">
                  <b>First appearance:</b>
                  {first_appearance}
                </li>
              </ul>
              <h5>Characters:</h5>
              <p>{char}</p>
              <hr />
              <button className="btn btn-primary" onClick={goBack}>
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
