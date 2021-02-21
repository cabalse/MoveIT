import fetch from "isomorphic-unfetch";

export async function getPrice(distance, volume, atticVolume, piano) {
  const url =
    process.env.PRICE_REQUEST_BASE_URL +
    "/api/Rate?distance=" +
    distance +
    "&ordinaryVolume=" +
    volume +
    "&atticVolume=" +
    atticVolume +
    "&piano=" +
    (piano ? "true" : "false");

  const data = await fetch(url).then((r) => r.json());

  return data;
}
