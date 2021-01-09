import { Gift, GiftInterface } from '@/models/Gift'
import * as rm from 'typed-rest-client'

interface GiftsRecord {
  id: string;
  fields: Array<GiftInterface>;
}

interface GiftRecord {
  id: string;
  fields: GiftInterface;
}

export interface GiftList {
  records: Array<GiftsRecord>;
}

const baseURL = 'https://api.airtable.com/v0/appL06XW0QrDbpxxT/'
const apiKey = 'keyUHl2tkCf4DEGqC' // It's a study project and the keys in the code are not a vulnerability.

class ShopService {
  async fetchGifts () {
    const rest: rm.RestClient = new rm.RestClient('rest', baseURL)
    const response: rm.IRestResponse<GiftList> = await rest.get<GiftList>(`Items?api_key=${apiKey}`)
    const abstractGifts: Array<GiftInterface> = response?.result?.records.flatMap(x => x.fields) ?? []
    const gifts: Array<Gift> = abstractGifts
      .map(x => new Gift(x))
      .filter(x => {
        return Object.entries(x)
          .filter(([, v]) => {
            return v !== null && v !== undefined
          }).length === Object.entries(x).length
      })
    return gifts
  }

  async fetchGift (id: string) {
    const rest: rm.RestClient = new rm.RestClient('rest', baseURL)
    const response: rm.IRestResponse<GiftRecord> = await rest.get<GiftRecord>(`Items/${id}?api_key=${apiKey}`)
    const abstractGift = response?.result?.fields as GiftInterface
    return new Gift(abstractGift)
  }
}

export const shopService = new ShopService()
