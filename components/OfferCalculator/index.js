import { getDistance } from "../../api/Distance_api";
import { getPrice } from "../../api/MoveIt_api";

export async function offerCalculator(
  addressFrom,
  addressTo,
  volume,
  additionalVolume,
  largeObject
) {
  const distance = await getDistance(addressFrom, addressTo);
  const price = await getPrice(distance, volume, additionalVolume, largeObject);
  return {
    id: "Test" + (1000 + Math.floor(Math.random() * 100)),
    distance: distance,
    price: price.rate,
  };
}
