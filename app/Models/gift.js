
export class Gift {
  constructor(data) {
    this.id = data.id
    this.tag = data.tag || ``
    this.url = data.url
    this.opened = data.opened
  }


  get OpenGiftTemplate() {
    return `
    <div class="col-12 col-md-3 card shadow" onclick="app.giftsController.openGift('${this.id}')">
    <img src=${this.url}"" alt="">    
    <p class="fs-5 fw-bold text-vfx">${this.tag}</p>
    </div>
    `
  }

  get ClosedGiftTemplate() {
    return `
    <div class="col-12 col-md-3 card shadow card-hidden align-items-center justify-content-center" onclick="app.giftsController.openGift('${this.id}')">
    <p class="fs-5 fw-bold text-vfx">${this.tag}</p>
    </div>
    `
  }

}