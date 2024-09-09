import search2 from 'assets/images/etc/search2.svg';

export interface Gallery {
  id: number;
  name: string;
  sort: string;
  location: string;
  detailLocation: string;
  phone: string;
  link: string;
  introduce: string;
  imgUrl: string;
}

export type GalleryData = Record<string, Record<string, Gallery[]>>;

export const gallerys: GalleryData = {
  서울특별시: {
    강남구: [
      {
        id: 1,
        name: 'K현대미술관',
        imgUrl: search2,
        sort: '미술관',
        location: '서울특별시 강남구',
        detailLocation: '서울특별시 강남구 선릉로 807',
        phone: '02-2138-0952',
        link: 'https://www.kmcaseoul.org/',
        introduce:
          'K현대미술관은 하루 유동인구 9천여명, 압구정 중심가에 위치한 6개층 1500평의 전시장으로 강남 최대 규모의 사립미술관입니다. 문화를 활성화시키는 국내외 아티스트들을 지속적으로 발굴하고, 아티스트들이 수준 높은 예술을 창작 할 수 있도록 협업을 통해 다양한 전시를 진행하여 현대 미술에 대한 문화가치를 보존하고 촉진시키는 것을 목표로 합니다. ',
      },
      {
        id: 2,
        name: '마이아트뮤지엄',
        imgUrl: search2,
        sort: '미술관',
        location: '서울특별시 강남구',
        detailLocation: '서울특별시 강남구 테헤란로 518, 섬유센터빌딩 B1층',
        phone: '02-567-8878',
        link: 'http://myartmuseum.co.kr/',
        introduce:
          '현대인들이 보다 쉽게 문화예술을 즐길 수 있도록 ‘도심 속 예술이 있는 감성공간’ 이라는 비전 아래 다양하고 수준 높은 전시를 즐길 수 있습니다. 서울 강남구 삼성동 도심 속 3,400m2의 면적에 900m2 크기의 대형 미술 전시 공간으로 로비 라운지, 아트샵, 카페, 세미나 룸인 오픈살롱, 컬쳐살롱, 교육 공간 에듀살롱, 레스토랑 등 각종 편의시설이 갖추어진 미술관 입니다.',
      },
      {
        id: 3,
        name: '플랫폼엘',
        imgUrl: search2,
        sort: '미술관',
        location: '서울특별시 강남구',
        detailLocation: '서울특별시 강남구 언주로133길 11',
        phone: '02-6929-4470',
        link: 'https://platform-l.org/',
        introduce:
          '플랫폼엘 Platform-L 은 동시대 예술가들의 창의적인 시도를 통해 관객들에게 다양한 예술체험을 제공하고 상상과 영감이 있는 풍요로운 사회에 기여하고자 설립한 아트센터입니다. 2016년 봄 개관한 플랫폼엘은 갤러리와 라이브홀, 중정의 열린 공간, 렉쳐룸 등 시설을 갖추고 있으며, 전시와 퍼포먼스, 영상 등 다양한 장르와 매체의 작업들을 담아내고 있습니다.',
      },
    ],
    강북구: [
      {
        id: 1,
        name: '북서울꿈의숲 상상톡톡미술',
        imgUrl: search2,
        sort: '미술관',
        location: '서울특별시 강북구',
        detailLocation: '서울특별시 강북구 월계로 173',
        phone: '02-2289-5445',
        link: 'https://www.sejongpac.or.kr/dfac/main/main.do',
        introduce:
          '국내 유일의 ‘자연 속 어린이 미술관’으로 자연이 주는 순수한 매력을 미술이라는 매개로 재발견할 수 있는 공간입니다.',
      },
    ],
    강서구: [
      {
        id: 1,
        name: '겸재정선미술관',
        imgUrl: search2,
        sort: '미술관',
        location: '서울특별시 강서구',
        detailLocation: '서울특별시 강서구 양천로47길 36',
        phone: '02-2659-2206',
        link: 'https://culture.gangseo.seoul.kr/gsfc/main/contents.do?menuNo=800054',
        introduce:
          '겸재정선미술관은 진경산수화풍의 완성자이자 대성자인 겸재(謙齋) 정선(鄭敾, 1676~1759)의 예술적 업적을 기리고 진경문화의 계승∙발전을 위하여 강서구 가양동 양천현아지 인근에 건립되어 2009년 4월 개관하였다. 겸재 정선은 우리 산천을 표현하는 데 가장 적합한 진경산수화풍을 완성한 조선후기 대표화가로, 이러한 그의 화업을 기려 전시실은 정선의 생애와 작품세계 등을 재조명해 볼 수 있는 공간 [겸재정선기념실]과 강서구의 고유한 역사를 살펴볼 수 있는 공간 [양천현아실], 그리고 [기획전시실] 등으로 구성되어 있다. 앞으로 겸재정선미술관은 겸재 정선 연구의 메카이자, 인근의 허준박물관, 양천향교, 양천고성지 등 인접해있는 역사문화자원과 연계하여 복합예술문화기관으로 자리잡게 될 것이다.',
      },
      {
        id: 2,
        name: '스페이스K 서울',
        imgUrl: search2,
        sort: '미술관',
        location: '서울특별시 강서구',
        detailLocation: '서울특별시 강서구 마곡중앙8로 32',
        phone: '02-3665-8918',
        link: 'https://www.spacek.co.kr/index.do',
        introduce:
          '새로운 시각예술의 흐름을 소개하여 문화적 경험으로 삶을 풍요롭게 하는 예술나눔공간 깊이 있는 문화예술 지원과 지역민을 위한 문화예술 나눔을 목표로 운영하고 있습니다. 스페이스K는 예술가의 전시 지원을 통해 창작력을 고취 시키고, 지역민들에게 수준 높은 전시로 예술나눔 실천을 위해 노력하고 있습니다.',
      },
    ],
    관악구: [
      {
        id: 1,
        name: '서울시립 남서울미술관',
        imgUrl: search2,
        sort: '미술관',
        location: '서울특별시 관악구',
        detailLocation: '서울특별시 관악구 남부순환로 2076',
        phone: '02–2124–8800',
        link: 'https://sema.seoul.go.kr/kr/visit/namseoul',
        introduce:
          '남서울미술관은 역사의 정취가 가득한, 오래 머물고 싶은 미술관입니다. 미술관이 둥지를 튼 이곳은 대한제국(1897~1910) 시절 벨기에 영사관으로 사용된 건물(사적 제254호)로, 1905년 회현동에 준공되어 1983년 지금의 남현동으로 옮겨졌습니다. 길게 뻗은 복도를 중심으로 양옆으로 자유롭게 배열된 두 개 층의 방들에서는 다양한 층위의 관람객에 특화된 공공 프로그램을 소개합니다.',
      },
      {
        id: 2,
        name: '서울대학교미술관',
        imgUrl: search2,
        sort: '미술관',
        location: '서울특별시 관악구',
        detailLocation: '서울특별시 관악구 관악로 1, 서울대학교 151동',
        phone: '02-880-9504',
        link: 'http://www.snumoa.org/',
        introduce:
          '서울대학교미술관은 학내 구성원과 일반 대중들의 창의성 함양을 위한 친절한 동반자입니다. 서울대학교미술관은 한국 현대미술의 중요한 궤적과 의미 있는 움직임을 깊게 조망하고 추동합니다. 서울대학교미술관은 예술의 가치와 역할, 그리고 가능성을 진작시키는 열린 교류의 장입니다.',
      },
    ],
    금천구: [
      {
        id: 1,
        name: '아트센터 예술의 시간',
        imgUrl: search2,
        sort: '미술관',
        location: '서울특별시 금천구',
        detailLocation: '서울특별시 금천구 범안로9길 23',
        phone: '02-6952-0005',
        link: 'http://artmoment.org/',
        introduce:
          '서울시 금천구에 위치한 아트센터 예술의 시간은 현대인들에게 동시대 시각예술을 의미 있게 경험할 수 있는 시간을 제공하고자 ㈜영일프레시젼이 설립한 문화예술 공간입니다.',
      },
    ],
    노원구: [
      {
        id: 1,
        name: '서울시립 북서울미술관',
        imgUrl: search2,
        sort: '미술관',
        location: '서울특별시 노원구',
        detailLocation: '서울특별시 노원구 동일로 1238',
        phone: '02-2124-8800',
        link: 'https://sema.seoul.go.kr/kr/visit/bukseoul',
        introduce:
          '북서울미술관은 지역 공동체와 상생하는 미술관입니다. 갈대 언덕에서 비롯한 지명을 살린 노원구에 위치한 북서울미술관은 공원 산책로와 미술관 출입구를 연결한 개방형 건물입니다. 야외 조각 전시를 비롯해 미로형으로 설계된 전시실, 아트라이브러리, 카페, 다목적 홀에서 이곳을 주로 찾는 가족 단위 관람객이 즐길 수 있는 다양한 프로그램이 운영됩니다.',
      },
    ],
    성동구: [
      {
        id: 1,
        name: '헬로우뮤지엄',
        imgUrl: search2,
        sort: '미술관',
        location: '서울특별시 성동구',
        detailLocation: '서울특별시 성동구 성수일로12길 20',
        phone: '0507-1387-4222',
        link: 'http://www.hellomuseum.com/',
        introduce:
          '하나로 연결된 세상에서 어린이의 예술 감수성을 키우는 에코미술관 헬로우뮤지움은 2007년 개관한 국내 최초 어린이미술관으로 서울시 등록 미술관이자 세계어린이박물관협회 소속 미술관입니다.',
      },
      {
        id: 2,
        name: '뚝섬미술관',
        imgUrl: search2,
        sort: '미술관',
        location: '서울특별시 성동구',
        detailLocation: '서울특별시 성동구 아차산로 33 지하 1층',
        phone: '02-555-5035',
        link: 'https://ttukseommuseum.modoo.at/',
        introduce: '문화예술을 통해 더 나은 세상을 만들어가는 미술관',
      },
    ],
    성북구: [
      {
        id: 1,
        name: '성북구립미술관',
        imgUrl: search2,
        sort: '미술관',
        location: '서울특별시 성북구',
        detailLocation: '서울특별시 성북구 성북로 134',
        phone: '02-6925-5011',
        link: 'https://sma.sbculture.or.kr/sma/index.do',
        introduce:
          '성북 지역은 한국의 근현대 미술이 태동할 무렵무터 수많은 작가들이 창작의 고향으로 뿌리를 내린 곳으로, 한국 미술사 속에서 중요한 가치를 갖고 있습니다. 시간의 오랜 축적 속에 작가들의 삶과 예술이 깃들어 있으며, 이는 곧 오늘날 성북구립미술관의 탄생을 예견하는 준비의 과정이었다고 할 수 있습니다. 성북구립미술관은 또한 자치구 최초로 건립된 미술관이라는 소중한 의미를 갖습니다. 이는 미술관이 우리에게 더 가까이 다가가고 있음을 의미하며, 보다 친밀한 이해를 가능케 하는 내실 있는 미술관 시대의 개막을 알리는 계기가 될 것입니다. 성북구립미술관은 한국의 미술사를 조망하고 그 가치를 탐구하는 학술의 장으로, 새롭게 피어나는 예술적 자원을 담아내는 도전의 장으로, 또한 사람과 사람이 예술을 통하여 자유롭게 만나는 소통의 장으로 자리매김 하고자 합니다.',
      },
    ],
    서초구: [
      {
        id: 1,
        name: '예술의전당한가람디자인미술관',
        imgUrl: search2,
        sort: '미술관',
        location: '서울특별시 서초구',
        detailLocation: '서울특별시 서초구 남부순환로 2406',
        phone: '1668-1352',
        link: 'http://www.sac.or.kr/',
        introduce:
          '예술의전당은 전관 개관 30주년을 보내며 앞으로의 30년의 방향성을 보다 명확히 하기 위해 미션과 비전을 새롭게 설정하였습니다. "예술로 대한민국의 가치를 올립니다"라는 미션 아래 "누구나 세계적 수준의 공연과 전시를 누리는 공간"이라는 비전을 달성하기 위해 저희 임직원들은 ‘예술성’, ‘다양성과 공공성’, ‘고객감동’을 핵심가치로 두고 최선을 다하겠습니다.',
      },
      {
        id: 2,
        name: '한전갤러리',
        imgUrl: search2,
        sort: '미술관',
        location: '서울특별시 서초구',
        detailLocation: '서울특별시 서초구 효령로72길 60, 한전아트센터 1층',
        phone: '02-3456-5096',
        link: 'https://www.instagram.com/p/CzDlSizJX_L/?igshid=MzRlODBiNWFlZA%3D%3D',
        introduce:
          '한전아트센터 갤러리는 한전아트센터 전기박물관동에 있으며, 연평균 100회 이상의 전시가 이루어진다. 총 1,358㎡ 규모의 3개의 전시실에서 한국화, 서양화, 조각, 사진, 미디어 아트 등 다양한 장르를 활발히 선보이고 있다. 타 갤러리 대비 저렴한 수준의 대관료와 무료 관람으로 작가들의 창작활동 및 국민들의 문화예술 경험 확대를 지원하고 있다. 같은 건물에 전기박물관이 있어 전시를 본 후 한국전력의 역사를 체험하기 용이하다.',
      },
      {
        id: 3,
        name: '한원미술관',
        imgUrl: search2,
        sort: '미술관',
        location: '서울특별시 서초구',
        detailLocation: '서울특별시 서초구 남부순환로 2423 한원빌딩 본관 B1F',
        phone: '0507-1402-5642',
        link: 'http://www.hanwon.org/',
        introduce:
          '(재)한원미술관은 1993년 개관한 제 1종 전문 미술관으로서, 한원그룹 고(故)하동환 명예회장(前 ㈜동아자동차 설립자)이 개인 사재를 출연하여 설립하였습니다. 지원이 부족한 미술 분야의 전시와 연구라는 설립취지를 바탕으로, 구상화 중 특히 풍경화 분야를 시작으로 미디어, 한국화에 이르기까지 30여 년 역사성과 정체성을 지켜오고 있으며, 한국 미술계의 균형있는 발전을 위하여 소신있는 전시와 연구를 목표로 하고 있습니다.',
      },
    ],
    송파구: [
      {
        id: 1,
        name: '소마미술관',
        imgUrl: search2,
        sort: '미술관',
        location: '서울특별시 송파구',
        detailLocation: '서울특별시 송파구 위례성대로 51',
        phone: '02-425-1077',
        link: 'https://soma.kspo.or.kr/main',
        introduce:
          '세계의 조각 작품들과 조경이 조화를 이룬 692,367.2㎡의 조각공원 안에 자리 잡은 소마미술관은 서울 올림픽의 성과를 예술로 승화하는 기념공간이자 휴식공간입니다. 미술관에서 나와 자연스럽게 연결되는 조각공원의 황톳길을 따라 걷다 보면 조각 작품들과 자연을 동시에 감상할 수 있습니다. 창밖으로 조각공원의 전경이 펼쳐지는 개방적이고 확장된 공간이 되는 실내 전시공간을 갖춘 1관, 그리고 지하철 9호선과 연결된 2관 등 소마미술관은 자연과 인간, 예술과 건축이 어우러진 색다른 풍경을 만들어 자연과 공존하는 소통의 공간구조를 더욱 실감하게 합니다. 이렇듯 소마미술관은 평화의 광장, 몽촌토성 등 주변의 문화공간을 이어주는 중심으로서 주변의 자연적인 요소들을 시설에 연결하고 서로 다른 풍경을 맺어주는 산책로가 되도록 계획되어졌습니다.',
      },
      {
        id: 2,
        name: '롯데뮤지엄',
        imgUrl: search2,
        sort: '미술관',
        location: '서울특별시 송파구',
        detailLocation: '서울특별시 송파구 올림픽로 300, 롯데월드타워 7층',
        phone: '02-1544-7744',
        link: 'https://www.lottemuseum.com/',
        introduce:
          '2018년 1월, 롯데월드타워 7층에 개관한 롯데뮤지엄은 전 세계 현대미술의 새로운 움직임을 소개하여 그 역동적인 에너지를 공유하고자 합니다. 도심 한가운데서 펼쳐지는 생동감 넘치는 롯데뮤지엄의 향연은 반복되는 일상을 감동의 순간으로 변화시키는 마법 같은 시간을 제공할 것입니다. 함께 소통하며 새로운 문화를 창조하는 국내 최고 컨템포러리 미술관, 롯데뮤지엄으로 여러분을 초대합니다.',
      },
    ],
    용산구: [
      {
        id: 1,
        name: '김세중미술',
        imgUrl: search2,
        sort: '미술관',
        location: '서울특별시 용산구',
        detailLocation: '서울특별시 용산구 효창원로70길 35',
        phone: '02-717-5129',
        link: 'http://www.kimsechoong.com/',
        introduce:
          '김세중미술관은 해방 후 척박한 시대에 제1세대 조각가로서 한국 현대조각을 개척하고, 서울대 미대 제1회 졸업생이자 교수 및 미술대 학장으로서 후학을 양성하고, 한국미술협회 이사장, 서울조각회 회장, 한국가톨릭미술가협회 회장, 국립현대미술관장 등을 맡아 한국 미술과 미술계 발전의 기반 마련에 헌신하다 작고하신 조각가 김세중 선생님(1928-1986)의 치열했던 삶과 예술혼을 기리고, 못다 이루신 뜻을 현재와 미래에 이어가고자 설립되었습니다.',
      },
      {
        id: 2,
        name: '리움미술관',
        imgUrl: search2,
        sort: '미술관',
        location: '서울특별시 용산구',
        detailLocation: '서울특별시 용산구 이태원로55길 60-16',
        phone: '02-2014-6900',
        link: 'https://www.leeumhoam.org/',
        introduce:
          '1965년 삼성문화재단 설립 이후 소중한 문화 유산을 보전하고 대중에게 알리고자 노력해온 삼성미술관은 2004년 서울 한남동에 미술관 건물을 신축하면서 리움미술관을 개관했습니다. 수준 높은 소장품전과 기획전 개최 등 그간의 괄목할만한 활동과 성과로 리움은 명실공히 한국을 대표하는 미술관으로 성장하였습니다. 리움미술관은 한국 고유의 미를 담고 있는 전통미술과 생동하는 현대미술, 시대적 가치를 반영한 국제미술이 함께 공존하는 세계를 향한 열린 미술관입니다. 리움은 과거와 현재를 바탕으로 미래를 함께 모색하고, 시대와 장르를 초월한 융합미술관으로 관객과 함께 향유하고 소통하는 문화적 공간이 되고자 합니다.',
      },
      {
        id: 3,
        name: '아모레퍼시픽미술관',
        imgUrl: search2,
        sort: '미술관',
        location: '서울특별시 용산구',
        detailLocation: '서울특별시 용산구 한강대로 100',
        phone: '02-6040-2345',
        link: 'https://apma.amorepacific.com/index.do',
        introduce:
          '아모레퍼시픽미술관은 회사의 창업자 고(故) 서성환 회장께서 수집한 미술품을 기반으로 출발했다. 1979년 태평양박물관으로 시작하여 2009년 아모레퍼시픽미술관(APMA, Amorepacific Museum of Art)으로 명칭을 바꾸고 고미술과 현대미술을 아우르는 미술관으로 전시와 연구, 출판활동을 하고 있다.',
      },
    ],
    은평구: [
      {
        id: 1,
        name: '사비나미술관',
        imgUrl: search2,
        sort: '미술관',
        location: '서울특별시 은평구',
        detailLocation: '서울 은평구 진관1로 93',
        phone: '02-736-4371',
        link: 'https://www.savinamuseum.com/kor/index.action',
        introduce:
          '슬로건(slogan) - 새롭게 하라, 놀라게 하라, 그리고 아름답게 (Make it new, surprise me, beautifully) 1996년 3월 개관한 사비나미술관은 제1종 등록미술관(전문미술관, 제 251호)으로 융합, 변화, 도전, 혁신, 실험정신을 창조성의 원천으로 활용하며 예술의 의미와 가치를 이끌어내고 사회 전반에 확산시키는 역할을 수행하고 있습니다.',
      },
    ],
    종로구: [
      {
        id: 1,
        name: '김종영미술관',
        imgUrl: search2,
        sort: '미술관',
        location: '서울특별시 종로구',
        detailLocation: '서울특별시 종로구 평창32길 30',
        phone: '02-3217-6484',
        link: 'http://kimchongyung.com/kimchongyung',
        introduce:
          '2002년 12월 15일, 김종영미술관은 조각가 우성 김종영(1915-1982)의 20주기를 기념하여 서울 종로구 평창동에 문을 열었습니다. 그로부터 약 8년 뒤, 2010년 12월 15일에 김종영미술관의 신관 ‘사미루(四美樓)’ 를 증축하여, 미술관의 본관인 ‘불각재(不刻齋)’ 과 비대칭의 조화를 이루고 있는 아름다운 미술관이 완성되었습니다.',
      },
      {
        id: 2,
        name: '아르코미술관',
        imgUrl: search2,
        sort: '미술관',
        location: '서울특별시 종로구',
        detailLocation: '서울특별시 종로구 동숭길 3',
        phone: '02-760-4850',
        link: 'https://www.arko.or.kr/artcenter/',
        introduce:
          '아르코미술관의 전시 및 프로그램은 문화적 다양성을 존중하며, 장르와 매체를 넘나드는 실험적 예술 활동을 지지합니다. 또한, 인류의 미래와 직결된 사회적 의제를 예술 담론으로 맥락화하고, 예술 활동을 통해 이를 소통함으로써 공공미술관으로서의 사회적 역할을 수행하고자 합니다.',
      },
      {
        id: 3,
        name: '국립현대미술관 서울',
        imgUrl: search2,
        sort: '미술관',
        location: '서울특별시 종로구',
        detailLocation: '서울특별시 종로구 삼청로 30',
        phone: '02-3701-9500',
        link: 'https://www.mmca.go.kr/',
        introduce:
          '1969년 경복궁에서 개관한 국립현대미술관은 이후 1973년 덕수궁 석조전 동관으로 이전하였다가 1986년 현재의 과천 부지에 국제적 규모의 시설과 야외조각장을 겸비한 미술관을 완공, 개관함으로써 한국 미술문화의 새로운 장을 열게 되었습니다.',
      },
      {
        id: 4,
        name: '석파정 서울미술관',
        imgUrl: search2,
        sort: '미술관',
        location: '서울특별시 종로구',
        detailLocation: '서울특별시 종로구 창의문로11길 4-1',
        phone: '02-6929-4470',
        link: 'https://seoulmuseum.org/',
        introduce:
          '서울미술관은 무엇보다 감상자가 창조자가 되는 미술관을 지향합니다. 감상자가 미술관과 전문가들의 권위에 눌려 주어진 정보를 수동적으로 수용하는 미술관이 아니라, 스스로 감상의 주체가 되어 창조적으로 감상하는 미술관을 지향합니다.',
      },
      {
        id: 5,
        name: '종로구립 박노수미술관',
        imgUrl: search2,
        sort: '미술관',
        location: '서울특별시 종로구',
        detailLocation: '서울특별시 종로구 옥인1길 34',
        phone: '02-2148-4171',
        link: 'https://www.jfac.or.kr/site/main/content/parkns01',
        introduce:
          '종로구립 박노수미술관은 서울시 1종 등록미술관으로 박노수 화백의 기증작품과 컬렉션(고미술품, 수석, 고가구) 등 총 천여점의 풍부한 예술품을 바탕으로 2013년 9월에 설립되었습니다.',
      },
      {
        id: 6,
        name: '종로구립 고희동미술관',
        imgUrl: search2,
        sort: '미술관',
        location: '서울특별시 종로구',
        detailLocation: '서울특별시 종로구 창덕궁5길 40',
        phone: '02-741-8424',
        link: 'https://www.jfac.or.kr/site/main/content/gohd01',
        introduce:
          '종로구립 고희동미술관은 등록문화재 제84호로(2004년에 등록) 고희동 화백이 일본 유학 후 돌아와 직접 설계하고 41년 간 거주한 근대식 한옥입니다. 2008년 종로구에서 부지를 매입하고 복원공사를 거쳐 2012년 11월에 처음 개관하였으며, 2019년부터 종로문화재단이 위탁 운영을 맡아 고희동 화백을 알리는 문화향유 공간으로 가꾸어 나가고 있습니다.',
      },
      {
        id: 7,
        name: '뮤지엄한미 삼청',
        imgUrl: search2,
        sort: '미술관',
        location: '서울특별시 종로구',
        detailLocation: '서울특별시 종로구 삼청로9길 45',
        phone: '02-733-1315',
        link: 'https://museumhanmi.or.kr/',
        introduce:
          '가현문화재단이 개관한 국내 최초 사진전문 미술관으로 시작한 한미사진미술관은, 국내 사진사의 체계화와 사진문화예술의 활성화를 위해 최선의 노력을 다해왔습니다.',
      },
      {
        id: 8,
        name: '금호미술관',
        imgUrl: search2,
        sort: '미술관',
        location: '서울특별시 종로구',
        detailLocation: '서울특별시 종로구 삼청로 18',
        phone: '02-720-5114',
        link: 'http://www.kumhomuseum.com/',
        introduce:
          '금호미술관은 1989년 금호갤러리를 시작으로 한국미술의 발전과 사회공헌을 위해 노력하는 대표적인 메세나 기관으로 자리잡아 왔습니다. 개관 이래 신진작가들을 발굴 지원해왔으며, 1996년 금호미술관으로 확장 및 이전하면서 다양한 전시 및 프로그램을 통해 미술인을 후원하고 관람객들의 문화적 향유 기회를 제공해 왔습니다.',
      },
      {
        id: 9,
        name: '탑골미술',
        imgUrl: search2,
        sort: '미술관',
        location: '서울특별시 종로구',
        detailLocation: '서울특별시 종로구 삼일대로 467, 1층',
        phone: '02-6220-8663',
        link: 'https://seoulnoin.or.kr/senior/museum_finish.asp',
        introduce:
          '탑골미술관은 다양한 세대가 미술을 통해 소통하고 교감하는 “열린 문화예술공간”을 지향합니다.',
      },
      {
        id: 10,
        name: '아라리오뮤지엄 인 스페이스',
        imgUrl: search2,
        sort: '미술관',
        location: '서울특별시 종로구',
        detailLocation: '서울특별시 종로구 율곡로 83',
        phone: '02-736-5700',
        link: 'https://www.arariomuseum.org/main.php',
        introduce:
          'Simple with Soul은 아라리오의 창업자이자 컬렉터 그리고 아티스트인 CI KIM이 아라리오뮤지엄 프로젝트를 구상하면서 정립한 뮤지엄의 가치이자 개념 혹은 철학입니다. 문자 그대로 ‘영혼을 머금고 있는 단순함’이라는 뜻입니다.',
      },
      {
        id: 11,
        name: 'OCI 미술관',
        imgUrl: search2,
        sort: '미술관',
        location: '서울특별시 종로구',
        detailLocation: '서울특별시 종로구 우정국로 45-14',
        phone: '02-734-0440',
        link: 'https://ocimuseum.org/',
        introduce:
          'OCI미술관은 문화예술 활동의 주축이 되는 미술관의 사회적 역할을 수행하고, 한국현대미술계의 성장을 위한 발판을 마련하고자 심도 있는 전시와 작가지원 프로그램을 지속적으로 운영하고 있습니다.',
      },
      {
        id: 12,
        name: '일민미술관',
        imgUrl: search2,
        sort: '미술관',
        location: '서울특별시 종로구',
        detailLocation: '서울특별시 종로구 세종대로 152',
        phone: '02-2020-2050',
        link: 'https://ilmin.org/',
        introduce:
          '대한민국의 문화지형적 상징, 서울 광화문 광장 앞에 위치한 일민미술관은 1996년 개관 이래 예술적 실천이 삶을 풍요롭게 가꾼다는 믿음으로 다양한 전시활동을 전개해 왔습니다. 현대미술의 흐름을 읽어내는 중추적 역할을 수행하면서 국내외 미술계에서 주목 받는 동시대 미술관으로 활약하고 있습니다.',
      },
      {
        id: 13,
        name: '세화미술관',
        imgUrl: search2,
        sort: '미술관',
        location: '서울특별시 종로구',
        detailLocation: '서울특별시 종로구 새문안로 68, 3층',
        phone: '02-2002-7789',
        link: 'https://www.sehwamuseum.org/main.do',
        introduce:
          '세화미술관은 삶과 예술이 소통하는 도심 속 열린 미술관으로 역동적인 문화 예술의 장이 되고자 합니다. 고층의 빌딩과 고궁, 청계천이 어우러진 광화문 일대는 전통과 미래를 관통하는 다양한 문화적 가치가 공존하는 곳입니다. 이 곳에서 세화미술관은 생소하고 어려운 예술이 아닌 일상생활에서 편하고 가깝게 즐길 수 있는 예술을 소개하고자 합니다',
      },
      {
        id: 14,
        name: '자하미술관',
        imgUrl: search2,
        sort: '미술관',
        location: '서울특별시 종로구',
        detailLocation: '서울특별시 종로구 창의문로5가길 46',
        phone: '02-395-3222',
        link: 'https://www.zahamuseum.org/',
        introduce:
          '"문화적 역할"에 충실한 미술관 작가와 함께 능동적으로 사유하는 미술관 자하미술관은 서울에서 가장 높은 곳에 위치한 미술관입니다.중심가에서 5분 거리에 위치해 있으면서도 북악산이 내려다보이며,비봉능선이 병풍처럼 한눈에 들어와 아름다운 풍경을 자랑합니다.',
      },
      {
        id: 15,
        name: '대림미술관',
        imgUrl: search2,
        sort: '미술관',
        location: '서울특별시 종로구',
        detailLocation: '서울특별시 종로구 자하문로4길 21',
        phone: '02-720-0667',
        link: 'https://daelimmuseum.org/',
        introduce:
          '일상이 예술이 되는 미술관 대림문화재단이 운영하는 대림미술관, 디뮤지엄, 구슬모아당구장은 우리 일상에서 예술적 가치를 발견하는 전시와 누구나 함께 참여하고 향유할 수 있는 다양한 교육 문화 프로그램을 통해 관람객들에게 영감과 경험을 선사함으로써 ‘일상이 예술이 되는 미술관’을 실현하고자 합니다.',
      },
    ],
    중구: [
      {
        id: 1,
        name: '서울시립미술관',
        imgUrl: search2,
        sort: '미술관',
        location: '서울특별시 중구',
        detailLocation: '서울특별시 중구 덕수궁길 61',
        phone: '02-2124-8800',
        link: 'https://sema.seoul.go.kr/kr/whatson/exhibition/detail?exNo=1308405',
        introduce:
          '서울시립미술관은 모두가 만나고 경험하는 미술관입니다. 서울 근현대사의 자취를 고스란히 간직한 정동 한가운데 위치한 서소문본관은 르네상스식 옛 대법원 건물과 현대 건축이 조화를 이루고 있습니다. 전시, 교육, 스크리닝, 워크숍, 공연, 토크 등 다양한 프로그램과 더불어 SeMA Cafe+, 예술 서점, 로비 공간, 그리고 야외 조각 공원이 모두에게 다양한 미술 체험에 이르는 길을 제공합니다.',
      },
      {
        id: 2,
        name: '국립현대미술관 덕수궁',
        imgUrl: search2,
        sort: '미술관',
        location: '서울특별시 중구',
        detailLocation: '서울특별시 중구 세종대로 99',
        phone: '02-2022-0600',
        link: 'https://www.mmca.go.kr/visitingInfo/deoksugungInfo.do',
        introduce: '한국근대미술을 품은 고궁 속 미술관',
      },
    ],
    중랑구: [
      {
        id: 1,
        name: '중랑아트센터',
        imgUrl: search2,
        sort: '미술관',
        location: '서울특별시 중랑구',
        detailLocation:
          '서울특별시 중랑구 망우로 353, 이노시티 C동 B2F 중랑아트센터',
        phone: '02-3407-6541',
        link: 'https://www.jnfac.or.kr/art/index',
        introduce:
          '망우역 인근의 중랑아트센터는 시민들을 위한 다양한 전시와 문화 프로그램을 운영하는 문화공간으로 다채로운 무료 전시회를 누구나 편하게 즐길 수 있다. 아트센터는 지하 2층에 있지만 하늘까지 뚫린 공간으로 정문 앞의 마당 선큰가든은 소규모 공연과 야외 전시가 열린다.',
      },
    ],
  },
  경기도: {
    가평군: [
      {
        id: 1,
        name: '인터렉티브아트뮤지엄',
        imgUrl: search2,
        sort: '미술관',
        location: '경기도 가평군',
        detailLocation: '경기도 가평군 가평읍 호반로 1655',
        phone: '070-8899-4251',
        link: 'http://mermont.co.kr',
        introduce:
          '가평 인터렉티브아트뮤지엄은 관람객이 직접 참여하고 체험할 수 있는 현대미술과 인터랙티브 아트를 중심으로 한 미술관입니다. 이 미술관은 관람객이 전시와 상호작용할 수 있는 다양한 설치미술과 디지털 아트를 제공하여, 예술과 기술의 융합을 경험할 수 있는 공간입니다. 특히, 실감 나는 디지털 미디어 아트와 참여형 전시가 특징이며, 가족 단위 관람객과 어린이들을 위한 교육 프로그램과 체험 프로그램도 운영합니다. 가평의 자연경관을 배경으로 하는 아름다운 환경 속에서 현대미술의 새로운 형태를 경험할 수 있는 장소입니다.',
      },
    ],
    고양시: [
      {
        id: 1,
        name: '고양아람누리 아람미술관',
        imgUrl: search2,
        sort: '미술관',
        location: '경기도 고양시',
        detailLocation: '경기도 고양시 일산동구 중앙로 1286',
        phone: '1577-7766',
        link: 'https://artgy.or.kr',
        introduce: '현대 미술 전시가 주로 열리는 고양시의 대표 미술관입니다.',
      },
    ],
    과천시: [
      {
        id: 1,
        name: '과천국립현대미술관',
        imgUrl: search2,
        sort: '미술관',
        location: '경기도 과천시',
        detailLocation: '경기도 과천시 상하벌로 50',
        phone: '02-2188-6000',
        link: 'https://mmca.go.kr/visitingInfo/gwacheonInfo.do',
        introduce:
          '과천국립현대미술관은 한국 현대미술을 대표하는 미술관으로, 국내외 현대미술 작품을 전시하며 다양한 기획 전시와 교육 프로그램을 운영합니다. 또한, 한국 현대미술의 중요 작품들을 소장하고 있으며, 미술에 대한 연구와 학술 활동도 활발히 진행됩니다. 아름다운 자연 환경 속에 위치해 있어, 전시 관람과 함께 자연경관을 즐길 수 있는 공간입니다.',
      },
    ],
    부천시: [
      {
        id: 1,
        name: '부천아트벙커 B39',
        imgUrl: search2,
        sort: '미술관',
        location: '경기도 부천시',
        detailLocation: '경기도 부천시 원미구 평천로 655',
        phone: '032-320-3746',
        link: 'https://artbunkerb39.org/',
        introduce:
          '폐기물 소각장을 예술 공간으로 탈바꿈한 곳으로, 현대미술과 설치미술 등의 다양한 전시가 진행됩니다.',
      },
    ],
    성남시: [
      {
        id: 1,
        name: '성남아트센터',
        imgUrl: search2,
        sort: '미술관',
        location: '경기도 성남시',
        detailLocation: '경기도 성남시 분당구 성남대로 808',
        phone: '031-783-8000',
        link: 'https://www.snart.or.kr',
        introduce: '대규모 전시와 공연이 열리는 복합 문화예술 공간입니다.',
      },
    ],
    수원시: [
      {
        id: 1,
        name: '경기아트센터',
        imgUrl: search2,
        sort: '미술관',
        location: '경기도 수원시',
        detailLocation: '경기도 수원시 팔달구 효원로 307번길 20',
        phone: '031-230-3200',
        link: 'https://www.ggac.or.kr',
        introduce:
          '경기아트센터는 경기도 수원시에 위치한 복합문화예술 공간으로, 다양한 공연과 전시를 개최하는 장소입니다. 이 센터는 현대미술 전시뿐만 아니라 음악, 무용, 연극 등 다양한 공연 예술 프로그램을 제공합니다. 주요 시설로는 대극장, 소극장, 갤러리, 아트홀 등이 있으며, 지역 예술가들의 작품을 소개하고 국제적인 예술가들을 초청하여 풍부한 문화적 경험을 제공합니다. 또한, 문화 교육 프로그램과 워크숍 등도 운영하여 예술에 대한 접근성을 높이고 있습니다.',
      },
      {
        id: 2,
        name: '수원시립미술관',
        imgUrl: search2,
        sort: '미술관',
        location: '경기도 수원시',
        detailLocation: '경기도 수원시 팔달구 정조로 833',
        phone: '031-228-3800',
        link: 'https://suma.suwon.go.kr',
        introduce:
          '수원시립미술관은 현대미술을 중심으로 다양한 예술 작품을 전시하는 미술관입니다. 수원시의 중심에 위치하며, 국내외 현대미술 작가들의 작품을 소개하는 기획전시와 상설전시를 운영합니다. 미술관은 전시뿐만 아니라, 예술 교육 프로그램, 워크숍, 문화 행사 등을 통해 지역 사회와 관람객들에게 다양한 예술적 경험을 제공합니다. 또한, 지역 작가들의 작품을 발굴하고 지원하는 프로그램도 운영하여 지역 미술의 발전에 기여하고 있습니다.',
      },
    ],
    안산시: [
      {
        id: 1,
        name: '경기도미술관',
        imgUrl: search2,
        sort: '미술관',
        location: '경기도 안산시',
        detailLocation: '경기도 안산시 단원구 동산로 268',
        phone: '031-481-7000',
        link: 'https://ggcf.kr',
        introduce:
          '현대미술을 중심으로 다양한 국내외 작가들의 작품을 감상할 수 있는 미술관 입니다.',
      },
      {
        id: 2,
        name: '안산문화예술의전당 화랑전시관',
        imgUrl: search2,
        sort: '미술관',
        location: '경기도 안산시',
        detailLocation: '경기도 안산시 단원구 화랑로 312',
        phone: '031-481-0505',
        link: 'http://ansanart.com/',
        introduce: '다양한 현대미술 전시와 공연이 열리는 복합 문화 공간입니다.',
      },
    ],
    양주시: [
      {
        id: 1,
        name: '양주시립장욱진미술관',
        imgUrl: search2,
        sort: '미술관',
        location: '경기도 양주시',
        detailLocation: '경기도 양주시 장흥면 권율로 193',
        phone: '031-8082-4245',
        link: 'https://www.yangju.go.kr',
        introduce:
          '한국 근현대 미술의 거장 장욱진 화백의 작품과 관련 전시가 열리는 미술관입니다.',
      },
      {
        id: 2,
        name: '경기북부예술관',
        imgUrl: search2,
        sort: '미술관',
        location: '경기도 양주시',
        detailLocation: '경기도 양주시 고읍남로 153',
        phone: '031-828-5720',
        link: 'https://artgy.or.kr/EH/EH0201L.aspx',
        introduce:
          '경기 북부 지역의 현대 미술 전시와 다양한 예술 활동이 열리는 미술관입니다.',
      },
      {
        id: 3,
        name: '가나아트파크',
        imgUrl: search2,
        sort: '미술관',
        location: '경기도 양주시',
        detailLocation: '경기도 양주시 장흥면 권율로 117',
        phone: '0507-1437-0500',
        link: 'http://www.artpark.co.kr',
        introduce:
          '가나아트파크(전, 장흥아트파크)는 1984년 국내 최초 사립미술관인 토탈미술관이 그 전신으로서, 2005년 모회사 가나아트센터에서 인수하여 조각공원을 중심으로 설립되었습니다. 이후 가나아트파크는 2006년 미술관(우치다 시게루 설계)과 공연장(반 시게루 설계), 어린이체험관, 가나 제1아틀리에(장 미셸 빌모트 설계)를 개관했습니다. 2007년 블루(Blue)·레드(Red)·옐로우(Yellow) 스페이스가 신축 및 개관전을 열었으며, 뒤이어 2008년 가나 제2아틀리에가 열렸습니다. 2013년 가나아트파크 미술관이 ‘가나어린이미술관’으로, 블루스페이스가 국내 최초 ‘피카소어린이미술관’으로 탈바꿈하면서, 가나아트파크는 어린이를 비롯하여 전 계층을 아우르는 예술복합공간으로 자리매김 하였습니다. 2016년 가나아트파크는 개관 10주년을 맞았습니다. 이를 기념하여 예술아카데미 ‘눈코입 미술관’과 ‘호기심 미술관 탐험’을 운영하였으며, 가나아틀리에 입주 작가가 참여한 ‘나도 예술가’ 프로그램이 체험공방에서 진행되었습니다. 가나아트파크는 신진·중견·원로 작가들에게는 보다 나은 창작 공간과 전시 기회를 부여하고, 대중에게는 미술을 비롯한 다양한 예술 장르를 수용함으로써, “인간과 자연 그리고 예술이 공존하는 예술복합공간”을 실현하고자 최선을 다할 것입니다.',
      },
    ],
    양평군: [
      {
        id: 1,
        name: '양평군립미술관',
        imgUrl: search2,
        sort: '미술관',
        location: '경기도 양평군',
        detailLocation: '경기도 양평군 양평읍 문화복지길 2',
        phone: '031-775-8515',
        link: 'https://www.ymuseum.org',
        introduce:
          '양평 지역의 미술 작품 전시 및 다양한 현대미술 전시를 감상할 수 있는 미술관입니다.',
      },
      {
        id: 2,
        name: '구하우스 미술관',
        imgUrl: search2,
        sort: '미술관',
        location: '경기도 양평군',
        detailLocation: '경기도 양평군 서종면 무내미길 49-12',
        phone: '031-774-7460',
        link: 'http://koohouse.org',
        introduce:
          '구하우스 미술관은 2016년 7월 1일에 개관한 세계 유수 작가들의 컨템포러리 아트와 디자인 작품으로 구성된 컬렉션 미술관입니다. 한국 1세대 그래픽 디자이너 구정순 대표(디자인 포커스)가 예술에 대한 열정과 심미안으로 평생 수집해 온 500여점의 예술 작품들을 기반으로 “예술품은 소유가 아니라 공유하는 것”이라는 철학 아래 설립하였습니다. 예술을 향유하는 즐거움을 일상에서 편안하게 누릴 수 있도록 ‘집’을 컨셉으로 하는 구하우스 미술관은 예술과 생활이 유리되지 않는 현대 미술의 개념과 정수를 고스란히 담고 있습니다.',
      },
    ],
    오산시: [
      {
        id: 1,
        name: '오산시립미술관',
        imgUrl: search2,
        sort: '미술관',
        location: '경기도 오산시',
        detailLocation: '경기도 오산시 경기대로 142',
        phone: '031-379-9932',
        link: 'https://www.osan.go.kr',
        introduce:
          '오산시립미술관은 오산문화예술회관 내에 위치한 미술관으로, 지역 예술가들의 작품을 비롯한 다양한 현대미술 전시가 열립니다. 전시뿐만 아니라 다양한 문화 프로그램과 교육 프로그램도 운영됩니다.',
      },
    ],
    용인시: [
      {
        id: 1,
        name: '백남준아트센터',
        imgUrl: search2,
        sort: '미술관',
        location: '경기도 용인시',
        detailLocation: '경기도 용인시 기흥구 백남준로 10',
        phone: '031-201-8571',
        link: 'https://njp.ggcf.kr',
        introduce:
          '미디어 아트의 거장 백남준을 기념하여 설립된 아트센터로, 그의 작품과 다양한 미디어 아트 전시가 열립니다.',
      },
      {
        id: 2,
        name: '용인포은아트홀',
        imgUrl: search2,
        sort: '미술관',
        location: '경기도 용인시',
        detailLocation: '경기도 용인시 수지구 포은대로 499',
        phone: '031-260-3355',
        link: 'https://www.yicf.or.kr',
        introduce:
          '용인시의 주요 공연 및 전시 공간으로, 다양한 예술 전시와 문화 행사가 열립니다.',
      },
      {
        id: 3,
        name: '뮤지엄 그라운드',
        imgUrl: search2,
        sort: '미술관',
        location: '경기도 용인시',
        detailLocation: '경기도 용인시 수지구 샘말로 122',
        phone: '031-265-8200',
        link: 'https://museumground.org',
        introduce:
          '나아가 풍성한 문화와 예술, 창작 활동의 복합 플랫폼으로서 전 연령의 관객들에게 열려 있는 미술관을 지향하며, 뮤지엄그라운드는 지역사회와 함께 호흡하며, 모든 시각예술의 경계를 넘나들며, 열린 감성과 지성으로 동시대 예술 문화를 대중들과 함께 공감해 나가겠습니다.',
      },
      {
        id: 4,
        name: '호암미술관',
        imgUrl: search2,
        sort: '미술관',
        location: '경기도 용인시',
        detailLocation: '경기도 용인시 처인구 포곡읍 에버랜드로562번길 38',
        phone: '031-320-1801',
        link: 'https://www.leeumhoam.org/hoam',
        introduce:
          '호암미술관은 삼성 창업주 이병철 회장이 설립한 미술관으로, 용인시 에버랜드 내에 위치하고 있습니다. 이 미술관은 한국 전통 미술과 현대 미술을 아우르는 다양한 전시를 제공합니다. 주요 소장 작품으로는 한국화, 서예, 도자기 등 한국 전통 미술과 현대미술 작품들이 포함되어 있으며, 매년 특별 전시와 기획 전시를 통해 폭넓은 미술 경험을 제공합니다. 미술관은 고풍스러운 한국 전통 건축 양식으로 설계되어 자연과 잘 어우러지며, 전시 외에도 다양한 문화 프로그램과 교육 프로그램을 운영하고 있습니다. 호암미술관은 예술을 통해 한국의 전통과 현대를 조화롭게 경험할 수 있는 장소입니다.',
      },
    ],
    의정부시: [
      {
        id: 1,
        name: '의정부예술의전당',
        imgUrl: search2,
        sort: '미술관',
        location: '경기도 의정부시',
        detailLocation: '경기도 의정부시 의정로 1',
        phone: '031-828-5841',
        link: 'https://www.uac.or.kr',
        introduce:
          '현대미술을 비롯한 다양한 예술 전시가 열리는 복합 문화예술 공간입니다.',
      },
    ],
    이천시: [
      {
        id: 1,
        name: '이천시립월전미술관',
        imgUrl: search2,
        sort: '미술관',
        location: '경기도 이천시',
        detailLocation: '경기도 이천시 경충대로2709번길 185',
        phone: '031-637-0032',
        link: 'http://www.iwoljeon.org',
        introduce:
          '이천시립월전미술관은 한국 현대미술의 거장인 월전 장우성(1916-1982)의 작품을 중심으로 한 미술관입니다. 월전 장우성은 한국화의 거장으로 알려져 있으며, 그의 작품은 전통 한국화의 기법과 현대적 감각을 결합한 것으로 평가받고 있습니다.',
      },
    ],
    파주시: [
      {
        id: 1,
        name: '파주 헤이리 예술마을',
        imgUrl: search2,
        sort: '미술관',
        location: '경기도 파주시',
        detailLocation: '경기도 파주시 탄현면 헤이리마을길 70-21',
        phone: '031-946-8551',
        link: 'https://www.heyri.net',
        introduce:
          '다양한 예술가들의 갤러리와 전시가 있는 예술 마을로, 현대미술과 설치미술을 감상할 수 있습니다.',
      },
      {
        id: 2,
        name: '미메시트 아트 뮤지엄',
        imgUrl: search2,
        sort: '미술관',
        location: '경기도 파주시',
        detailLocation: '경기도 파주시 문발로 253',
        phone: '031-955-4100',
        link: 'https://www.mimesisartmuseum.co.kr',
        introduce:
          '미메시스 아트 뮤지엄은 대지 1,400평에 연면적 1,100평으로, 지상 3층(지하 1층)으로 이루어져 있는데, 다양한 크기의 여러 개의 전시 공간이 하나의 덩어리에 담긴 설계로 유명하다. 다양한 곡면으로 이루어진 백색의 전시 공간은 가급적 인조광을 배제하고 자연광을 끌어 들여 은은하고 차분한 분위기를 연출하며 시시때때로 변하는 빛의 향연을 볼 수 있는 것이 큰 특징이다.미메시스 아트 뮤지엄은 상업적인 전시공간으로 방문객을 유혹하는 것이 아닌 건축자체로 전시 이상의 큰 즐거움을 선사하는 공간이 되고 있다.<알바루 시자가 설계한 브라질의 이베리 카르마구 미술관보다 전세계적으로 더 많은 방문객을 끌어 모을것>이라는 포르투갈의 유명한 건축사진작가 페르난두 게하의 말처럼 미메시스 아트 뮤지엄은 개관 전부터 각종 해외 매체에 소개되었으며, 국내외 건축가들에게 큰 영향을 미치고 있다. 지금도 방문객들 발길이 끊이지 않고 있다. 미메시스 아트 뮤지엄은 앞으로 <상상력을 자극하는 예술>을 적극 소개해나갈 예정이다.',
      },
      {
        id: 3,
        name: '아트센터 화이트블럭',
        imgUrl: search2,
        sort: '미술관',
        location: '경기도 파주시',
        detailLocation: '경기도 파주시 탄현면 헤이리마을길 72',
        phone: '031-992-4400',
        link: 'https://whiteblock.org',
        introduce:
          '2011년 4월에 개관한 아트센터 화이트블럭은 파주 헤이리 예술마을 중심인 갈대광장에 자리하여 자연과 건축의 조화를 이루고 있습니다. 아트센터 화이트블럭은 작가의 작품발표의 장이자 미술계 이론가와 작가의 교류와 협력의 플랫폼이며 헤이리를 찾는 다양한 연령대의 관객에게는 미술문화향유의 공간입니다. 동시대 사회와 미술의 동향을 읽어내고 의미를 생성시키는 전시와 프로그램을 기획하며 지역사회의 요구를 수용하여 함께 성장하고자 합니다.',
      },
    ],
  },
};
