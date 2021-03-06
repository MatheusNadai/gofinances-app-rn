import React, { useState } from "react";
import { Button } from "../../components/Form/Button";
import { Alert, Keyboard, Modal, TouchableWithoutFeedback } from "react-native";
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useNavigation, ParamListBase, NavigationProp } from '@react-navigation/native';
import uuid from 'react-native-uuid'
import { CategorySelectButton } from "../../components/Form/CategorySelectButton";
import { Input } from "../../components/Form/Input";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { InputForm } from "../../components/Form/InputForm";
import { TransactionTypeButton } from "../../components/Form/TransactionTypeButton";
import { Container, Fields, Form, Header, Title, TransactionsType } from './styles'
import { CategorySelect } from "../CategorySelect";
import { useAuth } from "../../hooks/auth";


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
    const {user} = useAuth()
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

      const { navigate }: NavigationProp<ParamListBase> = useNavigation();
    

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
    
    
        const newTransaction = {
          id: String(uuid.v4()),
          name: form.name,
          amount: form.amount,
          type: transactionType,
          category: category.key,
          date: new Date()
        }

        try {
            const dataKey = `@gofinances:transactions_user:${user.id}`;
      
            const data = await AsyncStorage.getItem(dataKey);
            const currentData = data ? JSON.parse(data) : [];
      
            const dataFormatted = [
              ...currentData,
              newTransaction
            ];
      
            await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormatted));
      
            reset();
            setTransactionType('');
            setCategory({
              key: 'category',
              name: 'Categoria'
            });
      
            navigate('Listagem');
            
          } catch (error) {
            console.log(error);
            Alert.alert("Não foi possível salvar");
          }

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