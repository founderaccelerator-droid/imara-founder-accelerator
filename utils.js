// utils.js
export const checkModuleSchedule = (module) => {
  const now = new Date();
  const start = new Date(module.startTime);
  const end = new Date(module.endTime);
  return now >= start && now <= end;
};
