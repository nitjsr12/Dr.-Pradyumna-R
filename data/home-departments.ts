import {
  specialtiesMegaMenuColumns,
  specialtiesProcedureGroups,
  type SpecialtiesMenuColumn,
} from "@/data/area-of-specialties";

export type HomeDepartmentBlock = {
  id: string;
  title: string;
  href: string;
  items: readonly string[];
};

/** Homepage departments / specialities — aligned with area-of-specialties & mega menu. */
export const homeDepartmentBlocks: HomeDepartmentBlock[] = [
  ...specialtiesMegaMenuColumns.map((col: SpecialtiesMenuColumn) => ({
    id: col.id,
    title: col.title,
    href: col.moreHref,
    items: col.items,
  })),
  {
    id: "other-procedures",
    title: "Other procedures",
    href: "/area-of-specialties#other-procedures",
    items:
      specialtiesProcedureGroups.find((g) => g.id === "other-procedures")?.procedures ?? [],
  },
];
