export interface IProductCategories {
  title: string;
  cube: string;
  floor: string;
  extra?: string;
  icon?: string;
  area: string[];
  key: number;
  keywords?: string;
}

export enum Areas {
  BARN = "Barn",
  HERR = "Herr",
  DAM = "Dam",
}

export interface IRowCells {
  rowName: string;
  cells: string[];
}

export interface IVisitedCells {
  cells: boolean[];
}

export interface IDTours {
  steps: string[];
}

export const MAX_COLUMNS: number = 12;

export const NOT_POSSIBLE_MOVEMENTS: string[] = [
  "A12",
  "E1",
  "E2",
  "E4",
  "G6",
  "G7",
  "I1",
  "J1",
  "K1",
  "K2",
  "K3",
  "I8",
  "K11",
  "K12",
  "J11",
  "J12",
  "I11",
  "I12",
  "H11",
  "H12",
];
export const dTours: IDTours[] = [
  {
    steps: ["D1", "D2", "D3", "E3", "F3", "F2", "F1"],
  },
  {
    steps: ["F6", "F5", "G5", "H5", "H6"],
  },
  {
    steps: ["F7", "F8", "G8", "H8", "H7"],
  },
  {
    steps: ["A11", "B11", "B12"],
  },
  {
    steps: ["J2", "J3", "J4", "K4"],
  },
  {
    steps: ["H1", "H2", "I2", "J2"],
  },
  {
    steps: ["I7", "J7", "J8", "J9", "I9"],
  },
  {
    steps: ["G12", "G11", "G10", "H10", "I10", "J10", "K10"],
  },
];

export const visitedData: IVisitedCells[] = [
  {
    cells: [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ],
  },
  {
    cells: [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ],
  },
  {
    cells: [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ],
  },
  {
    cells: [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ],
  },
  {
    cells: [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ],
  },
  {
    cells: [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ],
  },
  {
    cells: [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ],
  },
  {
    cells: [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ],
  },
  {
    cells: [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ],
  },
  {
    cells: [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ],
  },
  {
    cells: [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ],
  },
  {
    cells: [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ],
  },
];

export const mazeData: IRowCells[] = [
  {
    rowName: "K",
    cells: ["-", "-", "-", "K4", "K5", "K6", "K7", "K8", "K9", "K10", "-", "-"],
  },
  {
    rowName: "J",
    cells: [
      "-",
      "J2",
      "J3",
      "J4",
      "J5",
      "J6",
      "J7",
      "J8",
      "J9",
      "J10",
      "-",
      "-",
    ],
  },
  {
    rowName: "I",
    cells: [
      "-",
      "I2",
      "I3",
      "I4",
      "I5",
      "I6",
      "I7",
      "-",
      "I9",
      "I10",
      "-",
      "-",
    ],
  },
  {
    rowName: "H",
    cells: [
      "H1",
      "H2",
      "H3",
      "H4",
      "H5",
      "H6",
      "H7",
      "H8",
      "H9",
      "H10",
      "-",
      "-",
    ],
  },
  {
    rowName: "G",
    cells: [
      "G1",
      "G2",
      "G3",
      "G4",
      "G5",
      "-",
      "-",
      "G8",
      "G9",
      "G10",
      "G11",
      "G12",
    ],
  },
  {
    rowName: "F",
    cells: [
      "F1",
      "F2",
      "F3",
      "F4",
      "F5",
      "F6",
      "F7",
      "F8",
      "F9",
      "F10",
      "F11",
      "F12",
    ],
  },
  {
    rowName: "E",
    cells: [
      "-",
      "-",
      "E3",
      "-",
      "E5",
      "E6",
      "E7",
      "E8",
      "E9",
      "E10",
      "E11",
      "E12",
    ],
  },
  {
    rowName: "D",
    cells: [
      "D1",
      "D2",
      "D3",
      "D4",
      "D5",
      "D6",
      "D7",
      "D8",
      "D9",
      "D10",
      "D11",
      "D12",
    ],
  },
  {
    rowName: "C",
    cells: [
      "C1",
      "C2",
      "C3",
      "C4",
      "C5",
      "C6",
      "C7",
      "C8",
      "C9",
      "C10",
      "C11",
      "C12",
    ],
  },
  {
    rowName: "B",
    cells: [
      "B1",
      "B2",
      "B3",
      "B4",
      "B5",
      "B6",
      "B7",
      "B8",
      "B9",
      "B10",
      "B11",
      "B12",
    ],
  },
  {
    rowName: "A",
    cells: [
      "A1",
      "A2",
      "A3",
      "A4",
      "A5",
      "A6",
      "A7",
      "A8",
      "A9",
      "A10",
      "A11",
      "-",
    ],
  },
];

export const hintCubes: IProductCategories[] = [
  {
    key: 9,
    title: "Rengöringsmedel",
    cube: "A3",
    floor: "1",
    area: ["Rengöring"],
    keywords: "rengöring, städa, städartiklar, fönsterputs, fönster",
  },
  {
    key: 20,
    title: "Ytterkläder",
    cube: "H1",
    floor: "1",
    area: ["Herrkläder"],
  },
  {
    key: 24,
    title: "Mammakläder",
    cube: "G4",
    floor: "1",
    area: ["Damkläder"],
    keywords:
      "Gravidklänning, amningsklänning, mammakläder, Dam, mammakläder, gravidkläder",
  },
  {
    key: 3800,
    title: "Lego",
    cube: "G11",
    floor: "1",
    area: ["Lek"],
    keywords: "Lego, leksaker, minecraft",
  },
  {
    key: 34,
    title: "Babyartiklar",
    cube: "G12",
    floor: "1",
    area: ["Baby"],
    keywords: "Baby, bebis, barn, mamma",
  },
];

export const TestData: IProductCategories[] = [
  {
    key: 1,
    title: "Kroppsvård och rengöring",
    cube: "C2",
    floor: "1",
    area: [""],
  },
  { key: 2, title: "Hårvård", cube: "C2", floor: "1", area: ["Kroppsvård"] },
  { key: 3, title: "Kroppsvård", cube: "D2", floor: "1", area: ["Kroppsvård"] },
  { key: 4, title: "Munvård", cube: "C3", floor: "1", area: ["Kroppsvård"] },
  {
    key: 5,
    title: "Hygienartiklar",
    cube: "D2",
    floor: "1",
    area: ["Kroppsvård"],
  },
  { key: 601, title: "Städartiklar", cube: "A3", floor: "1", area: [""] },
  { key: 6, title: "Rengöring", cube: "A3", floor: "1", area: [""] },
  { key: 7, title: "Tvättmedel", cube: "A3", floor: "1", area: ["Rengöring"] },
  { key: 8, title: "Diskmedel", cube: "A3", floor: "1", area: ["Rengöring"] },
  {
    key: 9,
    title: "Rengöringsmedel",
    cube: "A3",
    floor: "1",
    area: ["Rengöring"],
    keywords: "rengöring, städa, städartiklar, fönsterputs, fönster",
  },
  { key: 10, title: "Kosmetik", cube: "E2", floor: "1", area: [""] },
  {
    key: 11,
    title: "Doft & Smink",
    cube: "E2",
    floor: "1",
    area: ["Kosmetik"],
  },
  { key: 12, title: "Hudvård", cube: "E2", floor: "1", area: ["Kosmetik"] },
  { key: 13, title: "Hårfärgning", cube: "E2", floor: "1", area: ["Kosmetik"] },
  { key: 14, title: "Hårstyling", cube: "E2", floor: "1", area: ["Kosmetik"] },
  { key: 15, title: "Bijouterier", cube: "E2", floor: "1", area: ["Kosmetik"] },
  {
    key: 16,
    title: "Läs- & solglasögon",
    cube: "E3",
    floor: "1",
    area: ["Kosmetik"],
  },
  { key: 17, title: "Herrkläder", cube: "E2", floor: "1", area: [""] },
  { key: 18, title: "Herrmode", cube: "G1", floor: "1", area: ["Herrkläder"] },
  {
    key: 19,
    title: "Stora Storlekar",
    cube: "H1",
    floor: "1",
    area: ["Herrkläder"],
  },
  {
    key: 20,
    title: "Ytterkläder",
    cube: "H1",
    floor: "1",
    area: ["Herrkläder"],
  },
  {
    key: 21,
    title: "Underkläder",
    cube: "J2",
    floor: "1",
    area: ["Herrkläder"],
  },
  { key: 22, title: "Damkläder", cube: "F3", floor: "1", area: [""] },
  { key: 23, title: "Dammode", cube: "F3", floor: "1", area: ["Damkläder"] },
  {
    key: 24,
    title: "Mammakläder",
    cube: "G4",
    floor: "1",
    area: ["Damkläder"],
    keywords:
      "Gravidklänning, amningsklänning, mammakläder,Dam, mammakläder, gravidkläder",
  },
  {
    key: 25,
    title: "Stora Storlekar",
    cube: "F3",
    floor: "1",
    area: ["Damkläder"],
  },
  {
    key: 26,
    title: "Ytterkläder",
    cube: "F3",
    floor: "1",
    area: ["Damkläder"],
  },
  {
    key: 27,
    title: "Underkläder",
    cube: "F3",
    floor: "1",
    area: ["Damkläder"],
  },
  { key: 28, title: "Väskor", cube: "F7", floor: "1", area: [""] },
  { key: 29, title: "Resväskor", cube: "F7", floor: "1", area: ["Väskor"] },
  { key: 30, title: "Handväskor", cube: "F6", floor: "1", area: ["Väskor"] },
  { key: 31, title: "Plånböcker", cube: "F7", floor: "1", area: ["Väskor"] },
  { key: 32, title: "Neccessärer", cube: "F6", floor: "1", area: ["Väskor"] },
  {
    key: 321,
    title: "Träningsväskor & gymnastikpåse",
    cube: "F6",
    floor: "1",
    area: ["Väskor"],
  },
  {
    key: 33,
    title: "Baby",
    cube: "G12",
    floor: "1",
    area: [""],
    keywords: "Baby, bebis, barn, mamma",
  },
  { key: 34, title: "Babyartiklar", cube: "G12", floor: "1", area: ["Baby"] },
  { key: 35, title: "Babyhygien", cube: "G12", floor: "1", area: ["Baby"] },
  { key: 36, title: "Babysängkläder", cube: "G12", floor: "1", area: ["Baby"] },
  { key: 3700, title: "Lek", cube: "G10", floor: "1", area: [""] },
  { key: 37, title: "Leksaker", cube: "F11", floor: "1", area: ["Lek"] },
  {
    key: 3800,
    title: "Lego",
    cube: "G11",
    floor: "1",
    area: ["Lek"],
  },
  {
    key: 38,
    title: "Spel & Pussel",
    cube: "E12",
    floor: "1",
    area: ["Lek"],
  },
  {
    key: 39,
    title: "Måla & Rita",
    cube: "E12",
    floor: "1",
    area: ["Lek"],
  },
  { key: 40, title: "Media", cube: "I9", floor: "1", area: [""] },
  { key: 41, title: "Film", cube: "G9", floor: "1", area: ["Media"] },
  {
    key: 42,
    title: "Musik & Ljudböcker",
    cube: "H10",
    floor: "1",
    area: ["Media"],
  },
  {
    key: 43,
    title: "TV- & Datorspel",
    cube: "G8",
    floor: "1",
    area: ["Media"],
  },
  { key: 44, title: "Datortillbehör", cube: "G9", floor: "1", area: ["Media"] },
  { key: 4400, title: "LP-skivor", cube: "G8", floor: "1", area: ["Media"] },
  { key: 45, title: "Foto", cube: "H9", floor: "1", area: ["Media"] },
  { key: 46, title: "Böcker", cube: "I10", floor: "1", area: ["Media"] },
  { key: 47, title: "Barnböcker", cube: "H10", floor: "1", area: ["Media"] },
  { key: 48, title: "Hemelektronik", cube: "F8", floor: "1", area: [""] },
  {
    key: 49,
    title: "TV & DVD",
    cube: "H8",
    floor: "1",
    area: ["Hemelektronik"],
  },
  {
    key: 50,
    title: "Stereo & Radio",
    cube: "H8",
    floor: "1",
    area: ["Hemelektronik"],
  },
  {
    key: 51,
    title: "Mobiltillbehör",
    cube: "H9",
    floor: "1",
    area: ["Hemelektronik"],
  },
  {
    key: 52,
    title: "Batterier",
    cube: "H9",
    floor: "1",
    area: ["Hemelektronik"],
  },
  {
    key: 53,
    title: "Hushållsmaskiner",
    cube: "H8",
    floor: "1",
    area: ["Hemelektronik"],
  },
  {
    key: 532,
    title: "Gaming",
    cube: "G9",
    floor: "1",
    area: ["Hemelektronik"],
  },
  {
    key: 54,
    title: "Hår- & Kroppsvård",
    cube: "H9",
    floor: "1",
    area: ["Hemelektronik"],
  },
  { key: 55, title: "Sport", cube: "K3", floor: "1", area: [""] },
  { key: 56, title: "Träningskläder", cube: "K4", floor: "1", area: ["Sport"] },
  { key: 57, title: "Fitness", cube: "K8", floor: "1", area: ["Sport"] },
  { key: 58, title: "Bollsport", cube: "K9", floor: "1", area: ["Sport"] },
  { key: 59, title: "Racketsport", cube: "K9", floor: "1", area: ["Sport"] },
  { key: 60, title: "Golf", cube: "K9", floor: "1", area: ["Sport"] },
  { key: 61, title: "Streetsport", cube: "K9", floor: "1", area: ["Sport"] },
  { key: 62, title: "Cykel", cube: "J9", floor: "1", area: ["Sport"] },
  { key: 63, title: "Vintersport", cube: "J9", floor: "1", area: ["Sport"] },
  { key: 64, title: "Sporttillbehör", cube: "K8", floor: "1", area: ["Sport"] },
  { key: 65, title: "Sportväskor", cube: "K7", floor: "1", area: ["Sport"] },
  { key: 66, title: "Papper & Pennor", cube: "D12", floor: "1", area: [""] },
  {
    key: 67,
    title: "Konstnärsmaterial",
    cube: "D12",
    floor: "1",
    area: ["Pyssel & Kontor"],
  },
  {
    key: 68,
    title: "Presenttillbehör",
    cube: "A1",
    floor: "1",
    area: ["Pyssel & Kontor"],
  },
  {
    key: 69,
    title: "Vykort & Kort",
    cube: "A1",
    floor: "1",
    area: ["Pyssel & Kontor"],
  },
  { key: 70, title: "Gröna rummet", cube: "A8", floor: "1", area: [""] },
  {
    key: 71,
    title: "Blommor & Växter",
    cube: "A9",
    floor: "1",
    area: ["Gröna rummet"],
  },
  {
    key: 72,
    title: "Trädgård",
    cube: "C9",
    floor: "1",
    area: ["Gröna rummet"],
  },
  { key: 73, title: "Krukor", cube: "B9", floor: "1", area: ["Gröna rummet"] },
  {
    key: 74,
    title: "Konstväxter",
    cube: "B9",
    floor: "1",
    area: ["Gröna rummet"],
  },
  { key: 75, title: "Till hemmet", cube: "F8", floor: "1", area: [""] },
  {
    key: 76,
    title: "Inredning",
    cube: "D9",
    floor: "1",
    area: ["Till hemmet"],
  },
  { key: 77, title: "Husgeråd", cube: "F9", floor: "1", area: ["Till hemmet"] },
  {
    key: 78,
    title: "Glas & Porslin",
    cube: "F9",
    floor: "1",
    area: ["Till hemmet"],
  },
  {
    key: 79,
    title: "Ramar & Tavlor",
    cube: "C12",
    floor: "1",
    area: ["Till hemmet"],
  },
  {
    key: 801,
    title: "Anteckning och konstnärstillbehör",
    cube: "D12",
    floor: "1",
    area: ["Till hemmet"],
  },
  {
    key: 802,
    title: "Engångsartiklar",
    cube: "C10",
    floor: "1",
    area: ["Till hemmet"],
  },
  { key: 80, title: "Väggur", cube: "C11", floor: "1", area: ["Till hemmet"] },
  {
    key: 803,
    title: "Servetter",
    cube: "C10",
    floor: "1",
    area: ["Till hemmet"],
  },
  {
    key: 804,
    title: "Förvaring",
    cube: "C10",
    floor: "1",
    area: ["Till hemmet"],
  },
  { key: 81, title: "Ljus", cube: "C10", floor: "1", area: ["Till hemmet"] },
  { key: 82, title: "Belysning", cube: "B10", floor: "1", area: [""] },
  {
    key: 83,
    title: "Inne- & Utebelysning",
    cube: "B10",
    floor: "1",
    area: ["Belysning"],
  },
  {
    key: 84,
    title: "Lampskärmar",
    cube: "B12",
    floor: "1",
    area: ["Belysning"],
  },
  {
    key: 85,
    title: "Elmaterial",
    cube: "B10",
    floor: "1",
    area: ["Belysning"],
  },
  {
    key: 86,
    title: "Ljuskällor",
    cube: "C11",
    floor: "1",
    area: ["Belysning"],
  },
  { key: 87, title: "Hemtextil", cube: "A11", floor: "1", area: [""] },
  {
    key: 88,
    title: "Sängkläder",
    cube: "A11",
    floor: "1",
    area: ["Hemtextil"],
  },
  {
    key: 89,
    title: "Kuddar & Täcken",
    cube: "B11",
    floor: "1",
    area: ["Hemtextil"],
  },
  {
    key: 90,
    title: "Gardiner & Dukar",
    cube: "A9",
    floor: "1",
    area: ["Hemtextil"],
    keywords: "duk, vaxduk, underlägg",
  },
  { key: 91, title: "Handdukar", cube: "B10", floor: "1", area: ["Hemtextil"] },
  { key: 92, title: "Mattor", cube: "B12", floor: "1", area: ["Hemtextil"] },
  {
    key: 93,
    title: "Duschdraperier",
    cube: "A11",
    floor: "1",
    area: ["Hemtextil"],
  },
  { key: 94, title: "Garn", cube: "A11", floor: "1", area: ["Hemtextil"] },
  { key: 95, title: "Livsmedel", cube: "D5", floor: "1", area: [""] },
  {
    key: 96,
    title: "Mejeri & Ost",
    cube: "D5",
    floor: "1",
    area: ["Livsmedel"],
  },
  {
    key: 97,
    title: "Kyl- & Frysvaror",
    cube: "C5",
    floor: "1",
    area: ["Livsmedel"],
  },
  {
    key: 98,
    title: "Kött, Fågel & Fisk",
    cube: "C4",
    floor: "1",
    area: ["Livsmedel"],
  },
  {
    key: 99,
    title: "Frukt, Grönt & Bär",
    cube: "D5",
    floor: "1",
    area: ["Livsmedel"],
  },
  { key: 100, title: "Konserver", cube: "A5", floor: "1", area: ["Livsmedel"] },
  {
    key: 101,
    title: "Charkuterier",
    cube: "C4",
    floor: "1",
    area: ["Livsmedel"],
  },
  {
    key: 102,
    title: "Bröd, Kakor & Kex",
    cube: "C6",
    floor: "1",
    area: ["Livsmedel"],
  },
  {
    key: 103,
    title: "Godis & Snacks",
    cube: "D6",
    floor: "1",
    area: ["Livsmedel"],
  },
  { key: 104, title: "Drycker", cube: "C7", floor: "1", area: ["Livsmedel"] },
  {
    key: 105,
    title: "Sportdrycker",
    cube: "D7",
    floor: "1",
    area: ["Livsmedel"],
  },
  { key: 106, title: "Hälsokost", cube: "D7", floor: "1", area: [""] },
  {
    key: 107,
    title: "Kosttillskott",
    cube: "D7",
    floor: "1",
    area: ["Hälsokost"],
  },
  {
    key: 108,
    title: "Vitaminer & Mineraler",
    cube: "A1",
    floor: "1",
    area: ["Hälsokost"],
  },
  {
    key: 109,
    title: "Viktminskning",
    cube: "A1",
    floor: "1",
    area: ["Hälsokost"],
  },
  {
    key: 110,
    title: "Entré till varuhuset",
    cube: "A1",
    floor: "1",
    area: ["Service"],
    keywords: "entre, ingång",
  },
  {
    key: 111,
    title: "Sportbaren",
    cube: "F6",
    floor: "1",
    area: ["Service"],
    keywords:
      "bar, mat, restaurang, äta, mellanmål, snacks, O'Learys, Pitcher's, pub",
  },
  { key: 112, title: "Macka & Jos", cube: "H2", floor: "1", area: ["Service"] },
  { key: 113, title: "Kundtjänst", cube: "B1", floor: "1", area: ["Service"] },
  {
    key: 1130,
    title: "Kundvagnsparkering",
    cube: "G5",
    floor: "1",
    area: ["Service"],
  },
  {
    key: 1131,
    title: "Kundvagnsparkering",
    cube: "H2",
    floor: "1",
    area: ["Service"],
  },
  {
    key: 1132,
    title: "Provrum Dam",
    cube: "G5",
    floor: "1",
    area: ["Service"],
  },
  {
    key: 1133,
    title: "Provrum Herr",
    cube: "F1",
    floor: "1",
    area: ["Service"],
  },
  { key: 114, title: "Varubyte", cube: "", floor: "1", area: ["Service"] },
  {
    key: 115,
    title: "Toaletter/skötrum",
    cube: "E3",
    floor: "1",
    area: ["Service"],
    keywords: "wc, restroom, bathroom",
  },
  {
    key: 1151,
    title: "Toaletter/skötrum",
    cube: "C1",
    floor: "1",
    area: ["Service"],
    keywords: "wc, restroom, bathroom",
  },
  {
    key: 1153,
    title: "Toaletter/skötrum",
    cube: "J2",
    extra: "Vid J2, Ta rulltrappan ner till källarplan",
    icon: "rulltrappa",
    floor: "0",
    area: ["Service"],
    keywords: "wc, restroom, bathroom",
  },
  {
    key: 1152,
    title: "Toaletter/skötrum",
    cube: "D1",
    floor: "1",
    area: ["Service"],
    keywords: "wc, restroom, bathroom",
  },
  {
    key: 117,
    title: "Mobilservice by PhoneIX",
    cube: "I9",
    floor: "1",
    area: ["Service"],
  },
  {
    key: 1180,
    title: "Hobby och fritid",
    cube: "J2",
    extra: "Vid J2, Ta rulltrappan ner till källarplan",
    icon: "rulltrappa",
    floor: "0",
    area: [""],
  },
  {
    key: 118,
    title: "Friluftsliv",
    cube: "J2",
    extra: "Vid J2, Ta rulltrappan ner till källarplan",
    icon: "rulltrappa",
    floor: "0",
    area: ["Hobby och Fritid"],
  },
  {
    key: 119,
    title: "Funktionskläder",
    cube: "J2",
    extra: "Vid J2, Ta rulltrappan ner till källarplan",
    icon: "rulltrappa",
    floor: "0",
    area: ["Hobby och Fritid"],
  },
  {
    key: 120,
    title: "Jakt & Fiske",
    cube: "J2",
    extra: "Vid J2, Ta rulltrappan ner till källarplan",
    icon: "rulltrappa",
    floor: "0",
    area: ["Hobby och Fritid"],
  },
  {
    key: 121,
    title: "Friluftsartiklar",
    cube: "J2",
    extra: "Vid J2, Ta rulltrappan ner till källarplan",
    icon: "rulltrappa",
    floor: "0",
    area: ["Hobby och Fritid"],
  },
  {
    key: 122,
    title: "Camping & Husvagn",
    cube: "J2",
    extra: "Vid J2, Ta rulltrappan ner till källarplan",
    icon: "rulltrappa",
    floor: "0",
    area: ["Hobby och Fritid"],
  },
  {
    key: 123,
    title: "Verktyg & Bilvård",
    cube: "J2",
    extra: "Vid J2, Ta rulltrappan ner till källarplan",
    floor: "0",
    icon: "rulltrappa",
    area: [""],
    keywords:
      "bilschampo, bilsvamp, avfettning, fälgrengöring, vax, polermedel, glasrengöring, Bilvård, biltillbehör",
  },
  {
    key: 124,
    title: "Arbetskläder",
    cube: "J2",
    extra: "Vid J2, Ta rulltrappan ner till källarplan",
    icon: "rulltrappa",
    floor: "0",
    area: ["Verktyg & Bilvård"],
  },
  {
    key: 125,
    title: "Verktyg",
    cube: "J2",
    extra: "Vid J2, Ta rulltrappan ner till källarplan",
    icon: "rulltrappa",
    floor: "0",
    area: ["Verktyg & Bilvård"],
  },
  {
    key: 126,
    title: "Färg",
    cube: "J2",
    extra: "Vid J2, Ta rulltrappan ner till källarplan",
    icon: "rulltrappa",
    floor: "0",
    area: ["Verktyg & Bilvård"],
  },
  {
    key: 127,
    title: "Elartiklar",
    cube: "J2",
    extra: "Vid J2, Ta rulltrappan ner till källarplan",
    icon: "rulltrappa",
    floor: "0",
    area: ["Verktyg & Bilvård"],
  },
  {
    key: 128,
    title: "Biltillbehör",
    cube: "J2",
    extra: "Vid J2, Ta rulltrappan ner till källarplan",
    icon: "rulltrappa",
    floor: "0",
    area: ["Verktyg & Bilvård"],
  },
  {
    key: 129,
    title: "Hästsport",
    cube: "J2",
    extra: "Vid J2, Ta rulltrappan ner till källarplan",
    icon: "rulltrappa",
    floor: "0",
    area: [""],
  },
  {
    key: 130,
    title: "Ridkläder",
    cube: "J2",
    extra: "Vid J2, Ta rulltrappan ner till källarplan",
    icon: "rulltrappa",
    floor: "0",
    area: ["Hästsport"],
  },
  {
    key: 131,
    title: "Täcken & Schabrak",
    cube: "J2",
    extra: "Vid J2, Ta rulltrappan ner till källarplan",
    icon: "rulltrappa",
    floor: "0",
    area: ["Hästsport"],
  },
  {
    key: 1312,
    title: "Bett & Grimmor",
    cube: "J2",
    extra: "Vid J2, Ta rulltrappan ner till källarplan",
    icon: "rulltrappa",
    floor: "0",
    area: ["Hästsport"],
  },
  {
    key: 1313,
    title: "Säkerhet & Skydd",
    cube: "J2",
    extra: "Vid J2, Ta rulltrappan ner till källarplan",
    icon: "rulltrappa",
    floor: "0",
    area: ["Hästsport"],
  },
  {
    key: 132,
    title: "Husdjur",
    cube: "J2",
    extra: "Vid J2, Ta rulltrappan ner till källarplan",
    icon: "rulltrappa",
    floor: "0",
    area: [""],
  },
  {
    key: 133,
    title: "Djurmat",
    cube: "J2",
    extra: "Vid J2, Ta rulltrappan ner till källarplan",
    icon: "rulltrappa",
    floor: "0",
    area: ["Husdjur"],
  },
  {
    key: 134,
    title: "Djurtillbehör",
    cube: "J2",
    extra: "Vid J2, Ta rulltrappan ner till källarplan",
    icon: "rulltrappa",
    floor: "0",
    area: ["Husdjur"],
  },
  {
    key: 135,
    title: "Vitaminer & Mineraler",
    cube: "J2",
    extra: "Vid J2, Ta rulltrappan ner till källarplan",
    icon: "rulltrappa",
    floor: "0",
    area: ["Husdjur"],
  },
  {
    key: 1360,
    title: "Barnavdelningen",
    cube: "J2",
    floor: "2",
    area: [""],
    extra: "Vid J2, Ta rulltrappan upp till plan 2",
    icon: "rulltrappa",
  },
  {
    key: 136,
    title: "Barnkläder",
    cube: "J2",
    floor: "2",
    area: ["Barnavdelningen"],
    extra: "Vid J2, Ta rulltrappan upp till plan 2",
    icon: "rulltrappa",
  },
  {
    key: 137,
    title: "Barnmode",
    cube: "J2",
    floor: "2",
    area: ["Barnavdelningen"],
    extra: "Vid J2, Ta rulltrappan upp till plan 2",
    icon: "rulltrappa",
  },
  {
    key: 1371,
    title: "Ungdomskläder",
    cube: "J2",
    floor: "2",
    area: ["Barnavdelningen"],
    extra: "Vid J2, Ta rulltrappan upp till plan 2",
    icon: "rulltrappa",
  },
  {
    key: 138,
    title: "Ytterkläder",
    cube: "J2",
    floor: "2",
    area: ["Barnavdelningen"],
    extra: "Vid J2, Ta rulltrappan upp till plan 2",
    icon: "rulltrappa",
  },
  {
    key: 139,
    title: "Underkläder",
    cube: "J2",
    floor: "2",
    area: ["Barnavdelningen"],
    extra: "Vid J2, Ta rulltrappan upp till plan 2",
    icon: "rulltrappa",
  },
  {
    key: 140,
    title: "Utemöbler",
    cube: "F10",
    extra: "Vid F10, ta rulltrappan upp till våning 2",
    icon: "rulltrappa",
    floor: "2",
    area: [""],
  },
  {
    key: 141,
    title: "Grill",
    cube: "F10",
    extra: "Vid F10, ta rulltrappan upp till våning 2",
    icon: "rulltrappa",
    floor: "2",
    area: [""],
  },
  {
    key: 142,
    title: "Husvagnsartiklar",
    cube: "F10",
    extra: "Vid F10, ta rulltrappan upp till våning 2",
    icon: "rulltrappa",
    floor: "2",
    area: [""],
  },
  {
    key: 143,
    title: "Pooltillbehör",
    cube: "F10",
    extra: "Vid F10, ta rulltrappan upp till våning 2",
    icon: "rulltrappa",
    floor: "2",
    area: [""],
  },
  {
    key: 144,
    title: "Strandtillbehör",
    cube: "F10",
    extra: "Vid F10, ta rulltrappan upp till våning 2",
    icon: "rulltrappa",
    floor: "2",
    area: [""],
  },
  {
    key: 148,
    title: "Skor",
    cube: "F10",
    extra: "Vid F10, ta rulltrappan upp till våning 2",
    icon: "rulltrappa",
    floor: "2",
    area: [""],
    keywords: "Skor, damskor, herrskor, barnskor",
  },
  {
    key: 149,
    title: "Damskor",
    cube: "F10",
    extra: "Vid F10, ta rulltrappan upp till våning 2",
    icon: "rulltrappa",
    floor: "2",
    area: ["Skor"],
  },
  {
    key: 1491,
    title: "Herrskor",
    cube: "F10",
    extra: "Vid F10, ta rulltrappan upp till våning 2",
    icon: "rulltrappa",
    floor: "2",
    area: ["Skor"],
  },
  {
    key: 150,
    title: "Barnskor",
    cube: "F10",
    extra: "Vid F10, ta rulltrappan upp till våning 2",
    icon: "rulltrappa",
    floor: "2",
    area: ["Skor"],
  },
  {
    key: 151,
    title: "Skovård",
    cube: "F10",
    extra: "Vid F10, ta rulltrappan upp till våning 2",
    icon: "rulltrappa",
    floor: "2",
    area: ["Skor"],
  },
  {
    key: 152,
    title: "Restaurangen",
    cube: "I10",
    extra: "Vid I10, ta rulltrappan + trappa upp till våning 3",
    icon: "rulltrappa",
    floor: "3",
    area: ["Restaurang och kaffe"],
    keywords: "mat, middag, lunch, lunchmeny",
  },
  {
    key: 1521,
    title: "Kaffebaren",
    cube: "I10",
    extra: "Vid I10, ta rulltrappan + trappa upp till våning 3",
    icon: "rulltrappa",
    floor: "3",
    area: ["Restaurang och kaffe"],
  },
  {
    key: 153,
    title: "Rosa fiket",
    cube: "I10",
    extra: "Vid I10, ta rulltrappan + trappa upp till våning 3",
    icon: "rulltrappa",
    floor: "3",
    area: ["Service"],
  },
  {
    key: 154,
    title: "Toaletter/skötrum",
    cube: "I10",
    extra: "Vid I10, ta rulltrappan + trappa upp till våning 3",
    icon: "rulltrappa",
    floor: "3",
    area: ["Service"],
    keywords: "wc, restroom, bathroom",
  },
  {
    key: 1541,
    title: "Amningsrum",
    cube: "I10",
    extra: "Vid I10, ta rulltrappan + trappa upp till våning 3",
    icon: "rulltrappa",
    floor: "3",
    area: ["Service"],
  },
  {
    key: 1542,
    title: "Frisör",
    cube: "I10",
    extra: "Vid I10, ta rulltrappan + trappa upp till våning 3",
    icon: "rulltrappa",
    floor: "3",
    area: ["Service"],
  },
  {
    key: 1543,
    title: "Toaletter",
    cube: "J2",
    extra: "Vid J2, ta rulltrappan upp på andra våningen",
    icon: "rulltrappa",
    floor: "2",
    area: ["Service"],
    keywords: "wc, restroom, bathroom",
  },
  {
    key: 157,
    title: "Laddskåp (för mobil)",
    cube: "I10",
    extra: "Vid I10, ta rulltrappan + trappa upp till våning 3",
    floor: "3",
    area: ["Service"],
  },

  { key: 158, title: "Tak-kub A1", cube: "A1", floor: "1", area: ["Tak-kub"] },
  { key: 159, title: "Tak-kub A2", cube: "A2", floor: "1", area: ["Tak-kub"] },
  { key: 160, title: "Tak-kub A3", cube: "A3", floor: "1", area: ["Tak-kub"] },
  { key: 161, title: "Tak-kub A4", cube: "A4", floor: "1", area: ["Tak-kub"] },
  { key: 162, title: "Tak-kub A5", cube: "A5", floor: "1", area: ["Tak-kub"] },
  { key: 163, title: "Tak-kub A6", cube: "A6", floor: "1", area: ["Tak-kub"] },
  { key: 164, title: "Tak-kub A7", cube: "A7", floor: "1", area: ["Tak-kub"] },
  { key: 165, title: "Tak-kub A8", cube: "A8", floor: "1", area: ["Tak-kub"] },
  { key: 166, title: "Tak-kub A9", cube: "A9", floor: "1", area: ["Tak-kub"] },
  {
    key: 167,
    title: "Tak-kub A10",
    cube: "A10",
    floor: "1",
    area: ["Tak-kub"],
  },
  {
    key: 168,
    title: "Tak-kub A11",
    cube: "A11",
    floor: "1",
    area: ["Tak-kub"],
  },

  { key: 170, title: "Tak-kub B1", cube: "B1", floor: "1", area: ["Tak-kub"] },
  { key: 171, title: "Tak-kub B2", cube: "B2", floor: "1", area: ["Tak-kub"] },
  { key: 172, title: "Tak-kub B3", cube: "B3", floor: "1", area: ["Tak-kub"] },
  { key: 173, title: "Tak-kub B4", cube: "B4", floor: "1", area: ["Tak-kub"] },
  { key: 174, title: "Tak-kub B5", cube: "B5", floor: "1", area: ["Tak-kub"] },
  { key: 175, title: "Tak-kub B6", cube: "B6", floor: "1", area: ["Tak-kub"] },
  { key: 176, title: "Tak-kub B7", cube: "B7", floor: "1", area: ["Tak-kub"] },
  { key: 177, title: "Tak-kub B8", cube: "B8", floor: "1", area: ["Tak-kub"] },
  { key: 178, title: "Tak-kub B9", cube: "B9", floor: "1", area: ["Tak-kub"] },
  {
    key: 179,
    title: "Tak-kub B10",
    cube: "B10",
    floor: "1",
    area: ["Tak-kub"],
  },
  {
    key: 180,
    title: "Tak-kub B11",
    cube: "B11",
    floor: "1",
    area: ["Tak-kub"],
  },
  {
    key: 181,
    title: "Tak-kub B12",
    cube: "B12",
    floor: "1",
    area: ["Tak-kub"],
  },

  { key: 182, title: "Tak-kub C1", cube: "C1", floor: "1", area: ["Tak-kub"] },
  { key: 183, title: "Tak-kub C2", cube: "C2", floor: "1", area: ["Tak-kub"] },
  { key: 184, title: "Tak-kub C3", cube: "C3", floor: "1", area: ["Tak-kub"] },
  { key: 185, title: "Tak-kub C4", cube: "C4", floor: "1", area: ["Tak-kub"] },
  { key: 186, title: "Tak-kub C5", cube: "C5", floor: "1", area: ["Tak-kub"] },
  { key: 187, title: "Tak-kub C6", cube: "C6", floor: "1", area: ["Tak-kub"] },
  { key: 188, title: "Tak-kub C7", cube: "C7", floor: "1", area: ["Tak-kub"] },
  { key: 189, title: "Tak-kub C8", cube: "C8", floor: "1", area: ["Tak-kub"] },
  { key: 190, title: "Tak-kub C9", cube: "C9", floor: "1", area: ["Tak-kub"] },
  {
    key: 191,
    title: "Tak-kub C10",
    cube: "C10",
    floor: "1",
    area: ["Tak-kub"],
  },
  {
    key: 192,
    title: "Tak-kub C11",
    cube: "C11",
    floor: "1",
    area: ["Tak-kub"],
  },
  {
    key: 193,
    title: "Tak-kub C12",
    cube: "C12",
    floor: "1",
    area: ["Tak-kub"],
  },
  { key: 194, title: "Tak-kub D1", cube: "D1", floor: "1", area: ["Tak-kub"] },
  { key: 195, title: "Tak-kub D2", cube: "D2", floor: "1", area: ["Tak-kub"] },
  { key: 196, title: "Tak-kub D3", cube: "D3", floor: "1", area: ["Tak-kub"] },
  { key: 197, title: "Tak-kub D4", cube: "D4", floor: "1", area: ["Tak-kub"] },
  { key: 198, title: "Tak-kub D5", cube: "D5", floor: "1", area: ["Tak-kub"] },
  { key: 199, title: "Tak-kub D6", cube: "D6", floor: "1", area: ["Tak-kub"] },
  { key: 200, title: "Tak-kub D7", cube: "D7", floor: "1", area: ["Tak-kub"] },
  { key: 201, title: "Tak-kub D8", cube: "D8", floor: "1", area: ["Tak-kub"] },
  { key: 202, title: "Tak-kub D9", cube: "D9", floor: "1", area: ["Tak-kub"] },
  {
    key: 203,
    title: "Tak-kub D10",
    cube: "D10",
    floor: "1",
    area: ["Tak-kub"],
  },
  {
    key: 204,
    title: "Tak-kub D11",
    cube: "D11",
    floor: "1",
    area: ["Tak-kub"],
  },
  {
    key: 205,
    title: "Tak-kub D12",
    cube: "D12",
    floor: "1",
    area: ["Tak-kub"],
  },
  { key: 208, title: "Tak-kub E3", cube: "E3", floor: "1", area: ["Tak-kub"] },
  { key: 210, title: "Tak-kub E5", cube: "E5", floor: "1", area: ["Tak-kub"] },
  { key: 211, title: "Tak-kub E6", cube: "E6", floor: "1", area: ["Tak-kub"] },
  { key: 212, title: "Tak-kub E7", cube: "E7", floor: "1", area: ["Tak-kub"] },
  { key: 213, title: "Tak-kub E8", cube: "E8", floor: "1", area: ["Tak-kub"] },
  { key: 214, title: "Tak-kub E9", cube: "E9", floor: "1", area: ["Tak-kub"] },
  {
    key: 215,
    title: "Tak-kub E10",
    cube: "E10",
    floor: "1",
    area: ["Tak-kub"],
  },
  {
    key: 216,
    title: "Tak-kub E11",
    cube: "E11",
    floor: "1",
    area: ["Tak-kub"],
  },
  {
    key: 217,
    title: "Tak-kub E12",
    cube: "E12",
    floor: "1",
    area: ["Tak-kub"],
  },
  { key: 218, title: "Tak-kub F1", cube: "F1", floor: "1", area: ["Tak-kub"] },
  { key: 219, title: "Tak-kub F2", cube: "F2", floor: "1", area: ["Tak-kub"] },
  { key: 220, title: "Tak-kub F3", cube: "F3", floor: "1", area: ["Tak-kub"] },
  { key: 221, title: "Tak-kub F4", cube: "F4", floor: "1", area: ["Tak-kub"] },
  { key: 222, title: "Tak-kub F5", cube: "F5", floor: "1", area: ["Tak-kub"] },
  { key: 223, title: "Tak-kub F6", cube: "F6", floor: "1", area: ["Tak-kub"] },
  { key: 224, title: "Tak-kub F7", cube: "F7", floor: "1", area: ["Tak-kub"] },
  { key: 225, title: "Tak-kub F8", cube: "F8", floor: "1", area: ["Tak-kub"] },
  { key: 226, title: "Tak-kub F9", cube: "F9", floor: "1", area: ["Tak-kub"] },
  {
    key: 227,
    title: "Tak-kub F10",
    cube: "F10",
    floor: "1",
    area: ["Tak-kub"],
  },
  {
    key: 228,
    title: "Tak-kub F11",
    cube: "F11",
    floor: "1",
    area: ["Tak-kub"],
  },
  {
    key: 229,
    title: "Tak-kub F12",
    cube: "F12",
    floor: "1",
    area: ["Tak-kub"],
  },

  { key: 230, title: "Tak-kub G1", cube: "G1", floor: "1", area: ["Tak-kub"] },
  { key: 231, title: "Tak-kub G2", cube: "G2", floor: "1", area: ["Tak-kub"] },
  { key: 232, title: "Tak-kub G3", cube: "G3", floor: "1", area: ["Tak-kub"] },
  { key: 233, title: "Tak-kub G4", cube: "G4", floor: "1", area: ["Tak-kub"] },
  { key: 234, title: "Tak-kub G5", cube: "G5", floor: "1", area: ["Tak-kub"] },
  { key: 237, title: "Tak-kub G8", cube: "G8", floor: "1", area: ["Tak-kub"] },
  { key: 238, title: "Tak-kub G9", cube: "G9", floor: "1", area: ["Tak-kub"] },
  {
    key: 239,
    title: "Tak-kub G10",
    cube: "G10",
    floor: "1",
    area: ["Tak-kub"],
  },

  { key: 242, title: "Tak-kub H1", cube: "H1", floor: "1", area: ["Tak-kub"] },
  { key: 243, title: "Tak-kub H2", cube: "H2", floor: "1", area: ["Tak-kub"] },
  { key: 244, title: "Tak-kub H3", cube: "H3", floor: "1", area: ["Tak-kub"] },
  { key: 245, title: "Tak-kub H4", cube: "H4", floor: "1", area: ["Tak-kub"] },
  { key: 246, title: "Tak-kub H5", cube: "H5", floor: "1", area: ["Tak-kub"] },
  { key: 247, title: "Tak-kub H6", cube: "H6", floor: "1", area: ["Tak-kub"] },
  { key: 248, title: "Tak-kub H7", cube: "H7", floor: "1", area: ["Tak-kub"] },
  { key: 249, title: "Tak-kub H8", cube: "H8", floor: "1", area: ["Tak-kub"] },
  { key: 250, title: "Tak-kub H9", cube: "H9", floor: "1", area: ["Tak-kub"] },
  {
    key: 251,
    title: "Tak-kub H10",
    cube: "H10",
    floor: "1",
    area: ["Tak-kub"],
  },

  { key: 255, title: "Tak-kub I2", cube: "I2", floor: "1", area: ["Tak-kub"] },
  { key: 256, title: "Tak-kub I3", cube: "I3", floor: "1", area: ["Tak-kub"] },
  { key: 257, title: "Tak-kub I4", cube: "I4", floor: "1", area: ["Tak-kub"] },
  { key: 258, title: "Tak-kub I5", cube: "I5", floor: "1", area: ["Tak-kub"] },
  { key: 259, title: "Tak-kub I6", cube: "I6", floor: "1", area: ["Tak-kub"] },
  { key: 260, title: "Tak-kub I7", cube: "I7", floor: "1", area: ["Tak-kub"] },
  { key: 262, title: "Tak-kub I9", cube: "I9", floor: "1", area: ["Tak-kub"] },
  {
    key: 263,
    title: "Tak-kub I10",
    cube: "I10",
    floor: "1",
    area: ["Tak-kub"],
  },

  { key: 267, title: "Tak-kub J2", cube: "J2", floor: "1", area: ["Tak-kub"] },
  { key: 268, title: "Tak-kub J3", cube: "J3", floor: "1", area: ["Tak-kub"] },
  { key: 269, title: "Tak-kub J4", cube: "J4", floor: "1", area: ["Tak-kub"] },
  { key: 270, title: "Tak-kub J5", cube: "J5", floor: "1", area: ["Tak-kub"] },
  { key: 271, title: "Tak-kub J6", cube: "J6", floor: "1", area: ["Tak-kub"] },
  { key: 272, title: "Tak-kub J7", cube: "J7", floor: "1", area: ["Tak-kub"] },
  { key: 273, title: "Tak-kub J8", cube: "J8", floor: "1", area: ["Tak-kub"] },
  { key: 274, title: "Tak-kub J9", cube: "J9", floor: "1", area: ["Tak-kub"] },
  {
    key: 275,
    title: "Tak-kub J10",
    cube: "J10",
    floor: "1",
    area: ["Tak-kub"],
  },

  { key: 281, title: "Tak-kub K4", cube: "K4", floor: "1", area: ["Tak-kub"] },
  { key: 282, title: "Tak-kub K5", cube: "K5", floor: "1", area: ["Tak-kub"] },
  { key: 283, title: "Tak-kub K6", cube: "K6", floor: "1", area: ["Tak-kub"] },
  { key: 284, title: "Tak-kub K7", cube: "K7", floor: "1", area: ["Tak-kub"] },
  { key: 285, title: "Tak-kub K8", cube: "K8", floor: "1", area: ["Tak-kub"] },
  { key: 286, title: "Tak-kub K9", cube: "K9", floor: "1", area: ["Tak-kub"] },
  {
    key: 287,
    title: "Tak-kub K10",
    cube: "K10",
    floor: "1",
    area: ["Tak-kub"],
  },
];
