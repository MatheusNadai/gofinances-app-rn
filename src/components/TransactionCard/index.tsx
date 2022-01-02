import React from "react";
import {
  Container,
  Title,
  Amount,
  Footer,
  Category,
  Icon,
  CategoryName,
  Date,
} from "./styles";
import { TransactionCardProps } from "./types";

const categoryIcons: { [key: string]: string } = {
  vendas: "dollar-sign",
  compras: "shopping-bag",
  alimentacao: "shopping-cart",
};
const TransactionCard = (props: TransactionCardProps) => {
  const { transaction } = props;
  const { title, amount, category, date, type } = transaction;
  return (
    <Container>
      <Title>{title}</Title>
      <Amount type={type}>
        {type === "D" && "-"}
        {amount}
      </Amount>
      <Footer>
        <Category>
          <Icon name={categoryIcons[category.slugname]} />
          <CategoryName>{category.name}</CategoryName>
        </Category>
        <Date>{date}</Date>
      </Footer>
    </Container>
  );
};

export default TransactionCard;