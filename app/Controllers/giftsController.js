import { appState } from "../AppState.js";
import { giftService } from "../Services/giftService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawGifts() {
  let gifts = appState.gifts
  let template = ''
  gifts.forEach(g => {
    if (g.opened == true) {
      template += g.OpenGiftTemplate
    } else {
      template += g.ClosedGiftTemplate
    }
  }),
    setHTML('gifts', template)
}

export class GiftsController {
  constructor() {
    appState.on('gifts', _drawGifts)

    this.getGifts()
  }

  async getGifts() {
    try {
      await giftService.getGifts()
    } catch (error) {
      Pop.error(error)
      console.log(error.message)
    }
  }

  async createGift() {
    try {
      window.event.preventDefault()
      const form = window.event.target
      let formData = getFormData(form)
      console.log("button working", formData);
      await giftService.createGift(formData)
    } catch (error) {
      Pop.error(error)
      console.log(error.message)
    }
    _drawGifts()
  }
  async openGift(id) {
    try {
      await giftService.openGift(id)
    } catch (error) {
      Pop.error(error)
      console.log(error.message)
    }
  }
}