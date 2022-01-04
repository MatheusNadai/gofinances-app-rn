import React, { useState } from "react";
import { Button } from "../../components/Form/Button";
import { Modal } from "react-native";
import { CategorySelectButton } from "../../components/Form/CategorySelectButton";
import { Input } from "../../components/Form/Input";
import { TransactionTypeButton } from "../../components/Form/TransactionTypeButton";
import { Container, Fields, Form, Header, Title, TransactionsType } from './styles'
import { CategorySelect } from "../CategorySelect";

export function Register() {
    const [transactionType, setTransactionType] = useState('');
    const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  
    const [category, setCategory] = useState({
        key: 'category',
        name: 'Categoria'
    });

    function handleTransactionsTypeSelect(type: 'positive' | 'negative'){
        setTransactionType(type);
    }

    function handleOpenSelectCategoryModal(){
        setCategoryModalOpen(true);
    }

    function handleCloseSelectCategoryModal(){
        setCategoryModalOpen(false);
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
                    <CategorySelectButton title={category.name} onPress={handleOpenSelectCategoryModal}/>
                </Fields>
                <Button title="Enviar"/>
            </Form>
            <Modal visible={categoryModalOpen}>
                <CategorySelect
                    category={category}
                    setCategory={setCategory}
                    closeSelectCategory={handleCloseSelectCategoryModal}
                />
            </Modal>
        </Container>
    )
}