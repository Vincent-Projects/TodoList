import store from "redux/store";
import { AccessLevelType, ACCESSLEVEL } from "./constants";

function checkAccess(accessLevel: AccessLevelType) {
  return () => {
    const state = store.getState();
    const currentAccessLevel = state.auth.accessLevel;
    return currentAccessLevel === accessLevel;
  }
}

const hasPremiumPermission = checkAccess(ACCESSLEVEL.PREMIUM);
const hasBelieverPermission = checkAccess(ACCESSLEVEL.BELIEVER);

export {
  hasPremiumPermission,
  hasBelieverPermission
}