export const controllerType = Object.freeze({
  empty: 0,
  text: 1,
  radio: 2,
  label: 3,
  submit: 4,
  offerInformation: 5,
});

export const formStructure = [
  {
    head: {
      indicator: 1,
      title: "Kontaktuppgifter",
      previewOnly: false,
    },
    inputs: [
      {
        order: 1,
        id: "firstName",
        title: "Förnamn",
        required: true,
        display: controllerType.text,
      },
      {
        order: 2,
        id: "lastName",
        title: "Efternamn",
        required: true,
        display: controllerType.text,
      },
      {
        order: 3,
        id: "email",
        title: "E-post",
        required: false,
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: "Felaktig epost adress",
        },
        display: controllerType.text,
      },
      {
        order: 4,
        id: "phone",
        title: "Mobilnummer",
        required: true,
        pattern: {
          value: /^((\+|\+\(\d\d\)|)\d+)$/gm,
          message: "Felaktig nummer",
        },
        display: controllerType.text,
      },
    ],
  },
  {
    head: { indicator: 2, title: "Adressuppgifter", previewOnly: false },
    inputs: [
      {
        order: 1,
        id: "adressFrom",
        title: "Från vilken adress skall du flytta?",
        required: true,
        display: controllerType.text,
      },
      {
        order: 2,
        id: "adressto",
        title: "Till vilken adress skall du flytta?",
        required: true,
        display: controllerType.text,
      },
    ],
  },
  {
    head: { indicator: 3, title: "Flyttuppgifter", previewOnly: false },
    inputs: [
      {
        order: 1,
        id: "volume",
        title: "Bostadens yta i kvm",
        required: true,
        pattern: {
          value: /^[0-9]+/i,
          message: "Måste anges som ett tal",
        },
        display: controllerType.text,
      },
      {
        order: 2,
        id: "additionalVolume",
        title: "Eventuell biyta, vind, förråd etc i kvm",
        required: true,
        pattern: {
          value: /^[0-9]+/i,
          message: "Måste anges som ett tal",
        },
        display: controllerType.text,
      },
      {
        order: 3,
        id: "largeObjects",
        title: "Eventuellt skrymmande saker så som piano etc?",
        required: false,
        display: controllerType.text,
      },
      {
        order: 4,
        id: "helpPacking",
        title: "Behövs packhjälp?",
        required: false,
        display: controllerType.radio,
      },
    ],
  },
  {
    head: {
      indicator: 4,
      title: "Prisuppgifter",
      previewOnly: true,
      columns: 1,
    },
    inputs: [
      {
        order: 1,
        id: "offerInformation",
        display: controllerType.offerInformation,
      },
    ],
  },
];
