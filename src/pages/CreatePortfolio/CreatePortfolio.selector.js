import { createSelector } from "reselect";

const selector = createSelector(
  (globalState) => globalState.portfolio,
  (portfolio) => portfolio.all,
);

export default selector;
