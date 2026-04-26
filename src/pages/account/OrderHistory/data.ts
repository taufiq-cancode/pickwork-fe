export type OrderType = {
  image: string
  orderNo: string
  name: string
  size?: string
  deliveryDate: string
  status: 'delivered' | 'processing' | 'cancelled'
  amount: number
}

export const ordersData: OrderType[] = []
