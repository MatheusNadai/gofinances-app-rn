import React from "react";
import { View, Text } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import HighlightCard from "../../components/HighlightCard";
import TransactionCard from "../../components/TransactionCard";
import { Transaction } from "../../components/TransactionCard/types";
import { Container, Header, Photo, PowerIcon, User, UserGretting, UserInfo, UserName, UserWrapper, HighlightCards, Transactions, Title, TransactionList } from "./styles";

export function Dashboard(){
    
    const transactions: Transaction[] = [
        {
          id: "3213",
          title: "Desenvolvimento de sites",
          date: "22/08/2021",
          amount: "R$ 15.232,00",
          type: "C",
          category: { name: "Vendas", slugname: "vendas" },
        },
        {
          id: "23r",
          title: "Steam Games",
          date: "22/08/2021",
          amount: "R$ 1.000,00",
          type: "D",
          category: { name: "Compra", slugname: "vendas" },
        },
        {
          id: "2367r",
          title: "Freelance App",
          date: "22/08/2021",
          amount: "R$ 15.232,00",
          type: "C",
          category: { name: "Vendas", slugname: "vendas" },
        },
        {
          id: "23323r",
          title: "Gucci",
          date: "22/08/2021",
          amount: "R$ 15.232,00",
          type: "D",
          category: { name: "Vestuário", slugname: "compras" },
        },
      ];

    return(
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo
                        source={{
                            uri: "https://github.com/MatheusNadai.png",
                        }}
                        />
                        <User>
                            <UserGretting>Olá,</UserGretting>
                            <UserName>Matheus</UserName>
                        </User>
                    </UserInfo>
                    <PowerIcon/>
                </UserWrapper>
            </Header>
            <HighlightCards  
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingLeft: 24 }} 
            >
                 <HighlightCard
                    title="Entrada"
                    amount="R$ 17.2382,00"
                    lastTransition="Ultima transação 8 de aghosto"
                    type="C"
                />
                <HighlightCard
                    title="Entrada"
                    amount="R$ 17.2382,00"
                    lastTransition="Ultima transação 8 de aghosto"
                    type="D"
                />
                <HighlightCard
                    title="Entrada"
                    amount="R$ 17.2382,00"
                    lastTransition="Ultima transação 8 de aghosto"
                    type="T"    
                />
            </HighlightCards>
            <Transactions>
                <Title>Listagem</Title>
                <TransactionList
                    contentContainerStyle={{
                        paddingBottom: getBottomSpace() || 20,
                        marginTop: 16,
                    }}
                    showsVerticalScrollIndicator={false}
                    data={transactions}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <TransactionCard transaction={item} />}
                />
             </Transactions>
        </Container>
    )
}