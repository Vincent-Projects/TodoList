import store from "redux/store";

// CONSTANTS 
export type AccessLevelType = "FREE" | "PREMIUM" | "BELIEVER";

const FREE: AccessLevelType = "FREE";
const PREMIUM: AccessLevelType = "PREMIUM";
const BELIEVER: AccessLevelType = "BELIEVER";

const CONSTANTS = {
  FREE,
  PREMIUM,
  BELIEVER
};

export default CONSTANTS;

// Utilities

function checkAccess(accessLevel: AccessLevelType) {
  return () => {
    const state = store.getState();
    const currentAccessLevel = state.auth.accessLevel;
    return currentAccessLevel === accessLevel;
  };
}

const hasPremiumPermission = checkAccess(PREMIUM);
const hasBelieverPermission = checkAccess(BELIEVER);

const subscriptionNumberToAccessLevel = (subscriptionNumber: number) => {
  return subscriptionNumber === 2 ? BELIEVER : subscriptionNumber === 1 ? PREMIUM : FREE;
};

export {
  hasPremiumPermission,
  hasBelieverPermission,
  subscriptionNumberToAccessLevel
};