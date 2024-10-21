const promise1 = new Promise((resolve, reject) => {
  if (false) setTimeout(() => resolve("Hello promise-1"), 2000);
  else reject("error");
});

const promise2 = new Promise((resolve, reject) => {
  if (false) setTimeout(() => resolve("Hello promise-1"), 3000);
  else reject("error");
});

const promise3 = new Promise((resolve, reject) => {
  if (false) setTimeout(() => resolve("Hello promise-1"), 3000);
  else reject("error");
});

// promise1.then((res) => console.log(res));
// promise2.then((res) => console.log(res));
// promise3.then((res) => console.log(res));

Promise.all([promise1, promise2, promise3])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
Promise.allSettled([promise1, promise2, promise3])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
Promise.race([promise1, promise2, promise3])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
Promise.any([promise1, promise2, promise3])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
