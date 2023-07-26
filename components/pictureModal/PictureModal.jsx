import React, {useState} from 'react';
import {Modal, Text, Pressable, View, ScrollView, Image} from 'react-native';
import {COLORS} from '../../constants/theme';

const PictureModal = ({imageData}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpenModal = image => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedImage(null);
  };

  return (
    <View>
      {Array.isArray(imageData) &&
        imageData.map(image => (
          <Pressable key={image.date} onPress={() => handleOpenModal(image)}>
            <Image
              source={{uri: image.url}}
              style={{width: 100, height: 100}}
            />
          </Pressable>
        ))}

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={handleCloseModal}>
        <View style={{backgroundColor: COLORS.primaryTransp}}>
          {selectedImage && (
            <ScrollView>
              <Image
                source={{uri: selectedImage.url}}
                style={{width: '100%', height: '90%'}}
              />
              <Text>{selectedImage.title}</Text>
              <Text>{selectedImage.date}</Text>
              <Text>{selectedImage.explanation}</Text>
              <Text>{selectedImage.copyright}</Text>
            </ScrollView>
          )}
          <Pressable onPress={handleCloseModal}>
            <Text>Fermer</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
};

export default PictureModal;
