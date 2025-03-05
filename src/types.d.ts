declare interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

declare type Game = {
  id: string
  name: string
  description: string
  releaseDate?: string
  prices: {
    discount?: number
    old?: number
    current: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}
