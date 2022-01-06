import React, { useCallback, useEffect, useState } from "react";
import { View, Text } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import HighlightCard from "../../components/HighlightCard";
import { TransactionCard } from "../../components/TransactionCard";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TransactionCardProps } from "../../components/TransactionCard";
import { Container, Header, Photo, PowerIcon, User, UserGretting, UserInfo, UserName, UserWrapper, HighlightCards, Transactions, Title, TransactionList, LogoutButton } from "./styles";

import  { format }  from 'date-fns'
import { useFocusEffect } from "@react-navigation/native";

export interface DataListProps extends TransactionCardProps {
    id: string;
}


export function Dashboard(){
  const [transactions, setTransactions] = useState<DataListProps[]>([]);
    
    async function loadTransactions(){
        const dataKey = '@gofinances:transactions';
        const response = await AsyncStorage.getItem(dataKey);
        const transactions = response ? JSON.parse(response) : [];
    
        const transactionsFormatted: DataListProps[] = transactions
        .map((item: DataListProps) => {
    
          
    
          const amount = Number(item.amount)
          .toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          });
          
          const date = Intl.DateTimeFormat('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: '2-digit'
          }).format(new Date(item.date));
    
          return {
            id: item.id,
            name: item.name,
            amount,
            type: item.type,
            category: item.category,
            date,
          }
    
        });
    
        setTransactions(transactionsFormatted);
        console.log(transactionsFormatted)
        
      }




    useEffect(() => {
        loadTransactions();
    },[]);

    useFocusEffect(useCallback(() => {
      loadTransactions();
    },[]));

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
                    <LogoutButton onPress={() => {}}>
                        <PowerIcon/>
                    </LogoutButton>
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
                    renderItem={({ item }) => <TransactionCard data={item} />}
                />
             </Transactions>
        </Container>

    )
}