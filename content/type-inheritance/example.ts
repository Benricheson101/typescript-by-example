interface Person {
  firstName: string;
  lastName: string;
  pronouns?: string;
}

interface Course {
  name: string;
  instructor: Person;
}

interface UniversityStudent extends Person {
  school: string;
  courses: Course[];
}

const johnDoe: UniversityStudent = {
  firstName: 'John',
  lastName: 'Doe',
  pronouns: 'they/them',
  school: 'Princeton University',
  courses: [
    {
      name: 'Astronomy',
      instructor: {
        firstName: 'Richard',
        lastName: 'Pierson',
      },
    },
  ],
};

// Can be used with objects of type `Parent` and any derivatives
declare function greet<T extends Person>(person: T);
// Can only be used with with objects of type `UniversityStudent`
declare function attendClass(student: UniversityStudent);
