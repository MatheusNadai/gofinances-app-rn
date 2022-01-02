import React from "react";
import { View, Text } from "react-native";
import HighlightCard from "../../components/HighlightCard";
import { Container, Header, Photo, PowerIcon, User, UserGretting, UserInfo, UserName, UserWrapper, HighlightCards } from "./styles";

export function Dashboard(){
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
        </Container>
    )
}