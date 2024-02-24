import {
  Wrapper,
  ImgWrapper,
  ExpertImg,
  Bio,
  InfoWrapper,
  FileInputLabel,
  FileInput,
  Input,
  Block,
  EditIcon,
  Name,
  Email,
  RatingBlock,
  Rating,
  Textarea,
  DescriptionBlock,
  Description,
} from './ProfileHeader.styled';
import { MdAddAPhoto } from 'react-icons/md';
import { RiPencilFill } from 'react-icons/ri';
import { FaRegFaceSmile } from 'react-icons/fa6';
import { palette } from '@/constants/colors';
import { useEffect, useState } from 'react';
import { IExpert } from '@/types';

type ProfileHeaderProps = {
  expert: IExpert;
};

const ProfileHeader = ({ expert }: ProfileHeaderProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(expert.name);
  const [email, setEmail] = useState(expert.email);
  const [description, setDescription] = useState(expert.description);
  const [editingField, setEditingField] = useState<string | null>(null);
  const [photo, setPhoto] = useState<string | null>(expert.photo);

  const handleEditClick = (
    field: string,
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    event.stopPropagation();
    setIsEditing(true);
    setEditingField(field);
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'description') {
      setDescription(value);
    }
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (event.key === 'Enter') {
      setIsEditing(false);
      console.log('Saved', editingField + ':', name || email || description);
    }
  };

  const handleFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const dataUrl = reader.result as string;
        setPhoto(dataUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const isInput = target.tagName.toLowerCase() === 'input';
      const isTextarea = target.tagName.toLowerCase() === 'textarea';
      if (!isInput && !isTextarea) {
        setEditingField(null);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <Wrapper>
      <ImgWrapper>
        <ExpertImg src={photo || expert.photo} />
        <FileInputLabel htmlFor="fileInput">
          <MdAddAPhoto
            size={17}
            fill={palette.mainWhite}
            style={{ cursor: 'pointer' }}
          />
        </FileInputLabel>
        <FileInput
          id="fileInput"
          type="file"
          onChange={handleFileInputChange}
        />
      </ImgWrapper>
      <Bio>
        <InfoWrapper>
          {isEditing && editingField === 'name' ? (
            <Input
              name="name"
              type="text"
              value={name}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
          ) : (
            <Block>
              <Name>{name}</Name>
              <EditIcon onClick={event => handleEditClick('name', event)}>
                <RiPencilFill size={15} />
              </EditIcon>
            </Block>
          )}
          {isEditing && editingField === 'email' ? (
            <Input
              name="email"
              type="email"
              value={email}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
          ) : (
            <Block>
              <Email>{email}</Email>
              <EditIcon onClick={event => handleEditClick('email', event)}>
                <RiPencilFill size={15} />
              </EditIcon>
            </Block>
          )}
        </InfoWrapper>
        <RatingBlock>
          <FaRegFaceSmile size={24} style={{ cursor: 'pointer' }} />
          <Rating>
            {expert.rating} ({expert.ratingAmount} оцінок)
          </Rating>
        </RatingBlock>
        {isEditing && editingField === 'description' ? (
          <Textarea
            name="description"
            value={description}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
        ) : (
          <DescriptionBlock>
            <Description>{description}</Description>
            <EditIcon onClick={event => handleEditClick('description', event)}>
              <RiPencilFill size={15} />
            </EditIcon>
          </DescriptionBlock>
        )}
      </Bio>
    </Wrapper>
  );
};

export default ProfileHeader;
