import React, {useState} from 'react';
import {View} from 'react-native';
import Icon from '../Icon/Icon';
import {SVG} from '../../assets/svg';
import {feedbackStars} from '../../data/appData';
import {STYLES} from '../../assets/theme';

const FeedbackStars = () => {
  const [starCount, setStarCount] = useState(0);
  const [isSelected, setIsSelected] = useState(false);
  const [selectedStar, setSelectedStar] = useState(0);

  const onPressStar = item => {
    const index = feedbackStars.indexOf(item);
    feedbackStars[index].isSelected = !feedbackStars[index].isSelected;
    setIsSelected(!isSelected);
    setSelectedStar(item.id);
    console.log('selectedStar', selectedStar, 'item.id', isSelected);
  };
  return (
    <>
      <View style={[STYLES.rowCenterBt]}>
        {feedbackStars ? (
          feedbackStars.map(item => {
            return (
              <Icon
                key={item.id}
                SVGIcon={
                  item.isSelected ? (
                    <SVG.starFilled
                      height={30}
                      width={30}
                      fill={'orange'}
                      iconLeft={true}
                      onPress={() => {
                        onPressStar(item);
                      }}
                    />
                  ) : (
                    <SVG.starUnfilled
                      height={30}
                      width={30}
                      fill={'black'}
                      iconLeft={true}
                      onPress={() => {
                        onPressStar(item);
                      }}
                    />
                  )
                }
              />
            );
          })
        ) : (
          <></>
        )}
      </View>
    </>
  );
};

export default FeedbackStars;
