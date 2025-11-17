import { middleEastRateConfig } from "@/constants/rates";
import { NextResponse } from "next/server";

type CurrencyApiResponse = {
  date: string;
  bdt: Record<string, number>;
};

const API_URL =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/bdt.json";

export async function GET() {
  try {
    const response = await fetch(API_URL, { cache: "no-store" });

    if (!response.ok) {
      throw new Error(`Currency API responded with status ${response.status}`);
    }

    const data = (await response.json()) as CurrencyApiResponse;
    if (!data?.bdt) {
      throw new Error("Currency API did not return rates");
    }

    const computed = middleEastRateConfig.map((config) => {
      const key = config.currency.toLowerCase();
      const currencyPerBdt = data.bdt?.[key];
      const baseRate =
        typeof currencyPerBdt === "number" && currencyPerBdt !== 0
          ? 1 / currencyPerBdt
          : null;

      return {
        country: config.country,
        currency: config.currency,
        baseRate,
        adjustment: config.adjustment,
        companyRate: baseRate ? baseRate + config.adjustment : config.adjustment,
      };
    });

    return NextResponse.json(computed, { status: 200 });
  } catch (error) {
    console.error("Failed to fetch exchange rates", error);
    return NextResponse.json(
      middleEastRateConfig.map((config) => ({
        country: config.country,
        currency: config.currency,
        baseRate: null,
        adjustment: config.adjustment,
        companyRate: config.adjustment,
      })),
      { status: 200 }
    );
  }
}

