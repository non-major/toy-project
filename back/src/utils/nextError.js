function nextError(callback) {
  return async (req, res, next) => {
    await callback(req, res, next).catch(next);
  };
}

export default nextError;
