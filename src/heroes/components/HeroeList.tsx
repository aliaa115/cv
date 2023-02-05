import React, { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers";
import { PagePublisherProps } from "../types";
import { HeroeItem } from "./HeroeItem";

export const HeroeList = ({ publisher }: PagePublisherProps) => {
  const heroes = useMemo(
    () => getHeroesByPublisher(publisher) || [],
    [publisher]
  );
  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {heroes.map((heroe) => (
        <HeroeItem key={heroe.id} heroe={heroe} />
      ))}
    </div>
  );
};
