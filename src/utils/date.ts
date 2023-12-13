import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";

export const monthYearForPlot = (date: string) => {
  const formatted = format(parseISO(date), "MMMM'-'yyyy", { locale: ptBR });
  const [month, year] = formatted.split("-");
  // MMM retorna o nome do mês com todas as letras em minúsculo. Capitalize
  // a 1ª letra:
  const monthFirstLetter = month[0].toUpperCase();
  return [monthFirstLetter + month.slice(1, 3), year];
};


export const monthYear = (date: string) => {
  const d = parseISO(date);
  const shortMonth = d.toLocaleString("pt-br", { month: "short" });
  const month =
    shortMonth[0].toUpperCase() + shortMonth.slice(1).replace(".", "");
  const year = d.toLocaleString("pt-br", { year: "numeric" });
  return `${month} ${year}`;
};

export const getFormattedDate = (stringDate: string) => {
  return format(parseISO(stringDate), "dd/MM/yyyy");
};

export const getFormattedDateAndTime = (stringDate: string) => {
  return format(parseISO(stringDate), "dd/MM/YYY hh'h'mm");

};

export const sendFormattedDate = (stringDate: Date) => {
  return format(stringDate, "yyyy-MM-dd");
};
