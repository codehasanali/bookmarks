
type Bookmark = {
  id: number;
  created_at: string;
  title: string;
  url: string;
  image: string;
  saved_by: string;
  tags: string[];
  description: string;
  domain: string;
};

type Tag = {
  name: string;
  count: number;
};

const createTagList = (bookmarks: Bookmark[]): Tag[] => {
    const tags = bookmarks.reduce<Tag[]>((total, current) => {
      current.tags.forEach(tag => {
        const index = total.findIndex(x => x.name === tag)
        if (index !== -1) total[index].count++
        else total.push({ name: tag, count: 1 })
      })
      return total
    }, [])
    return tags.sort((a, b) => b.count - a.count)
  }
  
  export default createTagList