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

const StockCalendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [notes, setNotes] = useState<{ [key: string]: string[] }>({});
  const [inputText, setInputText] = useState("");

  const handleDayPress = (day: { dateString: any }) => {
    const selectedDateString = day.dateString;
    setSelectedDate(selectedDateString);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const updateNotes = () => {
    if (selectedDate && inputText.trim() !== "") {
      setNotes((prevNotes) => {
        const clonedNotes = Object.assign({}, prevNotes);
        if (!clonedNotes[selectedDate]) {
          clonedNotes[selectedDate] = [];
        }
        clonedNotes[selectedDate].push(inputText);
        return clonedNotes;
      });
      setInputText("");
    }
  };

  const renderNotes = () => {
    if (!selectedDate || !notes[selectedDate]) {
      return null;
    }

    const dates = Object.keys(notes);

    return (
      <ScrollView style={styles.notesContainer}>
        <FlatList
          data={dates}
          renderItem={({ item: date }) => (
            <FlatList
              data={notes[date]}
              renderItem={({ item }) => (
                <View style={styles.noteItem}>
                  <Text style={styles.noteItemDate}>{date}</Text>
                  <Text>{item}</Text>
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          )}
          keyExtractor={(date) => date}
        />
      </ScrollView>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Calendar markedDates={notes} onDayPress={handleDayPress} />
      {renderNotes()}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Selected Date: {selectedDate}</Text>
            <ScrollView style={styles.notesContainer}>
              {(notes[selectedDate || ""] || []).map(
                (
                  note:
                    | string
                    | number
                    | boolean
                    | React.ReactElement<
                        any,
                        string | React.JSXElementConstructor<any>
                      >
                    | Iterable<React.ReactNode>
                    | React.ReactPortal
                    | null
                    | undefined,
                  index: React.Key | null | undefined
                ) => (
                  <View key={index} style={styles.noteItem}>
                    <Text>{note}</Text>
                  </View>
                )
              )}
            </ScrollView>
            <TextInput
              style={styles.input}
              placeholder="Enter your note..."
              value={inputText}
              onChangeText={setInputText}
            />
            <View style={styles.buttons}>
              <TouchableOpacity
                onPress={() => {
                  updateNotes();
                  setModalVisible(false);
                }}
                style={styles.saveButton}
              >
                <Text style={styles.saveButtonText}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
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
    height: "100%",
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
    marginBottom: 10,
  },
  notesContainer: {
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: "#13274F",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  noteItem: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    display: "flex",
  },
  saveButton: {
    backgroundColor: "#13274F",
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
  closeButton: {
    backgroundColor: "#960018",
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  saveButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },

  closeButtonText: {
    color: "#ffffff",
    fontSize: 16,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
  },
  noteItemDate: {
    marginBottom: 5,
    fontWeight: "bold",
    marginEnd: 5,
    borderBottomColor: "#b8b8b5",
    borderBottomWidth: 1,
  },
});

export default StockCalendar;
