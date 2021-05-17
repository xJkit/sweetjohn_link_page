import React from 'react';
import { Icon } from '@chakra-ui/react';
// react-icons
import { FaShoppingBag } from 'react-icons/fa';
import { BiAlbum } from 'react-icons/bi';
import {
  AiFillShopping,
  AiFillInstagram,
  AiFillFacebook,
} from 'react-icons/ai';
import { SiYoutubetv, SiApplemusic } from 'react-icons/si';
import { GrFacebook } from 'react-icons/gr';

function Icons(props) {
  return <Icon {...props} />;
}

Icons.Album = (props) => <Icon as={BiAlbum} {...props} />;
Icons.Shop = (props) => <Icon as={FaShoppingBag} {...props} />;
Icons.YouTubeTV = (props) => <Icon as={SiYoutubetv} {...props} />;
Icons.MusicApp = (props) => <Icon as={SiApplemusic} {...props} />;
Icons.Instagram = (props) => <Icon as={AiFillInstagram} {...props} />;
Icons.Facebook = (props) => <Icon as={AiFillFacebook} {...props} />;

export default Icons;
