export const isPromise = (value: unknown): value is Promise<unknown> => {
  if (!value) return false;

  if (typeof value !== "object") return false;

  const valuePromise = value as Promise<unknown>;
  if (typeof valuePromise["then"] !== "function") {
    return false;
  }

  return true;
};
