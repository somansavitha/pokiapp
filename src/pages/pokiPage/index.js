import React, { Fragment } from "react";
import Grid from "../../components/grid";
import data from "./../../data.json";
import Thumbnail from "../../components/thumbnail";
import Header from "../../components/header";

const PokiPage = () => {
  const { newPokiImages, pokiImages, newSmallPokies, smallPokies, thumbList } =
    data;
  return (
    <Fragment>
      <Header />
      <Grid
        pokis={newPokiImages}
        thumbImg={newSmallPokies}
        style={{ width: "100em" }}
      />
      <Grid
        pokis={pokiImages}
        thumbImg={smallPokies}
        style={{ width: "147em" }}
      />
      <Thumbnail thumbImg={thumbList} />
    </Fragment>
  );
};

export default PokiPage;
