import {SVG} from '../assets/svg';
import {LABELS} from '../labels';

export const feedbackStars = [
  {
    id: 1,
    isSelected: false,
  },
  {
    id: 2,
    isSelected: false,
  },
  {
    id: 3,
    isSelected: false,
  },
  {
    id: 4,
    isSelected: false,
  },
  {
    id: 5,
    isSelected: false,
  },
];
export const ParkingDuration = [
  {
    id: 1,
    value: LABELS.oneHour,
  },
  {
    id: 2,
    value: LABELS.twoHours,
  },
  {
    id: 3,
    value: LABELS.threeHours,
  },
  {
    id: 4,
    value: LABELS.fourHours,
  },
  {
    id: 5,
    value: LABELS.fiveHours,
  },
  {
    id: 6,
    value: LABELS.sixHours,
  },
];
export const PaymentData = [
  {
    id: 1,
    title: LABELS.jazzCash,
    icon: SVG.jazCash,
    isSelected: false,
  },
  {
    id: 2,
    title: LABELS.easyPaisa,
    icon: SVG.easyPaisa,
    isSelected: false,
  },
  {
    id: 3,
    title: LABELS.stripe,
    icon: SVG.stripe,
    isSelected: false,
  },
];
export const horizontalEntryExitDirection = [
  {
    id: 1,
    title: LABELS.top,
    isSelected: false,
  },
  {
    id: 2,
    title: LABELS.bottom,
    isSelected: false,
  },
  {
    id: 3,
    title: LABELS.center,
    isSelected: false,
  },
];
export const verticalEntryExitDirection = [
  {
    id: 1,
    title: LABELS.top,
    isSelected: false,
  },
  {
    id: 2,
    title: LABELS.bottom,
    isSelected: false,
  },
  {
    id: 3,
    title: LABELS.center,
    isSelected: false,
  },
];
export const rowsPosition = [
  {
    id: 1,
    title: LABELS.horizontal,
    isSelected: false,
  },
  {
    id: 2,
    title: LABELS.vertical,
    isSelected: false,
  },
];
export const slotsStatus = [
  {
    id: 1,
    value: 'available',
    isSelected: true,
  },
  {
    id: 2,
    value: 'booked',
    isSelected: false,
  },
  {
    id: 3,
    value: 'occupied',
    isSelected: false,
  },
];
export const vendorBookingsType = [
  {
    id: 1,
    value: 'accepted',
    isSelected: true,
  },
  {
    id: 2,
    value: 'rejected',
    isSelected: false,
  },
];
export const userBookingsType = [
  {
    id: 1,
    value: 'upcoming',
    isSelected: true,
  },
  {
    id: 2,
    value: 'past',
    isSelected: false,
  },
];