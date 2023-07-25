import React, {useState} from 'react';
import {Pressable} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {COLORS, SIZES} from '../../constants/theme';
import Icon from 'react-native-vector-icons/Ionicons';

export const DatePickerModal = ({date, setDate, open, setOpen}) => {
  return (
    <>
      <Pressable onPress={() => setOpen(true)}>
        <Icon
          name="calendar-number-outline"
          size={SIZES.xLarge}
          color={COLORS.tertiary}
        />
      </Pressable>
      <DatePicker
        modal
        locale="en"
        open={open}
        date={date}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
        minimumDate={new Date('1995-06-16')}
        maximumDate={new Date()}
        mode="date"
        theme="dark"
      />
    </>
  );
};

export default DatePickerModal;
