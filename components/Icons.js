import React from 'react';
import { Icon } from '@chakra-ui/react';
// react-icons
import { FaShoppingBag, FaFacebookSquare, FaSpotify } from 'react-icons/fa';
import { BiAlbum } from 'react-icons/bi';
import { BsCaretRight } from 'react-icons/bs';
import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import { SiYoutubetv, SiApplemusic } from 'react-icons/si';
import { ImAirplane } from 'react-icons/im';

function Icons(props) {
  return <Icon {...props} />;
}

Icons.Album = (props) => <Icon as={BiAlbum} {...props} />;
Icons.Shop = (props) => <Icon as={FaShoppingBag} {...props} />;
Icons.YouTubeTV = (props) => <Icon as={SiYoutubetv} {...props} />;
Icons.MusicApp = (props) => <Icon as={SiApplemusic} {...props} />;
Icons.Instagram = (props) => <Icon as={AiFillInstagram} {...props} />;
Icons.Facebook = (props) => <Icon as={FaFacebookSquare} {...props} />;
Icons.Spotify = (props) => <Icon as={FaSpotify} {...props} />;
Icons.CaretRight = (props) => <Icon as={BsCaretRight} {...props} />;
Icons.Airplane = (props) => <Icon as={ImAirplane} {...props} />;
Icons.KKBOX = (props) => (
  <Icon viewBox="0 0 100 100" {...props}>
    <defs>
      <linearGradient id="a9q5f1wk0a" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="currentColor" />
        <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
      </linearGradient>
    </defs>
    <g>
      <path
        fill="currentColor"
        d="M17.87 34.524c0-1.706 1.296-4.012 2.72-4.836l26.662-15.464c.692-.402 1.702-.632 2.772-.632 1.07 0 2.08.23 2.772.63l25.692 14.862c.432.252 1.184.368 1.82.026.506-.272 1.51-.876 1.884-1.142.294-.21.48-.552.5-.914.018-.364-.128-.702-.414-.952-.238-.21-17.15-9.986-27.21-15.796-1.38-.8-3.17-1.24-5.042-1.24-1.87 0-3.662.44-5.042 1.242L18.322 25.772c-2.79 1.618-4.976 5.462-4.976 8.752V65.16c0 .35.154.672.424.886.212.168.48.256.764.256.11 0 .224-.014.338-.04.504-.118 1.922-.998 2.2-1.174.478-.3.798-.968.798-1.662V34.524zM86.196 33.726c-.34-.202-.81-.188-1.228.038-.238.128-1.32.732-2.034 1.142-.474.272-.806.82-.806 1.33v29.24c0 1.704-1.296 4.006-2.72 4.832l-26.662 15.46c-.682.394-1.692.622-2.772.622-1.034 0-2.07-.242-2.77-.648-1.04-.604-25.476-14.794-25.854-15-.478-.264-1.056-.246-1.544.046-.324.194-.726.44-1.072.652-.3.184-.56.344-.69.42-.324.19-.53.56-.546.988-.02.478.192.92.566 1.18.504.352 24.172 14.098 26.87 15.666 1.38.8 3.172 1.24 5.042 1.24 1.87 0 3.66-.44 5.042-1.242L81.68 74.228c2.79-1.616 4.976-5.46 4.976-8.75v-30.88c-.002-.386-.164-.694-.46-.872z"
        transform="translate(-290 -217) translate(290 217)"
      />
      <path
        fill="currentColor"
        d="M42.356 33.408c.556 0 1.006.45 1.006 1.006v13.008l12.232-12.606c1.385-1.321 2.306-1.404 4.888-1.408h7.482c.644 0 .696.29.318.69-.157.166-3.04 3.165-6.233 6.486l-.55.572-1.107 1.152-.552.574-6.516 6.774 7.345 7.734.554.583c3.506 3.692 6.889 7.256 7.059 7.437.376.4.326.882-.318.882h-7.188c-2.808 0-3.744-.172-5.182-1.542L43.362 52.132v13.454c0 .519-.392.946-.896 1l-.11.006h-7.942c-.556 0-1.006-.45-1.006-1.006V34.414c0-.556.45-1.006 1.006-1.006z"
        transform="translate(-290 -217) translate(290 217)"
      />
    </g>
  </Icon>
);

export default Icons;
