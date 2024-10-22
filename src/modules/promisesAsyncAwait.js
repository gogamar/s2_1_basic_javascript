export const createPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello, world");
    }, 2000);
  });
};

export const checkInputPromise = (input) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (input === "Hola") {
        resolve("Hola, qué tal?");
      } else {
        reject("Si us plau, escriu: Hola");
      }
    }, 2000);
  });
};

export const fetchHelloWorld = async () => {
  try {
    const result = await createPromise();
    return result;
  } catch (error) {
    return error.message;
  }
};

const promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Ja he acabat la feina. He trigat 2 segons.");
  }, 2000);
});

const promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Ja he acabat la feina. He trigat 3 segons.");
  }, 3000);
});

export const runPromises = () => {
  Promise.all([promise1, promise2])
    .then((results) => {
      console.log("Les dues promeses han acabat:");
      results.forEach((result) => console.log(result));
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
