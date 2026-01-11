export interface BeefCharacteristics {
  tenderness: number; // 1 (Tough) to 5 (Tender)
  fat: number; // 1 (Lean) to 5 (Fatty)
  cookingEase: number; // 1 (Hard) to 5 (Easy)
}

export interface BeefCut {
  id: string;
  nameEn: string;
  nameCn: string;
  descriptionEn: string;
  descriptionCn: string;
  cookingMethods: string[]; // e.g., "Grill", "Stew"
  characteristics: BeefCharacteristics;
  priceLevel: number; // 1 to 5
  commonDishes: string[];
}

export enum CookingMethod {
  GRILL = 'Grilling / BBQ',
  STEW = 'Stewing / Braising',
  STIR_FRY = 'Stir-Fry',
  ROAST = 'Roasting',
  SOUP = 'Soup',
  HOTPOT = 'Hotpot'
}