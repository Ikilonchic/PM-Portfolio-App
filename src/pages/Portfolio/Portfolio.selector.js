import { createSelector } from "reselect";

const selector = (id) => createSelector(
  (globalState) => globalState.portfolio,
  (portfolio) => portfolio.all[id],
);

export default selector;
