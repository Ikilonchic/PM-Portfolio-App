import { createSelector } from "reselect";

const selector = createSelector(
  (globalState) => globalState.portfolio,
  (portfolio) => portfolio['new'].school,
);

export default selector;
