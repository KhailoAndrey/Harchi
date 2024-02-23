import { palette } from '@/constants/colors';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  margin-bottom: 80px;
`;

export const ImgWrapper = styled.div`
  position: relative;
`;

// export const IconWrapper = styled.div`
//   position: absolute;
//   bottom: 0;
//   right: 25px;
//   width: 36px;
//   height: 36px;
//   border-radius: 50%;
//   background-color: ${palette.orange};
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
// `;

export const FileInputLabel = styled.label`
  position: absolute;
  bottom: 0;
  right: 25px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${palette.orange};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export const FileInput = styled.input`
  position: absolute;
  bottom: 0;
  left: 0px;
  display: none;
`

export const ExpertImg = styled.img`
  width: 193px;
  height: 193px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
`;
export const Bio = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  font-family: 'El Messiri';
`;
export const InfoWrapper = styled.div`
  width: 264px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const Input = styled.input`
  width: 250px;
  height: 40px;
  padding: 16px;
  border-radius: 4px;
  font-family: 'El Messiri';
  font-size: 16px;
  background-color: ${palette.beige};
`;

export const Block = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const EditIcon = styled.div`
width: 25px;
heigth: 25px;
cursor: pointer;
display:flex;
align-items: center;
justify-content: center;
`;

export const Name = styled.h2`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.3;
`;

export const Email = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.3;
`;

export const RatingBlock = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  color: ${palette.orange};
`;

export const Rating = styled.p`
  font-size: 16px;
  line-height: 1.2;
`;

export const Textarea = styled.textarea`
  width: 500px;
  min-height: 100px;
  padding: 16px;
  border-radius: 4px;
  font-family: 'El Messiri';
  font-size: 16px;
  background-color: ${palette.beige};
`;

export const DescriptionBlock = styled.div`
  display: flex;
  align-items: center;
`;

export const Description = styled.p`
  max-width: 484px;
  font-size: 20px;
  line-height: 1.3;
`;