import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity} from 'react-native';

export default function Inicio() {
    // Array para duplicar o bloco do depoimento
    const depoimentosCount = 5;

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <Text style={styles.titulo}>Minhas consultas</Text>

                <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Agendar outra consulta</Text>
                    </TouchableOpacity>

                    <View style={[styles.depoimentos, styles.borderBox]}>

                        <View style={styles.depoimentoBlock}>
                            <Image source={require('../../assets/images/Mulher1.png')} style={styles.image} />
                            <View style={styles.textContainer}>
                                <Text style={styles.depoimentoText}>Dra. Ana Lúcia</Text>
                                <Text style={[styles.depoimentoText, styles.depoimentoTextSecundario]}>Angiologista</Text>
                                <Text style={[styles.depoimentoText, styles.depoimentoTextSecundario]}>03/03/2023</Text>
                            </View>
                        </View>

                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>

                {Array.from({ length: depoimentosCount }).map((_, index) => (
                    <View style={styles.depoimentos}>


                        <View key={index} style={styles.depoimentoBlock}>
                            <Image source={require('../../assets/images/Mulher1.png')} style={styles.image} />
                            <View style={styles.textContainer}>
                                <Text style={styles.depoimentoText}>Dra. Ana Lúcia</Text>
                                <Text style={[styles.depoimentoText, styles.depoimentoTextSecundario]}>Angiologista</Text>
                            </View>
                        </View>

                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Agendar consulta</Text>
                        </TouchableOpacity>
                    </View>
                ))}
                <Text style={{marginTop: 120}}/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5fcff',
        paddingHorizontal: 20,
    },
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    textBottom: {
        color: '#6B6E71',
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 10,
    },
    borderBox:{
        borderBottomColor: '#90989F',
        borderBottomWidth: 1,
    },
    texts: {
        fontSize: 19,
        color: '#90989F',
        padding: 15,
        marginBottom: 0,
        textAlign: 'left',
        maxWidth: '100%',
        alignSelf: 'center',
    },
    button: {
        backgroundColor: '#0B3B60',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        textAlign: 'center',
        width: '100%',
        height: 48,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
    },
    form: {
        width: '100%',
        maxWidth: 400,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#FFFFFF',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignSelf: 'center',
        marginBottom: 20,
        marginTop: 30,
    },
    input: {
        width: '100%',
        height: 47,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,
        marginTop: 14,
        borderRadius: 5,
        backgroundColor: '#F8F8F8',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    titulo: {
        fontSize: 24,
        color: "#339CFF",
        margin: 10,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    depoimentos: {
        width: '100%',
        maxWidth: 400,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#FFFFFF',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignSelf: 'center',
        marginTop: 25,
    },
    depoimentoTextSecundario: {
        fontWeight: 'normal', // Remover o negrito para este estilo
    },
    depoimentoBlock: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: -5,
        paddingBottom: 10,
        justifyContent: 'center',
    },
    image: {
        width: 80,
        height: 80,
        marginRight: 10,
    },
    textContainer: {
        alignItems: 'center',
    },
    depoimentoText: {
        fontSize: 16,
        color: '#6B6E71',
        fontWeight: 'bold',
        marginBottom: 5,
    },
});
