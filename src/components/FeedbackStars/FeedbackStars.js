// import React, {useState} from 'react';
// import {View} from 'react-native';
// import Icon from '../Icon/Icon';
// import {SVG} from '../../assets/svg';
// import {feedbackStars} from '../../data/appData';
// import {STYLES} from '../../assets/theme';

// const FeedbackStars = ({onChange}) => {
//   const [starCount, setStarCount] = useState(0);
//   const [isSelected, setIsSelected] = useState(false);
//   const onPressStar = item => {
//     const index = feedbackStars.indexOf(item);
//     feedbackStars[index].isSelected = !feedbackStars[index].isSelected;
//     setIsSelected(!isSelected);
//     if (item.isSelected === true) {
//       setStarCount(starCount + 1);
//       onChange(starCount);
//     } else {
//       setStarCount(starCount - 1);
//       onChange(starCount);
//     }
//   };
//   return (
//     <>
//       <View
//         style={[
//           STYLES.rowCenterBt,
//           STYLES.width('80%'),
//           STYLES.alignSelf('center'),
//         ]}>
//         {feedbackStars ? (
//           feedbackStars.map(item => {
//             return (
//               <Icon
//                 SVGIcon={
//                   <SVG.starFilled
//                     fill={item.isSelected ? 'gold' : 'lightgrey'}
//                     height={35}
//                     width={35}
//                   />
//                 }
//                 onPress={() => onPressStar(item)}
//               />
//             );
//           })
//         ) : (
//           <></>
//         )}
//       </View>
//     </>
//   );
// };

// export default FeedbackStars;


// FeedbackStars.js

import React from 'react';
import { View } from 'react-native';
import Icon from '../Icon/Icon';
import { SVG } from '../../assets/svg';
import { feedbackStars } from '../../data/appData';
import { STYLES } from '../../assets/theme';

const FeedbackStars = ({ onChange, starCount }) => {
  const onPressStar = item => {
    const index = feedbackStars.indexOf(item);
    item.isSelected = !item.isSelected;
    onChange(item.isSelected ? starCount + 1 : starCount - 1);
  };

  return (
    <View style={[STYLES.rowCenterBt, STYLES.width('80%'), STYLES.alignSelf('center')]}>
      {feedbackStars.map(item => (
        <Icon
          key={item.id} // Add key prop to avoid warning
          SVGIcon={
            <SVG.starFilled
              fill={item.isSelected ? 'gold' : 'lightgrey'}
              height={35}
              width={35}
            />
          }
          onPress={() => onPressStar(item)}
        />
      ))}
    </View>
  );
};

export default FeedbackStars;
