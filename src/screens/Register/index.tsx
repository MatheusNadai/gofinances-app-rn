import React, { useState } from "react";
import { Button } from "../../components/Form/Button";
import { Alert, AsyncStorage, Keyboard, Modal, TouchableWithoutFeedback } from "react-native";
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { CategorySelectButton } from "../../components/Form/CategorySelectButton";
import { Input } from "../../components/Form/Input";
import { InputForm } from "../../components/Form/InputForm";
import { TransactionTypeButton } from "../../components/Form/TransactionTypeButton";
import { Container, Fields, Form, Header, Title, TransactionsType } from './styles'
import { CategorySelect } from "../CategorySelect";

interface FormData {
    name: string;
    amount: string;  
}

const schema = Yup.object().shape({
    name: Yup
    .string()
    .required('Nome é obrigatório'),
    amount: Yup
    .number()
    .typeError('Informe um valor númerico')
    .positive('O valor não pode ser negativo')
    .required('O valor é obrigatório'),
});

export function Register() {
    const [transactionType, setTransactionType] = useState('');
    const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  
    const [category, setCategory] = useState({
        key: 'category',
        name: 'Categoria'
    });

    const {
        control,
        handleSubmit,
        reset,
        formState: { errors }
      } = useForm({
        resolver: yupResolver(schema)
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


    async function handleRegister(form: FormData){
        if(!transactionType)
          return Alert.alert('Selecione o tipo da transação');
    
        if(category.key === 'category')
          return Alert.alert('Selecione a categoria');
    
    
        const data = {
          name: form.name,
          amount: form.amount,
          type: transactionType,
          category: category.key,
        }
    
        console.log(data)
    }
        
    

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container>
                    <Header>
                        <Title>Cadastro</Title>
                    </Header>
                    <Form>
                        <Fields>
                            <InputForm 
                                control={control}
                                name="name"
                                placeholder="Nome"
                                autoCapitalize="sentences"
                                autoCorrect={false}
                                error={errors.name && errors.name.message}

                            />
                            <InputForm 
                                control={control}
                                name="amount"
                                placeholder="Preço"
                                keyboardType="numeric"
                                error={errors.amount && errors.amount.message}
                            />
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
                        <Button 
                            title="Enviar"
                            onPress={handleSubmit(handleRegister)}
                        />
                    </Form>
                    <Modal visible={categoryModalOpen}>
                        <CategorySelect
                            category={category}
                            setCategory={setCategory}
                            closeSelectCategory={handleCloseSelectCategoryModal}
                        />
                    </Modal>
            </Container>
        </TouchableWithoutFeedback>
    )
}