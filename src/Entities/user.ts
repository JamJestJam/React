export enum Gender {
  male = 'male',
  female = 'female',
  other = 'other',
  empty = '',
}

export default interface IEnUser {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  gender: Gender;
  email: string;
  dateOfBirth: string;
  registerDate: string;
  phone: string;
  picture: string;
  location: {
    street: string;
    city: string;
    country: string;
    timezone: string;
  };
}
