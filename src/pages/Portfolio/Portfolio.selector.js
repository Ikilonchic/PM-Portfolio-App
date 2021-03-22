import { createSelector } from "reselect";

const selector = (id) => createSelector(
  (globalState) => globalState.portfolio,
  (portfolio) => portfolio.all.find(elem => elem.id === id),
);

export default selector;
