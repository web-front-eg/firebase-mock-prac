import React from 'react';
import styled from 'styled-components';

function App() {
  return <StudyX {...studyXData} />;
}

export default App;
import {
  NotosansMediumBlack18px,
  NotosansNormalBlack18px,
  NotosansBoldBlack20px,
  NotosansNormalBlack16px,
  NotosansBoldBlack24px,
  NotosansMediumBlack20px,
  NotosansNormalBlack20px
} from '../../styledMixins';

function StudyX(props) {
  const {
    spanText1,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    spanText7,
    spanText8,
    spanText9,
    spanText10,
    spanText11,
    spanText12,
    spanText13,
    spanText14,
    spanText15,
    spanText16,
    spanText17,
    spanText18
  } = props;

  return (
    <div className='container-center-horizontal'>
      <div className='study-sangsepeiji-seuteodi-membeo-xscreen'>
        <View>
          <OverlapGroup5>
            <Nav>
              <OverlapGroup>
                <Text14>
                  <span className='notosans-normal-black-20px'>
                    {spanText1}
                  </span>
                </Text14>
              </OverlapGroup>
              <Rectangle23></Rectangle23>
              <Rectangle24></Rectangle24>
              <Ellipse2></Ellipse2>
              <Ellipse1></Ellipse1>
            </Nav>
            <Text15>
              <span className='notosans-normal-black-16px'>{spanText2}</span>
            </Text15>
          </OverlapGroup5>
        </View>
        <TextLabel>
          <span className='notosans-bold-black-24px'>{spanText3}</span>
        </TextLabel>
        <View1>
          <OverlapGroup4>
            <Text11>
              <span className='notosans-bold-black-20px'>{spanText4}</span>
            </Text11>
            <View2></View2>
            <Text12>
              <span className='notosans-bold-black-20px'>{spanText5}</span>
            </Text12>
            <X3></X3>
            <X2></X2>
            <X1></X1>
            <TextLabel1>
              <span className='notosans-bold-black-20px'>{spanText6}</span>
            </TextLabel1>
            <TextLabel2>
              <span className='notosans-bold-black-20px'>{spanText7}</span>
            </TextLabel2>
            <OverlapGroup1>
              <Text13>
                <span className='notosans-bold-black-24px'>{spanText8}</span>
              </Text13>
            </OverlapGroup1>
          </OverlapGroup4>
        </View1>
        <View3>
          <Text10>
            <span className='notosans-bold-black-20px'>{spanText9}</span>
          </Text10>
        </View3>
        <View4>
          <OverlapGroup2>
            <FlexRow>
              <FlexCol>
                <Text5>
                  <span className='notosans-bold-black-20px'>{spanText10}</span>
                </Text5>
                <OverlapGroup3>
                  <Text6>
                    <span className='notosans-medium-black-18px'>
                      {spanText11}
                    </span>
                  </Text6>
                </OverlapGroup3>
              </FlexCol>
              <OverlapGroup11>
                <Text7>
                  <span className='notosans-medium-black-18px'>
                    {spanText12}
                  </span>
                </Text7>
              </OverlapGroup11>
              <OverlapGroup31>
                <Text8>
                  <span className='notosans-medium-black-18px'>
                    {spanText13}
                  </span>
                </Text8>
              </OverlapGroup31>
            </FlexRow>
            <Text9>
              <span className='notosans-normal-black-18px'>{spanText14}</span>
            </Text9>
          </OverlapGroup2>
        </View4>
        <View5>
          <TextContainer>
            <Text3>
              <span className='notosans-bold-black-20px'>{spanText15}</span>
            </Text3>
            <Text4>
              <span className='notosans-bold-black-20px'>{spanText16}</span>
            </Text4>
          </TextContainer>
        </View5>
        <X101267>
          <TextContainer1>
            <Text1>
              <span className='notosans-bold-black-20px'>{spanText17}</span>
            </Text1>
            <Text2>
              <span className='notosans-medium-black-20px'>{spanText18}</span>
            </Text2>
          </TextContainer1>
        </X101267>
      </div>
    </div>
  );
}

const View = styled.div`
  margin-left: 2px;
  display: flex;
  align-items: flex-start;
  min-width: 1442px;
`;

const OverlapGroup5 = styled.div`
  width: 1440px;
  height: 64px;
  position: relative;
  background-color: var(--black-haze);
`;

const Nav = styled.div`
  position: absolute;
  height: 64px;
  top: 0;
  left: 175px;
  display: flex;
  align-items: center;
  min-width: 1093px;
`;

const OverlapGroup = styled.div`
  height: 64px;
  display: flex;
  padding: 18px 56px;
  align-items: flex-start;
  min-width: 150px;
  background-color: var(--alto);
`;

const Text14 = styled.div`
  ${NotosansNormalBlack20px}
  min-height: 27px;
  letter-spacing: 0;
`;

const Text1 = styled.div`
  ${NotosansBoldBlack20px}
  min-height: 27px;
  letter-spacing: 0;
`;

const Rectangle23 = styled.div`
  width: 135px;
  height: 64px;
  margin-left: 17px;
  background-color: var(--black-haze);
`;

const Rectangle24 = styled.div`
  width: 135px;
  height: 64px;
  background-color: var(--black-haze);
`;

const Ellipse2 = styled.div`
  width: 44px;
  height: 44px;
  margin-left: 548px;
  background-color: var(--alto);
  border-radius: 22px;
`;

const Ellipse1 = styled.div`
  width: 44px;
  height: 44px;
  margin-left: 18px;
  background-color: var(--sea-mist);
  border-radius: 22px;
`;

const Text15 = styled.div`
  ${NotosansNormalBlack16px}
  position: absolute;
  top: 23px;
  left: 1168px;
  letter-spacing: 0;
`;

const TextLabel = styled.h1`
  ${NotosansBoldBlack24px}
  min-height: 33px;
  align-self: flex-start;
  margin-top: 49px;
  margin-left: 143px;
  letter-spacing: 0;
`;

const View1 = styled.div`
  margin-top: 28px;
  margin-right: 2px;
  display: flex;
  align-items: flex-start;
  min-width: 1144px;
`;

const OverlapGroup4 = styled.div`
  height: 112px;
  display: flex;
  padding: 25px 27px;
  justify-content: flex-end;
  align-items: center;
  min-width: 1136px;
  background-color: var(--black-haze);
`;

const Text11 = styled.div`
  ${NotosansBoldBlack20px}
  min-height: 27px;
  margin-top: 5px;
  min-width: 37px;
  letter-spacing: 0;
`;

const View2 = styled.div`
  width: 44px;
  height: 44px;
  margin-left: 16px;
  margin-top: 8px;
  background-color: var(--sea-mist);
  border-radius: 22px;
`;

const Text12 = styled.div`
  ${NotosansBoldBlack20px}
  min-height: 27px;
  margin-left: 22px;
  margin-top: 5px;
  min-width: 37px;
  letter-spacing: 0;
`;

const X3 = styled.div`
  width: 44px;
  height: 44px;
  margin-left: 36px;
  margin-top: 6px;
  background-color: #cad0ee;
  border-radius: 22px;
`;

const X2 = styled.div`
  width: 44px;
  height: 44px;
  margin-left: 13px;
  margin-top: 6px;
  background-color: #f0c095;
  border-radius: 22px;
`;

const X1 = styled.div`
  width: 44px;
  height: 44px;
  margin-left: 16px;
  margin-top: 6px;
  background-color: #8bdaf3;
  border-radius: 22px;
`;

const TextLabel1 = styled.div`
  ${NotosansBoldBlack20px}
  min-height: 27px;
  margin-left: 28px;
  margin-top: 5px;
  min-width: 121px;
  letter-spacing: 0;
`;

const TextLabel2 = styled.div`
  ${NotosansBoldBlack20px}
  min-height: 27px;
  margin-left: 29px;
  margin-top: 7px;
  min-width: 270px;
  letter-spacing: 0;
`;

const OverlapGroup1 = styled.div`
  height: 56px;
  align-self: flex-end;
  margin-left: 30px;
  display: flex;
  padding: 11px 59px;
  align-items: flex-end;
  min-width: 236px;
  background-color: var(--sea-mist);
`;

const Text13 = styled.div`
  ${NotosansBoldBlack24px}
  min-height: 33px;
  min-width: 117px;
  letter-spacing: 0;
`;

const View3 = styled.div`
  height: 70px;
  align-self: flex-start;
  margin-top: 34px;
  margin-left: 149px;
  display: flex;
  padding: 18px 47px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 195px;
  background-color: var(--sea-mist);
`;

const Text10 = styled.div`
  ${NotosansBoldBlack20px}
  min-height: 27px;
  min-width: 98px;
  letter-spacing: 0;
`;

const View4 = styled.div`
  height: 388px;
  margin-top: 35px;
  margin-left: 8px;
  display: flex;
  align-items: flex-start;
  min-width: 1144px;
`;

const OverlapGroup2 = styled.div`
  width: 1134px;
  display: flex;
  flex-direction: column;
  padding: 25px;
  align-items: flex-start;
  min-height: 388px;
  background-color: var(--alto);
`;

const FlexRow = styled.div`
  height: 86px;
  display: flex;
  align-items: flex-end;
  min-width: 300px;
`;

const FlexCol = styled.div`
  width: 102px;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-height: 85px;
`;

const Text5 = styled.div`
  ${NotosansBoldBlack20px}
  min-height: 27px;
  margin-right: 4px;
  min-width: 98px;
  letter-spacing: 0;
`;

const OverlapGroup3 = styled.div`
  height: 36px;
  margin-top: 22px;
  display: flex;
  padding: 5px 22px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 97px;
  background-color: var(--sea-mist);
`;

const Text6 = styled.div`
  ${NotosansMediumBlack18px}
  min-height: 25px;
  min-width: 50px;
  letter-spacing: 0;
`;

const OverlapGroup11 = styled.div`
  height: 36px;
  margin-left: 14px;
  margin-bottom: 1px;
  display: flex;
  padding: 5px 12px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 100px;
  background-color: var(--sea-mist);
`;

const Text7 = styled.div`
  ${NotosansMediumBlack18px}
  min-height: 25px;
  min-width: 67px;
  letter-spacing: 0;
`;

const OverlapGroup31 = styled.div`
  height: 36px;
  margin-left: 15px;
  display: flex;
  padding: 5px 17px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 69px;
  background-color: var(--sea-mist);
`;

const Text8 = styled.div`
  ${NotosansMediumBlack18px}
  min-height: 25px;
  min-width: 34px;
  letter-spacing: 0;
`;

const Text9 = styled.div`
  ${NotosansNormalBlack18px}
  min-height: 25px;
  margin-top: 26px;
  margin-left: 10px;
  letter-spacing: 0;
`;

const View5 = styled.div`
  margin-top: 22px;
  margin-left: 4px;
  display: flex;
  align-items: flex-start;
  min-width: 1138px;
`;

const TextContainer = styled.div`
  ${NotosansBoldBlack20px}
  height: 269px;
  display: flex;
  padding: 27px 30px;
  align-items: flex-start;
  min-width: 1134px;
  background-color: var(--alto);
`;

const Text3 = styled.div`
  min-height: 27px;
  min-width: 158px;
  letter-spacing: 0;
`;

const Text4 = styled.div`
  min-height: 27px;
  margin-left: 26px;
  letter-spacing: 0;
`;

const X101267 = styled.div`
  height: 269px;
  margin-top: 23px;
  margin-left: 4px;
  display: flex;
  align-items: flex-start;
  min-width: 1138px;
`;

const TextContainer1 = styled.div`
  width: 1134px;
  display: flex;
  flex-direction: column;
  padding: 31px 29px;
  align-items: flex-start;
  min-height: 269px;
  background-color: var(--alto);
`;

const Text2 = styled.div`
  ${NotosansMediumBlack20px}
  min-height: 27px;
  margin-top: 32px;
  letter-spacing: 0;
`;

export const NotosansBoldBlack20px = css`
  color: var(--black);
  font-family: var(--font-family-noto_sans);
  font-size: var(--font-size-m);
  font-weight: 700;
  font-style: normal;
`;

export const NotosansMediumBlack18px = css`
  color: var(--black);
  font-family: var(--font-family-noto_sans);
  font-size: var(--font-size-s);
  font-weight: 500;
  font-style: normal;
`;

export const NotosansBoldBlack24px = css`
  color: var(--black);
  font-family: var(--font-family-noto_sans);
  font-size: var(--font-size-l);
  font-weight: 700;
  font-style: normal;
`;

export const NotosansNormalBlack20px = css`
  color: var(--black);
  font-family: var(--font-family-noto_sans);
  font-size: var(--font-size-m);
  font-weight: 400;
  font-style: normal;
`;

export const NotosansNormalBlack16px = css`
  color: var(--black);
  font-family: var(--font-family-noto_sans);
  font-size: var(--font-size-xs);
  font-weight: 400;
  font-style: normal;
`;

export const NotosansNormalBlack18px = css`
  color: var(--black);
  font-family: var(--font-family-noto_sans);
  font-size: var(--font-size-s);
  font-weight: 400;
  font-style: normal;
`;

export const NotosansMediumBlack20px = css`
  color: var(--black);
  font-family: var(--font-family-noto_sans);
  font-size: var(--font-size-m);
  font-weight: 500;
  font-style: normal;
`;
const studyXData = {
  spanText1: '로고',
  spanText2: '알림',
  spanText3: '열심히 알고리즘 스터디 🔥',
  spanText4: '리더',
  spanText5: '멤버',
  spanText6: '모집인원 3 / 5',
  spanText7: '스터디시작 D-9  |  2022/05/20',
  spanText8: '스터디 신청',
  spanText9: '스터디 정보',
  spanText10: '스터디 소개',
  spanText11: '온라인',
  spanText12: '알고리즘',
  spanText13: '초급',
  spanText14: '수, 금 저녁 7시 ~ 9시',
  spanText15: '스터디 목표 발자취',
  spanText16: '우리 스터디는 이런 활동을 하고 있어요! / 할 거에요!',
  spanText17: '문의사항-댓글',
  spanText18: '게시판 형식 : 비밀글 가능'
};
