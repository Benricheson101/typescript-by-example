export interface Person {
  firstName: string;
  lastName: string;
  pronouns: string;
}

export const johnDoe: Person = {
  firstName: 'John',
  lastName: 'Doe',
  pronouns: 'they/them',
};

// @ts-expect-error Property `job` does not exist on type `Person`
johnDoe.job;
