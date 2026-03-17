import {Image, Text, TouchableOpacity, View, ScrollView, FlatList} from "react-native";

import {Button} from "@/components/Button";
import {Filter} from "@/components/Filter";
import {Input} from "@/components/Input";
import {Item} from "@/components/Item";

import {FilterStatus} from "@/types/FilterStatus";

import {styles} from "./styles";

const FILTER_STATUS: FilterStatus[] = [
    FilterStatus.PENDING,
    FilterStatus.DONE
];

const ITEMS = [
    {id: 1, status: FilterStatus.PENDING, description: "Comprar café em grão"},
    {id: 2, status: FilterStatus.DONE, description: "Finalizar relatório mensal"},
    {id: 3, status: FilterStatus.PENDING, description: "Agendar reunião com equipe"},
    {id: 4, status: FilterStatus.PENDING, description: "Revisar código do pull request"},
    {id: 5, status: FilterStatus.DONE, description: "Responder e-mails pendentes"},
    {id: 6, status: FilterStatus.PENDING, description: "Atualizar documentação do projeto"},
    {id: 7, status: FilterStatus.PENDING, description: "Preparar apresentação para cliente"},
    {id: 8, status: FilterStatus.DONE, description: "Testar nova funcionalidade"},
    {id: 9, status: FilterStatus.PENDING, description: "Fazer backup dos arquivos"},
    {id: 10, status: FilterStatus.PENDING, description: "Planejar sprints da próxima semana"},
    {id: 11, status: FilterStatus.PENDING, description: "Comprar material de escritório"},
    {id: 12, status: FilterStatus.DONE, description: "Pagar contas do mês"},
    {id: 13, status: FilterStatus.PENDING, description: "Agendar consulta médica"},
    {id: 14, status: FilterStatus.PENDING, description: "Revisar contrato com fornecedor"},
    {id: 15, status: FilterStatus.DONE, description: "Atualizar perfil no LinkedIn"},
    {id: 16, status: FilterStatus.PENDING, description: "Estudar nova tecnologia"},
    {id: 17, status: FilterStatus.PENDING, description: "Fazer exercícios físicos"},
    {id: 18, status: FilterStatus.DONE, description: "Comprar presente de aniversário"},
    {id: 19, status: FilterStatus.PENDING, description: "Organizar arquivos do computador"},
    {id: 20, status: FilterStatus.PENDING, description: "Ler livro técnico"},
    {id: 21, status: FilterStatus.PENDING, description: "Limpar caixa de entrada do email"},
    {id: 22, status: FilterStatus.DONE, description: "Atualizar currículo"},
    {id: 23, status: FilterStatus.PENDING, description: "Pesquisar cursos online"},
    {id: 24, status: FilterStatus.PENDING, description: "Planejar viagem de férias"},
    {id: 25, status: FilterStatus.DONE, description: "Cancelar assinaturas não utilizadas"},
    {id: 26, status: FilterStatus.PENDING, description: "Organizar agenda da semana"},
    {id: 27, status: FilterStatus.PENDING, description: "Comprar novos livros"},
    {id: 28, status: FilterStatus.DONE, description: "Assistir webinar sobre produtividade"},
    {id: 29, status: FilterStatus.PENDING, description: "Escrever artigo para blog"},
    {id: 30, status: FilterStatus.PENDING, description: "Criar plano de carreira"},
    {id: 31, status: FilterStatus.PENDING, description: "Fazer networking com colegas"},
    {id: 32, status: FilterStatus.DONE, description: "Organizar fotos do celular"},
    {id: 33, status: FilterStatus.PENDING, description: "Preparar documentos para imposto de renda"},
    {id: 34, status: FilterStatus.PENDING, description: "Comprar presentes de Natal"},
    {id: 35, status: FilterStatus.DONE, description: "Limpar geladeira"},
    {id: 36, status: FilterStatus.PENDING, description: "Doar roupas usadas"},
    {id: 37, status: FilterStatus.PENDING, description: "Aprender novo idioma"},
    {id: 38, status: FilterStatus.DONE, description: "Fazer check-up médico"},
    {id: 39, status: FilterStatus.PENDING, description: "Criar rotina matinal"},
    {id: 40, status: FilterStatus.PENDING, description: "Meditar diariamente"},
    {id: 41, status: FilterStatus.PENDING, description: "Beber mais água"},
    {id: 42, status: FilterStatus.DONE, description: "Reduzir consumo de açúcar"},
    {id: 43, status: FilterStatus.PENDING, description: "Começar dieta saudável"},
    {id: 44, status: FilterStatus.PENDING, description: "Dormir 8 horas por dia"},
    {id: 45, status: FilterStatus.DONE, description: "Comprar roupas novas"},
    {id: 46, status: FilterStatus.PENDING, description: "Organizar guarda-roupa"},
    {id: 47, status: FilterStatus.PENDING, description: "Fazer terapia"},
    {id: 48, status: FilterStatus.DONE, description: "Visitar família"},
    {id: 49, status: FilterStatus.PENDING, description: "Ligar para amigos"},
    {id: 50, status: FilterStatus.PENDING, description: "Participar de eventos da área"},
    {id: 51, status: FilterStatus.PENDING, description: "Fazer mentoria para juniores"},
    {id: 52, status: FilterStatus.DONE, description: "Atualizar projetos no GitHub"},
    {id: 53, status: FilterStatus.PENDING, description: "Contribuir com open source"},
    {id: 54, status: FilterStatus.PENDING, description: "Criar portfolio online"},
    {id: 55, status: FilterStatus.DONE, description: "Participar de hackathon"},
    {id: 56, status: FilterStatus.PENDING, description: "Aprender framework novo"},
    {id: 57, status: FilterStatus.PENDING, description: "Praticar entrevistas técnicas"},
    {id: 58, status: FilterStatus.DONE, description: "Fazer certificação"},
    {id: 59, status: FilterStatus.PENDING, description: "Escrever posts no LinkedIn"},
    {id: 60, status: FilterStatus.PENDING, description: "Criar canal no YouTube"},
    {id: 61, status: FilterStatus.PENDING, description: "Gravar podcasts"},
    {id: 62, status: FilterStatus.DONE, description: "Participar de comunidade tech"},
    {id: 63, status: FilterStatus.PENDING, description: "Ir em meetups"},
    {id: 64, status: FilterStatus.PENDING, description: "Palestrar em evento"},
    {id: 65, status: FilterStatus.DONE, description: "Escrever e-book"},
    {id: 66, status: FilterStatus.PENDING, description: "Criar curso online"},
    {id: 67, status: FilterStatus.PENDING, description: "Fazer voluntariado"},
    {id: 68, status: FilterStatus.DONE, description: "Ajudar em ONG"},
    {id: 69, status: FilterStatus.PENDING, description: "Plantar árvores"},
    {id: 70, status: FilterStatus.PENDING, description: "Reciclar lixo"},
    {id: 71, status: FilterStatus.PENDING, description: "Economizar energia"},
    {id: 72, status: FilterStatus.DONE, description: "Usar menos plástico"},
    {id: 73, status: FilterStatus.PENDING, description: "Comprar produtos locais"},
    {id: 74, status: FilterStatus.PENDING, description: "Andar de bicicleta"},
    {id: 75, status: FilterStatus.DONE, description: "Usar transporte público"},
    {id: 76, status: FilterStatus.PENDING, description: "Fazer caminhadas"},
    {id: 77, status: FilterStatus.PENDING, description: "Praticar yoga"},
    {id: 78, status: FilterStatus.DONE, description: "Fazer alongamentos"},
    {id: 79, status: FilterStatus.PENDING, description: "Correr no parque"},
    {id: 80, status: FilterStatus.PENDING, description: "Nadar semanalmente"},
    {id: 81, status: FilterStatus.PENDING, description: "Jogar tênis"},
    {id: 82, status: FilterStatus.DONE, description: "Andar de patins"},
    {id: 83, status: FilterStatus.PENDING, description: "Fazer trilha"},
    {id: 84, status: FilterStatus.PENDING, description: "Acampar no fim de semana"},
    {id: 85, status: FilterStatus.DONE, description: "Pescar com amigos"},
    {id: 86, status: FilterStatus.PENDING, description: "Fazer churrasco"},
    {id: 87, status: FilterStatus.PENDING, description: "Organizar festa surpresa"},
    {id: 88, status: FilterStatus.DONE, description: "Ir ao cinema"},
    {id: 89, status: FilterStatus.PENDING, description: "Visitar museu"},
    {id: 90, status: FilterStatus.PENDING, description: "Ir ao teatro"},
    {id: 91, status: FilterStatus.PENDING, description: "Assistir show"},
    {id: 92, status: FilterStatus.DONE, description: "Viajar para praia"},
    {id: 93, status: FilterStatus.PENDING, description: "Conhecer cidade nova"},
    {id: 94, status: FilterStatus.PENDING, description: "Fazer intercâmbio"},
    {id: 95, status: FilterStatus.DONE, description: "Aprender cozinhar"},
    {id: 96, status: FilterStatus.PENDING, description: "Fazer curso de bartender"},
    {id: 97, status: FilterStatus.PENDING, description: "Experimentar receitas novas"},
    {id: 98, status: FilterStatus.DONE, description: "Fazer pão caseiro"},
    {id: 99, status: FilterStatus.PENDING, description: "Preparar café especial"},
    {id: 100, status: FilterStatus.PENDING, description: "Tomar café com amigos"}
]

export function Home() {
    console.log('ITEMS', ITEMS);

    return (
        <View style={styles.container}>
            <Image source={require('@/assets/logo.png')} style={styles.logo}/>

            <View style={styles.form}>
                <Input placeholder="O que você precisa comprar?"/>

                <Button title="Entrar?"/>
            </View>

            <View style={styles.content}>
                <View style={styles.header}>
                    {
                        FILTER_STATUS.map((status) => (
                            <Filter key={status} status={status} isActive/>
                        ))
                    }

                    <TouchableOpacity style={styles.clearButton}>
                        <Text style={styles.clearText}>Limpar</Text>
                    </TouchableOpacity>
                </View>

                <FlatList
                    data={ITEMS}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => (
                        <Item
                            data={item}
                            onStatus={() => console.log("mudar o status")}
                            onRemove={() => console.log("remover")}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={() => <View style={styles.separator}/>}
                    contentContainerStyle={styles.listContent}
                    ListEmptyComponent={() => <Text style={styles.empty}>Nenhum item aqui =/</Text>}
                />


                {/*{ITEMS.map((value) => {*/}
                {/*    return (*/}
                {/*        <Item*/}
                {/*            key={value}*/}
                {/*            data={{status: FilterStatus.DONE, description: value.toString()}}*/}
                {/*            onStatus={() => console.log("mudar o status")}*/}
                {/*            onRemove={() => console.log("remover")}*/}
                {/*        />*/}
                {/*    );*/}
                {/*})}*/}
            </View>
        </View>
    );
}