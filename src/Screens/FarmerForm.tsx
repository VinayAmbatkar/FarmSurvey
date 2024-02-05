import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, Button, StyleSheet } from 'react-native';

const FarmerForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [pesticideName, setPesticideName] = useState('');
  const [pesticideCategory, setPesticideCategory] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState('');
  const [productRate, setProductRate] = useState('');

  const handleSubmit = () => {
    // Create form data object
    const formData = {
      firstName,
      lastName,
      phoneNumber,
      email,
      pesticideName,
      pesticideCategory,
      description,
      rating,
      productRate,
    };

    // Send form data using POST request (Example: using fetch)
    fetch('https://example.com/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle response data (if needed)
        console.log('Form submitted successfully:', data);
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
      });
  };

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <Text style={styles.sectionHeader}>Farmer Information:</Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <View style={styles.separator} />

      <Text style={styles.sectionHeader}>Pesticide Information:</Text>
      <TextInput
        style={styles.input}
        placeholder="Pesticide Name"
        value={pesticideName}
        onChangeText={setPesticideName}
      />
      <TextInput
        style={styles.input}
        placeholder="Pesticide Category"
        value={pesticideCategory}
        onChangeText={setPesticideCategory}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Rating"
        value={rating}
        onChangeText={setRating}
      />
      <TextInput
        style={styles.input}
        placeholder="Product Rate"
        value={productRate}
        onChangeText={setProductRate}
      />

      <Button title="Submit" onPress={handleSubmit} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  separator: {
    marginVertical: 20,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
});

export default FarmerForm;
