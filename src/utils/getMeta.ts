const getMetadata = async (url: string): Promise<Metadata | null> => {
    try {
      const response = await fetch(`https://jsonlink.io/api/extract?url=${url}`)
      if (!response.ok) return null
      const data = await response.json()
      return data
    } catch (error) {
      return null
    }
  }
  
  export default getMetadata

  type Metadata = {
    title: string;
    description: string;
    url: string;
    domain: string; 
    images: string[]
    // Add the 'domain' property with the appropriate type
    // ... other properties
  };