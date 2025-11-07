// Image URLs for all 25 dummy recipes
// Using Unsplash for high-quality food images

export const DUMMY_IMAGES: Record<string, string> = {
  "spaghetti-carbonara":
    "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800",
  "classic-margherita-pizza":
    "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800",
  "creamy-chicken-alfredo":
    "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800",
  "chocolate-chip-cookies":
    "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800",
  "grilled-salmon-with-lemon":
    "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800",
  "avocado-toast":
    "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=800",
  "beef-stir-fry":
    "https://images.unsplash.com/photo-1505254179099-0d2f2e48d8f5?w=800",
  "caesar-salad":
    "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800",
  "banana-pancakes":
    "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=800",
  "chicken-tikka-masala":
    "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800",
  "french-onion-soup":
    "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800",
  "vegetable-pad-thai":
    "https://images.unsplash.com/photo-1559314809-0c1559c4ae33?w=800",
  "beef-tacos":
    "https://images.unsplash.com/photo-1565299585323-38174c0a5e5a?w=800",
  "mushroom-risotto":
    "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=800",
  "greek-salad":
    "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800",
  "bbq-pulled-pork":
    "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800",
  "shrimp-scampi":
    "https://images.unsplash.com/photo-1563379091339-03246963d29a?w=800",
  "chicken-caesar-wrap":
    "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800",
  "vegetable-lasagna":
    "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=800",
  "fish-and-chips":
    "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800",
  "mango-sticky-rice":
    "https://images.unsplash.com/photo-1563805042-7684c019e1b5?w=800",
  "beef-burgers":
    "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800",
  "chicken-noodle-soup":
    "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800",
  "chocolate-brownies":
    "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800",
  "vegetable-curry":
    "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800",
};

/**
 * Get image URL for a recipe by name
 * Converts recipe name to lowercase and replaces spaces with hyphens
 */
export const getRecipeImageUrl = (recipeName: string): string | null => {
  if (!recipeName) return null;

  const key = recipeName.toLowerCase().replace(/\s+/g, "-");
  return DUMMY_IMAGES[key] || null;
};
