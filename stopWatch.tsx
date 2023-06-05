import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {Styles} from '../styles/stopWatch.styles';
let lapData: Object[] = [];

const StopWatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [intervalID, setIntervalId] = useState(0);
  const [buttonName, setButtonName] = useState('Start');
  const [secondsLapData, setSecondsLapData] = useState('00');
  const [minutesLapData, setMinutesLapData] = useState('00');

  useEffect(() => {
    if (seconds === 59) {
      setMinutes(prevMins => prevMins + 1);
      setSeconds(0);
    }
  }, [seconds]);

  const returnId = () => {
    const intervalId = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);
    return intervalId;
  };
  
  const onStartClick = () => {
    if (buttonName === 'Start') {
      setButtonName('Stop');
      let returnValue = returnId();
      setIntervalId(returnValue);
    } else if (buttonName === 'Stop') {
      setButtonName('Reset');
      clearInterval(intervalID);
    } else {
      setButtonName('Start');
      setSeconds(0);
      setMinutes(0);
      setSecondsLapData('00');
      setMinutesLapData('00');
      lapData.length = 0;
    }
  };
  
  const onLapClick = () => {
    setMinutesLapData(minutes < 10 ? `0${minutes}` : minutes.toString());
    setSecondsLapData(seconds < 10 ? `0${seconds}` : seconds.toString());
    lapData.push({key: minutesLapData + ' : ' + secondsLapData});
  };
  
  const Item = (ld: any) => {
    return (
      <View style={Styles.flex}>
        <Text style={[Styles.fontSize, Styles.space]}>{ld.index}</Text>
        <Text style={[Styles.fontSize, Styles.space]}>{ld.ld.key}</Text>
      </View>
    );
  };
  
  return (
    <View style={Styles.mainContainer}>
      <Text style={Styles.header}>Stop Watch</Text>
      <View style={Styles.footer}>
        <TouchableOpacity
          style={
            buttonName === 'Start'
              ? Styles.start
              : buttonName === 'Stop'
              ? Styles.stop
              : Styles.reset
          }
          onPress={onStartClick}>
          <Text style={Styles.fontSize}>{buttonName}</Text>
        </TouchableOpacity>
      </View>
      <Text style={Styles.fontSize}>
        {minutes < 10 ? `0${minutes}` : minutes} :{' '}
        {seconds < 10 ? `0${seconds}` : seconds}
      </Text>
      <View style={Styles.footer}>
        <TouchableOpacity style={Styles.reset} onPress={onLapClick}>
          <Text style={Styles.fontSize}>Lap</Text>
        </TouchableOpacity>
      </View>
      <Text style={[Styles.fontSize, Styles.timeLapse]}>Time Lapse</Text>
      <FlatList
        data={lapData}
        renderItem={({item, index}) => <Item ld={item} index={index} />}
      />
    </View>
  );
};

export default StopWatch;
