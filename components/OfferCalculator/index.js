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

export function composeOfferInformation(id, price, distance) {
  const info = {
    price: "Uppskattat pris: " + price + " kr inkl moms",
    distance: "Totalt avstånd mellan bostäder: " + distance + " km",
    info: {
      period: "Offert gäller i 90 dagar utifrån vårt svar till dig.",
      contact: {
        text: "Vid frågor kontakta ",
        email: "flytt@move-it.se",
        linkText: "flytt@move-it.se",
      },
      offerLink: {
        text: "För att se offerten igen klicka här: ",
        url: "move-it.se/offert/" + id,
        linkText: "move-it.se/offert/" + id,
      },
    },
  };

  return info;
}
