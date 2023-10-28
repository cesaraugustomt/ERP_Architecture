interface SeedClinic {
  name: string;
  images: string[];
}

// type ValidCBO = 'asd'|'dfs'|'sdf';

interface SeedData {
  clinic: SeedClinic[];
}

export const initialData: SeedData = {
  clinic: [
    {
      name: "Clinica OdontoPrev",
      images: ["1740178-00-A1.jpg", "1740178-00-A2.jpg"],
    },
  ],
};
