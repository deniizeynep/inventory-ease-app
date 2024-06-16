// components/StockCalendar.tsx
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Calendar, DateObject } from 'react-native-calendars';
import { FontAwesome } from '@expo/vector-icons';

const StockCalendar: React.FC = () => {
  const handleDayPress = (day: DateObject) => {
    console.log('selected day', day);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Calendar
        markedDates={{
          '2024-05-10': {
            marked: true,
            dotColor: 'red',
            selected: true,
          },
        }}
        onDayPress={handleDayPress}
      />
      <View style={styles.eventContainer}>
        <Text style={styles.eventText}>
          May 10th beverage truck will arrive
        </Text>
        <FontAwesome name="exclamation" size={24} color="red" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },
  eventContainer: {
    marginTop: 16,
    padding: 16,
    backgroundColor: '#f0f4f8',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  eventText: {
    fontSize: 16,
  },
});

export default StockCalendar;
