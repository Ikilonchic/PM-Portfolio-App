import { createSelector } from "reselect";

const selector = createSelector(
  (globalState) => globalState.portfolio,
  (portfolio) => portfolio['new'].contacts,
);

export default selector;
