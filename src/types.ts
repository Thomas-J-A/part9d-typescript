export interface HeaderProps {
  courseName: string;
}

export type CoursePart = {
  name: string;
  exerciseCount: number;
};

export interface CourseParts {
  courseParts: CoursePart[];
}
