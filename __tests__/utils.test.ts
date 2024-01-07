import { CoinsResponse } from '@/system/types'
import { convertCoinsResponseToItems } from '@/system/utils'
import '@testing-library/jest-dom'
 
describe('App Utils', () => {
  it('converts coins api response to items list', () => {
    const mockCoinsResponse: CoinsResponse = {
      coins: {
        BTC: [
          {
            id: 1212,
            name: 'Bitcoin',
            symbol: 'BTC',
            slug: 'bitcoin',
            num_market_pairs: 100,
            date_added: new Date(),
            tags: [], 
            max_supply: 100,
            circulating_supply: 100,
            total_supply: 100,
            quote: {
              USD: {
                price: 100,
                volume_24h: 100,
              },
            },
          },
        ],
      },
    }
    const items = convertCoinsResponseToItems(mockCoinsResponse)
    const expectedItemsLength = 1
    expect(items.length).toBe(expectedItemsLength)
    expect(items[0].id).toBe(mockCoinsResponse.coins.BTC[0].id)
    expect(items[0].name).toBe(mockCoinsResponse.coins.BTC[0].name)
    expect(items[0].price).toBe(mockCoinsResponse.coins.BTC[0].quote.USD.price)
    expect(items[0].volume_24h).toBe(mockCoinsResponse.coins.BTC[0].quote.USD.volume_24h)
    expect(items[0].total_supply).toBe(mockCoinsResponse.coins.BTC[0].total_supply)
    expect(items[0].isFavorite).toBe(false)
  })
})