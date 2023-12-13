import { TariffFlag } from "@/types/tariffs";

/**
 * Essa solução é **mais** restritiva que usar Map. Só podem ser indexados
 * G ou B.
 */
export const tariffFlags = {
  G: "Verde",
  B: "Azul",
} as const;

/**
 * Em forma de função poderia ficar assim. `getTariffFlagLabel` apenas aceita
 * as strings que são campos de `tariffFlags.`
 */
export const getTariffFlagLabel = (flag: keyof typeof tariffFlags) =>
  tariffFlags[flag]

const tariffFlagMap = new Map([
  ["B", "Azul"],
  ["G", "Verde"],
]);

export const getTariffFlagName = (tariffFlag: TariffFlag) => {
  return tariffFlagMap.get(tariffFlag);
};
