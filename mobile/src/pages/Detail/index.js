import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import logoImg from '../../assets/logo.png';

import styles from './styles';


export default function Detail() {
  return (
    <View style={styles.container} >
      <View style={styles.header}>
        <Image source={logoImg} />

        <TouchableOpacity onPress={() => { }}>

          <Feather name="arrow-left" size={28} color="#FFBB00" />

        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
        <Text style={styles.incidentProperty}>Contratante: </Text>
        <Text style={styles.incidentValue}>SoftXXX</Text>

        <Text style={styles.incidentProperty}>JOB: </Text>
        <Text style={styles.incidentValue}>Gerenciamento de estoque</Text>

        <Text style={styles.incidentProperty}>Remuneração: </Text>
        <Text style={styles.incidentValue}>R$ 4.000</Text>
      </View>


      <View style={styles.contactBox}>
        <Text style={styles.detailsTitle}>Este JOB é pra você.</Text> 
        <Text style={styles.detailsTitle}>Candidate-se!</Text> 


        <Text style={styles.detailsDescription}>Envie seu currículo / portifólio</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={ () => {} }>
            <Text style={styles.actionText}>WhatsApp</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.action} onPress={ () => {} }>
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>
        </View>


      </View>

    </View>
  );
}