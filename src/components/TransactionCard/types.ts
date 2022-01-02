interface Category {
    name: string;
    slugname: string;
}
  
export interface Transaction {
    id: string;
    title: string;
    amount: string;
    category: Category;
    date: string;
    type: "C" | "D";
}
  
export interface TransactionCardProps {
    transaction: Transaction;   
}