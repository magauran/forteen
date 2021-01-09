interface GiftAttachment {
  id: string;
  url: string;
}

export interface GiftInterface {
  name: string;
  description: string;
  price: number;
  photo: Array<GiftAttachment>;
  image: string;
}

export class Gift implements GiftInterface {
  id: string;
  name: string;
  description: string;
  price: number;
  photo: Array<GiftAttachment>;

  constructor (id: string, gift: GiftInterface) {
    this.id = id
    this.name = gift.name
    this.description = gift.description
    this.price = gift.price
    this.photo = gift.photo
  }

  get image (): string {
    return this.photo[0].url
  }
}
