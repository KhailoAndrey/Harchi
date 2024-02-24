import { IoClose } from 'react-icons/io5';
import {
  Background,
  ShareContent,
  ShareIconWrapper,
  ShareTitle,
  ShareTitleBlock,
  SocialMediaTitle,
  SocialMediasList,
} from './Share.styled';
import { useEffect } from 'react';
import { socialMedias } from '@/constants/socialMedias';

const Share = ({ changeVisibility, isVisible, ingridients }) => {
  const shareInfo = ingridients
    .map(
      ingridient =>
        `${ingridient.product}: ${ingridient.quantity} ${ingridient.measure}`
    )
    .join('\n');

  useEffect(() => {
    if (isVisible) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isVisible]);

  return (
    <Background onClick={changeVisibility}>
      <ShareContent>
        <ShareTitleBlock>
          <ShareTitle>Поділитися через</ShareTitle>
          <div onClick={changeVisibility} style={{ cursor: 'pointer' }}>
            <IoClose size={24} />
          </div>
        </ShareTitleBlock>
        <SocialMediasList>
          {socialMedias.map(({ id, name, icon, shareButton }) => {
            const ShareButton = shareButton;
            const ShareIcon = icon;
            return (
              <ShareButton
                key={id}
                title={shareInfo}
                url={window.location.href}
              >
                <div key={id}>
                  <ShareIconWrapper>
                    <ShareIcon size={24} />
                  </ShareIconWrapper>
                  <SocialMediaTitle>{name}</SocialMediaTitle>
                </div>
              </ShareButton>
            );
          })}
        </SocialMediasList>
      </ShareContent>
    </Background>
  );
};

export default Share;
