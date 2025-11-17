export type RateConfig = {
  country: string;
  currency: string;
  adjustment: number;
};

export const middleEastRateConfig: RateConfig[] = [
  {
    country: "সৌদি আরব",
    currency: "SAR",
    adjustment: 2,
  },
  {
    country: "সংযুক্ত আরব আমিরাত",
    currency: "AED",
    adjustment: 2,
  },
  {
    country: "মালয়েশিয়া",
    currency: "MYR",
    adjustment: 2,
  },
  {
    country: "সিঙ্গাপুর",
    currency: "SGD",
    adjustment: 2,
  },
  {
    country: "কাতার",
    currency: "QAR",
    adjustment: 2,
  },
  {
    country: "লিবিয়া",
    currency: "LYD",
    adjustment: 2,
  },
  {
    country: "কুয়েত",
    currency: "KWD",
    adjustment: 20,
  },
  {
    country: "ওমান",
    currency: "OMR",
    adjustment: 12,
  },
];

