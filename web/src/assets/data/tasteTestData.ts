import ENFJ from '../images/tasteTestProfile/ENFJ.svg';
import ENFP from '../images/tasteTestProfile/ENFP.svg';
import ENTJ from '../images/tasteTestProfile/ENTJ.svg';
import ENTP from '../images/tasteTestProfile/ENTP.svg';
import ESFJ from '../images/tasteTestProfile/ESFJ.svg';
import ESFP from '../images/tasteTestProfile/ESFP.svg';
import ESTJ from '../images/tasteTestProfile/ESTJ.svg';
import ESTP from '../images/tasteTestProfile/ESTP.svg';
import INFJ from '../images/tasteTestProfile/INFJ.svg';
import INFP from '../images/tasteTestProfile/INFP.svg';
import INTJ from '../images/tasteTestProfile/INTJ.svg';
import INTP from '../images/tasteTestProfile/INTP.svg';
import ISFJ from '../images/tasteTestProfile/ISFJ.svg';
import ISFP from '../images/tasteTestProfile/ISFP.svg';
import ISTJ from '../images/tasteTestProfile/ISTJ.svg';
import ISTP from '../images/tasteTestProfile/ISTP.svg';

export const tasteTestQuestions = [
  {
    id: 1,
    question: '친구가 함께 전시를 보자고 한다.',
    answer1: '와, 좋아! 함께 보러 갈래. 전시 보고 저녁도 같이 먹자!',
    answer2:
      '음, 오늘은 혼자 보고 싶어. 전시를 혼자 느낄 땐 또 다른 매력이 있거든.',
    type: 'EI',
  },
  {
    id: 2,
    question:
      '어떤 전시를 갈까 찾아보던 중, SNS에 새로운 작가의 전시가 계속 보인다.',
    answer1: '와! 새로운 작가라면 바로 예약하고 가야지.',
    answer2: '음, 일단 티켓 예매는 보류하고, 작가에 대해 더 알아보고 결정할래.',
    type: 'EI',
  },
  {
    id: 3,
    question: '전시 갈 곳의 정보를 알아보려고 한다.',
    answer1: '즉흥적으로 돌아다니면서 찾아보자! 그게 더 재미있지 않을까?',
    answer2:
      '어떤 전시인지 찾아보고 가자. 그래야 내용을 놓치지 않고 볼 수 있으니까.',
    type: 'PJ',
  },
  {
    id: 4,
    question: '지하철에서 내려 전시장까지 걸어가는 길이다.',
    answer1: '혼자 넘어지는 상상을 하며, 피식 웃는다.',
    answer2: '경로를 이탈하지 않기 위해, 가는 길에만 집중한다.',
    type: 'NS',
  },
  {
    id: 5,
    question: '전시장에 도착했는데, 인기 전시라 사람들이 많다.',
    answer1: '와, 여기 북적북적하네! 사람들의 에너지가 더해져서 진짜 좋아!',
    answer2:
      '한적하고 조용한 분위기를 원했는데.. 조용히 감상하면서 힐링하고 싶어.',
    type: 'EI',
  },
  {
    id: 6,
    question: '전시장 입구에 들어왔다. 작품 감상은 어떻게 할까?',
    answer1: '그냥 마음이 이끄는 대로 둘러보고 감상해야지.',
    answer2:
      '본격적인 감상 전에 어떤 작품을 먼저 볼지 계획을 세워서 순서대로 봐야겠어.',
    type: 'PJ',
  },
  {
    id: 7,
    question: '한 인물이 피아노를 치고 있는 한 작품 앞에 섰다.',
    answer1:
      '왜 피아노를 치고 있을까? 슬픈 감정을 음악으로 승화하려 하는 건가?',
    answer2:
      '이 작품은 정말 사실적이고 흥미로워. 어떤 기법으로 그림을 그렸을까?',
    type: 'FT',
  },
  {
    id: 8,
    question: '매우 압도적인 거대한 작품 앞에 섰습니다.',
    answer1: '와, 너무 압도적이다. 저걸 사람이 만들었다고?',
    answer2: '이렇게 큰 작품으로 작가가 전하고자 하는 메시지가 뭘까?',
    type: 'FT',
  },
  {
    id: 9,
    question: '전시 관람 후, 사색에 빠진다.',
    answer1: '내 감정과 영감을 풍부하게 할 수 있어서 좋았어',
    answer2: '그 작품에는 왜 이런 재료와 기법을 썼을까?',
    type: 'FT',
  },
  {
    id: 10,
    question: '전시를 다 보니 배가 고파서 식당으로 자리를 옮기기로 한다.',
    answer1: '바로 나가서 발이 이끄는 대로 가볼까?',
    answer2: '식당을 알아보고 나가야겠다. 브레이크타임일 수도 있어.',
    type: 'PJ',
  },
  {
    id: 11,
    question: '집에 돌아온 후, 전시 기록을 한다.',
    answer1: '감상하면서 떠오른 내 생각과 감동 위주로 적어야지',
    answer2: '가장 인상깊었던 작품과 설명 위주로 적어야지',
    type: 'NS',
  },
  {
    id: 12,
    question: '침대에 누워 하루를 되새겨본다.',
    answer1: '오늘 있었던 일들 관련된 상상으로 잠에 들지 못한다.',
    answer2: '너무 피곤한 나머지, 잠에 바로 든다.',
    type: 'NS',
  },
];

export const tasteTestType = [
  {
    id: 1,
    type: 'ISTJ',
    title1: '감각적인 시선의 소유자',
    title2: '클로드 모네형',
    explain:
      '전시장을 천천히 거닐며 각 작품의 세세한 디테일을 꼼꼼히 살피며, 정확하게 기억합니다. 전시물의 배치와 조명에 대한 감각적인 이해를 가지고 있습니다.',
    fit: 'ISFJ',
    notFit: 'ENFP',
    image: ISTJ,
  },
  {
    id: 2,
    type: 'ISFJ',
    title1: '감정에 이입하는 순정파',
    title2: '빈센트 반 고흐형',
    explain:
      '각 작품에 깊은 감동을 받아 전시장에서 혼잣말로 감탄을 표현합니다. 작품의 감성에 공감하며, 감정이입을 통해 작품의 메시지를 간접적으로 체험합니다.',
    fit: 'ISTJ',
    notFit: 'ENTP',
    image: ISFJ,
  },
  {
    id: 3,
    type: 'INFJ',
    title1: '상징에 빠진 사색가',
    title2: '레오나르도 다빈치형',
    explain:
      '작품들 사이의 유기적인 연결을 찾아내며, 예술가의 의도를 깊이 이해하려고 노력합니다. 전시물의 숨겨진 의미와 상징성에 관심을 가지고 있습니다.',
    fit: 'INFP',
    notFit: 'ESTP',
    image: INFJ,
  },
  {
    id: 4,
    type: 'INTJ',
    title1: '변화를 분석하는 혁신가',
    title2: '파블로 피카소형',
    explain:
      '전시장을 돌아다닐 때 각 작품의 혁신적인 표현을 주목합니다. 예술의 변화와 흐름을 분석하여, 작품들이 어떻게 시대를 변화시켰는지 고찰합니다.',
    fit: 'INTP',
    notFit: 'ESFP',
    image: INTJ,
  },
  {
    id: 5,
    type: 'ISTP',
    title1: '기술, 재료에 집중하는 분석가',
    title2: '미켈란젤로형',
    explain:
      '작품의 다양한 기술과 재료에 주목하며, 작품을 만들 때의 예술가의 손놀림과 기술적인 특성에 관심을 가지고 있습니다.',
    fit: 'ISFP',
    notFit: 'ENFJ',
    image: ISTP,
  },
  {
    id: 6,
    type: 'ISFP',
    title1: '정서적 표현에 공감하는 감성파',
    title2: '프리다칼로형',
    explain:
      '작품들에 담긴 감성을 감지하고, 예술가의 정서적인 표현에 공감합니다. 전시물을 통해 감정의 흐름을 따라가며 작품을 감상합니다.',
    fit: 'ISTP',
    notFit: 'ENTJ',
    image: ISFP,
  },
  {
    id: 7,
    type: 'INFP',
    title1: '작품과 한 몸이 되는 물아일체형',
    title2: '조지아 오키프형',
    explain:
      '전시장에서 작품의 아름다움과 심미성에 매료되며, 작품 속에 담긴 감정의 깊이를 탐구합니다. 예술가의 정신 세계에 몰입합니다.',
    fit: 'ENFP',
    notFit: 'ESTJ',
    image: INFP,
  },
  {
    id: 8,
    type: 'INTP',
    title1: '논리를 분석하는 철학가',
    title2: '살바도르 달리형',
    explain:
      '작품들의 논리와 비전을 분석하며, 예술가가 작품에 담고자 하는 철학적인 측면을 고찰합니다.',
    fit: 'ENTP',
    notFit: 'ESFJ',
    image: INTP,
  },
  {
    id: 9,
    type: 'ESTP',
    title1: '독창성을 발휘하는 자유로운 탐험가',
    title2: '잭슨 폴록형',
    explain:
      '작품들 사이를 활발하게 이동하며, 작품에 담긴 에너지와 독창성을 경험합니다. 전시물과 상호작용하면서 자유로운 감각을 느낍니다.',
    fit: 'ISTP',
    notFit: 'INFJ',
    image: ESTP,
  },
  {
    id: 10,
    type: 'ESFP',
    title1: '화려함에 매혹되는 심미주의',
    title2: '앤디워홀형',
    explain:
      '전시물의 다양한 스타일과 특색을 즐기며, 작품의 화려함과 독창성에 매혹됩니다.',
    fit: 'ISFP',
    notFit: 'INTJ',
    image: ESFP,
  },
  {
    id: 11,
    type: 'ENFP',
    title1: '창의성, 다양성을 즐기는 호기심천국',
    title2: '빈센트 미넬리형',
    explain:
      '전시장을 즐겁게 돌아다니면서, 예술가의 창의성과 다양성을 즐깁니다. 작품의 다양한 면면에 관심을 갖고 있습니다. 종종 감상자들에게 말을 걸기도 합니다.',
    fit: 'INFP',
    notFit: 'ISTJ',
    image: ENFP,
  },
  {
    id: 12,
    type: 'ENTP',
    title1: '독특함에 주목하는 스페셜리스트',
    title2: '장미셸 바스키아형',
    explain:
      '전시물의 독특한 표현과 예술의 경계를 뛰어넘는 요소에 주목하며, 작품에 대한 토론과 논쟁을 즐깁니다.',
    fit: 'INTP',
    notFit: 'ISFJ',
    image: ENTP,
  },
  {
    id: 13,
    type: 'ESTJ',
    title1: '작품의 역사에 집중하는 학자',
    title2: '렘브란트형',
    explain:
      '작품들의 조직과 표현된 주제에 집중하며, 예술의 역사와 작품들이 어떻게 관리되어 왔는지를 탐험합니다.',
    fit: 'ISTJ',
    notFit: 'INFP',
    image: ESTJ,
  },
  {
    id: 14,
    type: 'ESFJ',
    title1: '사회적 메시지에 집중하는 정치가',
    title2: '노먼 록웰형',
    explain:
      '작품들이 사회적인 메시지를 어떻게 전달하는지에 주목하며, 전시물 속 인물들의 이야기에 공감합니다.',
    fit: 'ISFJ',
    notFit: 'INTP',
    image: ESFJ,
  },
  {
    id: 15,
    type: 'ENFJ',
    title1: '비전을 바라보는 예언가',
    title2: '마우리치오 카텔란형',
    explain:
      '예술가의 예술적 비전과 사회적 메시지를 중요시하며, 작품의 아름다움과 깊은 의미를 탐험합니다.',
    fit: 'INFJ',
    notFit: 'ISTP',
    image: ENFJ,
  },
  {
    id: 16,
    type: 'ENTJ',
    title1: '작품으로 사회를 바라보는 분석가',
    title2: '디에고 리베라형',
    explain:
      '작품들이 어떻게 사회와 문화를 형성하는지를 고찰하며, 예술이 사회에 미치는 영향을 분석합니다.',
    fit: 'INTJ',
    notFit: 'ISFP',
    image: ENTJ,
  },
];
