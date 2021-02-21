export async function getDistance(fromAddress, toAddress) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Math.floor(Math.random() * 100));
    }, 300);
  });
}
