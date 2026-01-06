type Algorithms = 'algorithms' | 'big-o-notation';

type ComplexityTheory =
  | 'complexity-theory'
  | 'turing-machines'
  | 'computability'
  | 'decidability'
  | 'polynomial-time';

type DataStructures = 'data-structures';


type CategoryTheory = 'category-theory';
type SetTheory = 'set-theory';


type ComputerScienceCategory = Algorithms | ComplexityTheory | DataStructures;

type MathematicsCategory = CategoryTheory | SetTheory;
type ScienceCategory = 'science';

type Category = ComputerScienceCategory | MathematicsCategory | ScienceCategory;

export type Content = {
  title?: string;
  category?: Category | Category[];
  references?: string[];
}
