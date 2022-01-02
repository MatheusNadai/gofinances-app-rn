import React, { useState } from "react";
import { Button } from "../../components/Form/Button";
import { Input } from "../../components/Form\/Input";
import { TransactionTypeButton } from "../../components/Form/TransactionTypeButton";
import { Container, Fields, Form, Header, Title, TransactionsType } from './styles'

export function Register() {
    const [transactionType, setTransactionType] = useState('');

    function handleTransactionsTypeSelect(type: 'positive' | 'negative'){
        setTransactionType(type);
      }
    

    return (
        <Container>
            <Header>
                <Title>Cadastro</Title>
            </Header>
            <Form>
                <Fields>
                    <Input placeholder="Nome"/>
                    <Input placeholder="Preço"/>
                    <TransactionsType>
                        <TransactionTypeButton 
                            title="Entrada" 
                            type="up" 
                            onPress={() => handleTransactionsTypeSelect('positive')}
                            isActive={transactionType === 'positive'}
                        />
                        <TransactionTypeButton 
                            type="down"
                            title="Saida"
                            onPress={() => handleTransactionsTypeSelect('negative')}
                            isActive={transactionType === 'negative'}
                       />
                    </TransactionsType>
                </Fields>
                <Button title="Enviar"/>
            </Form>
        </Container>
    )
}