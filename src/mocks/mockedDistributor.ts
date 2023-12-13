import {
  DistributorConsumerUnits,
  DistributorPropsTariffs,
} from "../types/distributor";

export const mockedDistributor: Array<DistributorPropsTariffs> = [
  {
    id: 1,
    name: "CEMIG",
    cnpj: "07.523.555/0001-67",
    isActive: true,
    consumerUnits: 1,
    university: 1,
    tariffs: [
      {
        startDate: "",
        endDate: "",
        subgroup: "A4",
        overdue: true,
        distributor: 1,
        blue: {
          peakTusdInReaisPerKw: 0,
          peakTusdInReaisPerMwh: 0,
          peakTeInReaisPerMwh: 0,
          offPeakTusdInReaisPerKw: 0,
          offPeakTusdInReaisPerMwh: 0,
          offPeakTeInReaisPerMwh: 0,
        },
        green: {
          peakTusdInReaisPerMwh: 0,
          peakTeInReaisPerMwh: 0,
          offPeakTusdInReaisPerMwh: 0,
          offPeakTeInReaisPerMwh: 0,
          naTusdInReaisPerKw: 0,
        },
      },
    ],
  },
  {
    id: 2,
    name: "Enel",
    cnpj: "07.523.555/0001-61",
    isActive: true,
    consumerUnits: 0,
    university: 1,
    tariffs: [],
  },
  {
    id: 3,
    name: "Neoenergia",
    cnpj: "07.523.555/0001-62",
    isActive: true,
    consumerUnits: 4,
    university: 1,
    tariffs: [
      {
        startDate: "2022-11-18",
        endDate: "2022-11-18",
        subgroup: "A4",
        distributor: 1,
        overdue: false,
        blue: {
          peakTusdInReaisPerKw: 90.45,
          peakTusdInReaisPerMwh: 100.67,
          peakTeInReaisPerMwh: 22.9,
          offPeakTusdInReaisPerKw: 1.2,
          offPeakTusdInReaisPerMwh: 99.55,
          offPeakTeInReaisPerMwh: 34.97,
        },
        green: {
          peakTusdInReaisPerMwh: 76.65,
          peakTeInReaisPerMwh: 22.88,
          offPeakTusdInReaisPerMwh: 66.22,
          offPeakTeInReaisPerMwh: 44.77,
          naTusdInReaisPerKw: 33.44,
        },
      },
      {
        startDate: "2020-8-18",
        endDate: "2021-9-18",
        subgroup: "A3",
        overdue: true,
        distributor: 1,
        blue: {
          peakTusdInReaisPerKw: 0,
          peakTusdInReaisPerMwh: 0,
          peakTeInReaisPerMwh: 0,
          offPeakTusdInReaisPerKw: 0,
          offPeakTusdInReaisPerMwh: 0,
          offPeakTeInReaisPerMwh: 0,
        },
        green: {
          peakTusdInReaisPerMwh: 0,
          peakTeInReaisPerMwh: 0,
          offPeakTusdInReaisPerMwh: 0,
          offPeakTeInReaisPerMwh: 0,
          naTusdInReaisPerKw: 0,
        },
      },
    ],
  },
  {
    id: 4,
    name: "CEB",
    cnpj: "07.523.555/0001-63",
    isActive: false,
    consumerUnits: 2,
    university: 1,
    tariffs: [],
  },
];

export const mockedDistributorComsumerUnit: Array<DistributorConsumerUnits> = [
  {
    id: 1,
    subgroups: [
      {
        subgroup: "A3",
        consumer_units: [
          {
            name: "Unid Con 1",
            id: 1,
          },
          {
            name: "Unid Con 2",
            id: 2,
          },
        ],
      },
    ],
  },

  {
    id: 2,
    subgroups: [
      {
        subgroup: "A3",
        consumer_units: [
          {
            name: "Unid Con 3",
            id: 1,
          },
          {
            name: "Unid Con 4",
            id: 2,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    subgroups: [
      {
        subgroup: "A4",
        consumer_units: [
          {
            name: "Unid Con 5",
            id: 1,
          },
          {
            name: "Unid Con 6",
            id: 2,
          },
        ],
      },
      {
        subgroup: "A3",
        consumer_units: [
          {
            name: "Unid Con 10",
            id: 1,
          },
          {
            name: "Unid Con 20",
            id: 2,
          },
        ],
      },
    ],
  },
  {
    id: 4,
    subgroups: [
      {
        subgroup: "A3",
        consumer_units: [
          {
            name: "Unid Con 7",
            id: 1,
          },
          {
            name: "Unid Con 8",
            id: 2,
          },
        ],
      },
    ],
  },
];
