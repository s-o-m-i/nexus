import { interactiveTechs, techCategories } from './seo-tech-data';

// Convert interactiveTechs array to Record<string, TechItem>
export const convertInteractiveTechs = () => {
  const techRecord: Record<string, { label: string; short: string; description: string }> = {};
  
  interactiveTechs.forEach(tech => {
    const key = `tech${tech.id}`;
    techRecord[key] = {
      label: tech.name,
      short: tech.name.substring(0, 2).toUpperCase(),
      description: `${tech.name} is a powerful tool used for ${getCategoryNames(tech.categories).join(', ')} in SEO campaigns.`
    };
  });
  
  return techRecord;
};

// Convert techCategories array to TechCategory[]
export const convertTechCategories = () => {
  return techCategories.map(category => {
    // Get all techs that belong to this category
    const categoryTechs = interactiveTechs
      .filter(tech => tech.categories.includes(category.id))
      .map(tech => tech.name);
    
    return {
      title: category.name,
      items: categoryTechs
    };
  });
};

// Helper function to get category names from category IDs
const getCategoryNames = (categoryIds: number[]) => {
  return categoryIds.map(id => {
    const category = techCategories.find(cat => cat.id === id);
    return category ? category.name : '';
  }).filter(name => name !== '');
}; 