import { BeefCut } from './types';

export const BEEF_CUTS: BeefCut[] = [
  {
    id: 'chuck',
    nameEn: 'Chuck',
    nameCn: '肩肉 / 梅头',
    descriptionEn: 'Shoulder area. Flavorful but can be tough. Excellent for slow cooking.',
    descriptionCn: '位于牛肩胛部位，肉质结实，油脂分布适中，适合慢炖。',
    cookingMethods: ['Stewing / Braising', 'Hotpot', 'Roasting'],
    characteristics: { tenderness: 2, fat: 3, cookingEase: 3 },
    priceLevel: 2,
    commonDishes: ['Pot Roast', 'Burgers', 'Stew (炖肉)']
  },
  {
    id: 'rib',
    nameEn: 'Rib / Ribeye',
    nameCn: '肋脊肉 / 肉眼',
    descriptionEn: 'Rich, juicy, and well-marbled. One of the most desirable steak cuts.',
    descriptionCn: '大理石花纹丰富，肉质鲜嫩多汁，是做牛排的上选。',
    cookingMethods: ['Grilling / BBQ', 'Roasting'],
    characteristics: { tenderness: 5, fat: 4, cookingEase: 5 },
    priceLevel: 5,
    commonDishes: ['Ribeye Steak', 'Prime Rib', 'Korean BBQ']
  },
  {
    id: 'short_loin',
    nameEn: 'Short Loin / Sirloin',
    nameCn: '前腰脊 / 西冷',
    descriptionEn: 'Leaner than ribeye but very tender. Includes T-bone and Porterhouse.',
    descriptionCn: '肉质细嫩，脂肪较少但风味浓郁，包含丁骨牛排。',
    cookingMethods: ['Grilling / BBQ', 'Stir-Fry'],
    characteristics: { tenderness: 4, fat: 2, cookingEase: 4 },
    priceLevel: 4,
    commonDishes: ['T-Bone Steak', 'New York Strip', 'Stir-fry']
  },
  {
    id: 'tenderloin',
    nameEn: 'Tenderloin / Filet',
    nameCn: '里脊 / 菲力',
    descriptionEn: 'The most tender cut of beef. Very lean, buttery texture.',
    descriptionCn: '牛身上最嫩的部位，几乎没有油脂，口感如奶油般细滑。',
    cookingMethods: ['Grilling / BBQ', 'Roasting'],
    characteristics: { tenderness: 5, fat: 1, cookingEase: 4 },
    priceLevel: 5,
    commonDishes: ['Filet Mignon', 'Beef Wellington', 'Carpaccio']
  },
  {
    id: 'brisket',
    nameEn: 'Brisket',
    nameCn: '牛腩 / 胸肉',
    descriptionEn: 'Breast muscle. Tough connective tissue that breaks down into gelatin when slow-cooked.',
    descriptionCn: '胸部肌肉，筋多肉厚，需要长时间慢炖使结缔组织软化。',
    cookingMethods: ['Stewing / Braising', 'Smoking', 'Soup'],
    characteristics: { tenderness: 1, fat: 4, cookingEase: 2 },
    priceLevel: 3,
    commonDishes: ['Texas BBQ Brisket', 'Curry Beef Brisket', 'Pho']
  },
  {
    id: 'plate',
    nameEn: 'Short Plate',
    nameCn: '牛五花 / 腹肉',
    descriptionEn: 'Belly area below the ribs. Fatty and tough, great for thin slicing.',
    descriptionCn: '位于肋骨下方，脂肪含量高，常被切成薄片使用。',
    cookingMethods: ['Hotpot', 'Grilling / BBQ', 'Stir-Fry'],
    characteristics: { tenderness: 3, fat: 5, cookingEase: 4 },
    priceLevel: 2,
    commonDishes: ['Beef Bacon', 'Gyudon (Beef Bowl)', 'Hotpot Slices']
  },
  {
    id: 'flank',
    nameEn: 'Flank',
    nameCn: '牛腩 / 侧腹肉',
    descriptionEn: 'Abdominal muscle. Very lean and flavorful but tough. Best marinated and grilled quickly.',
    descriptionCn: '腹部肌肉，瘦肉多，纤维明显，适合腌制后快炒或烤。',
    cookingMethods: ['Stir-Fry', 'Grilling / BBQ'],
    characteristics: { tenderness: 2, fat: 2, cookingEase: 3 },
    priceLevel: 3,
    commonDishes: ['Fajitas', 'London Broil', 'Stir-fry']
  },
  {
    id: 'round',
    nameEn: 'Round / Rump',
    nameCn: '牛臀肉 / 后腿',
    descriptionEn: 'Rear leg muscle. Lean and tough. Best for roasting, braising, or drying.',
    descriptionCn: '后腿部位，运动量大所以肉质较硬，适合炖煮或做成肉干。',
    cookingMethods: ['Stewing / Braising', 'Roasting', 'Soup'],
    characteristics: { tenderness: 2, fat: 1, cookingEase: 3 },
    priceLevel: 2,
    commonDishes: ['Jerky', 'Roast Beef', 'Beef Stew']
  },
  {
    id: 'shank',
    nameEn: 'Shank',
    nameCn: '牛腱',
    descriptionEn: 'Leg muscle. Very tough and sinewy. Perfect for soups and stews.',
    descriptionCn: '腿部肌肉，富含胶原蛋白和筋，炖煮后口感极佳。',
    cookingMethods: ['Soup', 'Stewing / Braising'],
    characteristics: { tenderness: 1, fat: 1, cookingEase: 2 },
    priceLevel: 1,
    commonDishes: ['Osso Buco', 'Braised Beef Shank (卤牛腱)', 'Beef Noodle Soup']
  }
];