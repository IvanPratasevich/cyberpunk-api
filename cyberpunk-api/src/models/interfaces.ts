interface ICharacter {
  id?: number;
  name: string;
  surname?: string;
  description?: string;
  img: string;
  gender: string;
  occupation: string;
  dateOfBirth: string | number;
  age: number | string;
}

export { ICharacter };
