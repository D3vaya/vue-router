const isAuthenticatedGuard = async (to, from, next) => {
  console.log({ to, from, next });
  return new Promise(() => {
    const random = Math.random() * 100;
    if (random > 50) {
      console.log("esta autenticado", random);
      next();
    } else {
      console.log("Bloqueado por auth", random);
      next({ name: "pokemon-home" });
    }
  });
};

export default isAuthenticatedGuard;
