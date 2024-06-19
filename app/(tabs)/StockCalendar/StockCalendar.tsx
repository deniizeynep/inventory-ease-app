import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  TextInput,
  FlatList,
  ScrollView,
} from "react-native";
import { Calendar } from "react-native-calendars";
import { FontAwesome } from "@expo/vector-icons";

const StockCalendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [notes, setNotes] = useState<{ [date: string]: string[] }>({});
  const [inputText, setInputText] = useState("");

  const handleDayPress = (day: DateObject) => {
    const selectedDateString = day.dateString;
    setSelectedDate(selectedDateString);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedDate(null);
    setModalVisible(false);
    setInputText(""); // Not giriş alanını sıfırla
    updateNotes(selectedDate, inputText); // Notları güncelle
  };

  const updateNotes = (date: string | null, note: string) => {
    if (date && note.trim() !== "") {
      const updatedNotes = { ...notes };
      const selectedDateNotes = updatedNotes[date] || [];
      updatedNotes[date] = [...selectedDateNotes, note.trim()];
      setNotes(updatedNotes);
    }
  };

  const renderNotes = () => {
    if (!selectedDate || !notes[selectedDate]) {
      return null;
    }

    return (
      <View style={styles.notesContainer}>
        <FlatList
          data={notes[selectedDate]}
          renderItem={({ item }) => (
            <View style={styles.noteItem}>
              <Text>{item}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Calendar
        markedDates={notes} // Notları işaretlenmiş tarihler olarak göster
        onDayPress={handleDayPress}
      />
      {renderNotes()}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Seçilen Tarih: {selectedDate}</Text>
            <ScrollView style={styles.notesContainer}>
              {(notes[selectedDate] || []).map((note, index) => (
                <View key={index} style={styles.noteItem}>
                  <Text>{note}</Text>
                </View>
              ))}
            </ScrollView>
            <TextInput
              style={styles.input}
              placeholder="Notunuzu girin..."
              value={inputText}
              onChangeText={setInputText}
              onSubmitEditing={updateNotes(selectedDate, inputText)}
            />
            <TouchableOpacity
              onPress={updateNotes(selectedDate, inputText)}
              style={styles.saveButton}
            >
              <Text style={styles.saveButtonText}>Kaydet</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Kapat</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "white",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    width: "80%",
    maxHeight: "80%",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  notesContainer: {
    maxHeight: 200,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: "#cccccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  saveButton: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    alignSelf: "center",
    marginBottom: 10,
  },
  saveButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  noteItem: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  closeButton: {
    backgroundColor: "#d9534f",
    padding: 10,
    borderRadius: 5,
    alignSelf: "flex-end",
  },
  closeButtonText: {
    color: "#ffffff",
    fontSize: 16,
  },
});

export default StockCalendar;
