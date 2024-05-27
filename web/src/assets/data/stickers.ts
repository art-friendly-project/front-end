import angry from 'assets/images/sticker/angry.svg';
import arrow from 'assets/images/sticker/arrow.svg';
import check from 'assets/images/sticker/check.svg';
import circle from 'assets/images/sticker/circle.svg';
import cloud from 'assets/images/sticker/cloud.svg';
import clover from 'assets/images/sticker/clover.svg';
import flower from 'assets/images/sticker/flower.svg';
import fourDot from 'assets/images/sticker/fourDot.svg';
import heart from 'assets/images/sticker/heart.svg';
import normal from 'assets/images/sticker/normal.svg';
import shine from 'assets/images/sticker/shine.svg';
import smile from 'assets/images/sticker/smile.svg';
import spring from 'assets/images/sticker/spring.svg';
import star from 'assets/images/sticker/star.svg';
import sun from 'assets/images/sticker/sun.svg';
import vertical from 'assets/images/sticker/vertical.svg';

export interface stickerType {
  SMILE: string;
  NORMAL: string;
  ANGRY: string;
  CIRCLE: string;
  HEART: string;
  STAR: string;
  CLOVER: string;
  CLOUD: string;
  SUN: string;
  FLOWER: string;
  SHINE: string;
  CHECK: string;
  FOURDOT: string;
  ARROW: string;
  SPRING: string;
  VERTICAL: string;
  [key: string]: string; // 인덱스 시그니처 추가
}

export const stickerImgs: stickerType = {
  SMILE: smile,
  NORMAL: normal,
  ANGRY: angry,
  CIRCLE: circle,
  HEART: heart,
  STAR: star,
  CLOVER: clover,
  CLOUD: cloud,
  SUN: sun,
  FLOWER: flower,
  SHINE: shine,
  CHECK: check,
  FOURDOT: fourDot,
  ARROW: arrow,
  SPRING: spring,
  VERTICAL: vertical,
};

export const stickers = [
  smile,
  normal,
  angry,
  circle,
  heart,
  star,
  clover,
  cloud,
  sun,
  flower,
  shine,
  check,
  fourDot,
  arrow,
  spring,
  vertical,
];
