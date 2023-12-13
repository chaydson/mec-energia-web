import { UserRole } from "@/types/person";

export const UserRoleLabelMap = {
  [UserRole.UNIVERSITY_ADMIN]: "Gestão",
  [UserRole.UNIVERSITY_USER]: "Operacional",
  [UserRole.SUPER_USER]: "Super",
};

export const UserRoleDescriptionMap = {
  [UserRole.UNIVERSITY_ADMIN]:
    "O perfil “Gestão” permite gerenciar o perfil das outras pessoas que usam o sistema. Além das tarefas operacionais como lançar faturas e gerar recomendações.",
  [UserRole.UNIVERSITY_USER]:
    "O perfil “Operacional” tem acesso às tarefas básicas do sistema como:  gerenciar unidades consumidoras e distribuidoras, lançar faturas e tarifas, além de gerar recomendações.",
  [UserRole.SUPER_USER]: "Super Admin",
};
