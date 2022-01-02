import React from "react";
import { View, Text } from "react-native";
import { Container, Header, Photo, User, UserGretting, UserInfo, UserName, UserWrapper } from "./styles";

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
                </UserWrapper>
            </Header>
        </Container>
    )
}