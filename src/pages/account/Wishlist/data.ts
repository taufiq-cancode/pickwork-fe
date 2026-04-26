export type WishlistProductType = {
  image: string
  productName: string
  stockStatus: string
  gender: 'male' | 'female'
  color?: string
  sizes: string[]
  price: number
}

export const wishlistItems: WishlistProductType[] = []