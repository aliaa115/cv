import React from "react";
import { Link } from "react-router-dom";
import { HeroeItemType } from "../types";

export const HeroeItem = ({ heroe }: HeroeItemType) => {
  const { id, superhero, publisher, alter_ego, first_appearance, characters } =
    heroe;
  const url = `/heroes/${id}.jpg`;
  const char = characters
    .split(", ")
    .filter((i) => i !== alter_ego)
    .join(", ");

  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="row">
          <div className="col-4 ">
            <img src={url} alt={superhero} className="card-img" />
          </div>
          <div className="col">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>
              <p className="">{char}</p>
              <p className="card-text text-muted">
                <small>{first_appearance}</small>
              </p>

              <Link
                to={`/hero/${id}`}
                className="btn btn-primary"
                children="Mas informacion"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
