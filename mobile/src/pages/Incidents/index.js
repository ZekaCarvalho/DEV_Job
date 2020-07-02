import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Incidents() {

  const navigation = useNavigation();

  function navigateToDetail(){
    navigation.navigate('Detail');
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}> 0 JOBs</Text>
        </Text>
      </View>

      <Text style={styles.title}>Bem-vindo, DEV!</Text>
      <Text style={styles.description}>Escolha um dos JOBs abaixo e
      ajude a tornar este projeto FANTÁSTICO.</Text>


      <FlatList
        data={[1, 2, 3]}
        style={styles.incidentList}
        keyExtractor={incident => String(incident)}
        showsVerticalScrollIndicator={false}

        renderItem={() => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>Contratante: </Text>
            <Text style={styles.incidentValue}>SoftXXX</Text>

            <Text style={styles.incidentProperty}>JOB: </Text>
            <Text style={styles.incidentValue}>Gerenciamento de estoque</Text>

            <Text style={styles.incidentProperty}>Remuneração: </Text>
            <Text style={styles.incidentValue}>R$ 4.000</Text>

            <TouchableOpacity
              style={styles.detailsButton}
              onPress={navigateToDetail}>
              <Text style={styles.detailsButtonText}> Ver mais detalhes </Text>
              <Feather name="arrow-right" size={18} color="#FFBB00" />
            </TouchableOpacity>
          </View>

        )}
      />

    </View>
  );
}