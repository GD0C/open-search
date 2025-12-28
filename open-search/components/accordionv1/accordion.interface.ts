interface AccordionLink {
  title: string;
  url: string;
}

interface AccordionItem {
  title: string;
  links: AccordionLink[];
}

export interface AccordionProps {
  items: AccordionItem[];
}


