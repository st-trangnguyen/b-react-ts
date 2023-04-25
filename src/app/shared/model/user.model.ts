type GeographyType = {
  lat: number;
  lng: number;
};

type AddressType = {
  city: string;
  geo: GeographyType;
  lat: string;
  lng: string;
  street: string;
  suite: string;
  zipcode: string;
};

type CompanyType = {
  bs: string;
  catchPhrase: string;
  name: string;
};

export interface UserAttributes {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

export type UserConstructorOptions = UserAttributes & {
  address: AddressType;
  company: CompanyType;
};

export default class User implements UserAttributes {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;

  constructor(data: UserConstructorOptions) {
    this.id = data.id;
    this.name = data.name;
    this.username = data.username;
    this.email = data.email;
    this.phone = data.phone;
    this.website = data.website;
  }
}
