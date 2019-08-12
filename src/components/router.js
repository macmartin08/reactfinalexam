import React from "react";
import { Route, Switch } from "react-router-dom";


import Home from "./pages/home";
import PetIndex from "./pets/index";
import PetNew from "./pets/new";
import PetShow from "./pets/show";
import PetEdit from "./pets/edit";
import PetDestroy from "./pets/destroy";



function router() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/pets" component={PetIndex} />
      <Route exact path="/pets/new" component={PetNew} />
      <Route exact path="/pets/:id/" component={PetShow} />
      <Route exact path="/pets/:id/edit" component={PetEdit} />
      <Route exact path="/pets/:id/destroy" component={PetDestroy} />
    
	</Switch>
  );
}


export default router;