interface Category {
    name: string;
    slugname: string;
}
  
  
export interface TransactionCardProps {
    id: string;
    title: string;
    amount: string;
    category: Category;
    date: string;
    type: 'positive' | 'negative';
}