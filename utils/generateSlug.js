
  export const generateUniqueId = () => {
    return Math.random().toString(36).substr(2, 8);  // Generates a random string of 8 alphanumeric characters
  };
  export const generateSlug = (title, uniqueId) => {
    const slug = title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')  // Replace spaces and non-alphanumeric characters with hyphens
      .replace(/(^-|-$)/g, '');     // Remove leading and trailing hyphens
  
    return `${slug}-${uniqueId}`;    // Append the unique ID to the slug
  };