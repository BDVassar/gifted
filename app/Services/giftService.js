import { appState } from "../AppState.js"
import { Gift } from "../Models/Gift.js"
import { GiftAPI } from "./AxiosService.js"


class GiftService {
  async openGift(id) {
    let selectedGift = appState.gifts.find(g => g.id == id)
    selectedGift.opened = true
    await GiftAPI.put('gifts/' + id, selectedGift)

    console.log(selectedGift);
  }
  async createGift(formData) {
    const res = await GiftAPI.post('gifts', formData)
    appState.gifts = [...appState.gifts, new Gift(formData)]
    // appState.gifts = res.data.map(g => new Gift(g))
  }
  async getGifts() {
    const res = await GiftAPI.get('gifts')
    console.log('[GET GIFTS]', res.data)
    appState.gifts = res.data.map(g => new Gift(g))
  }

}



export const giftService = new GiftService()