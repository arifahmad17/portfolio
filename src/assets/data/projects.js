import { v4 as uuidv4 } from 'uuid';
import meme from '../images/meme.png';
import UTrackerImg from '../images/utracker.jpg';
import iot from '../images/iot.png';
import food from '../images/food.jpg';
import CavinImg from '../images/cavinimg.jpg';
import Reactchat from '../images/react_chat.png';
import Screenshot from '../images/screenshot.png';

const projects = [
  {
    id: uuidv4(),
    name: 'BuyBags',
    desc:
      ' I developed the website which give info about the all enginnerings colleges of india.',
    img: Screenshot,
  },
  {
    id: uuidv4(),
    name: 'Real Time Chat App',
    desc:
      'Real Time Chatting application using React First Create users on Chat Engine Then Start Chatting after logging in.',
    img: Reactchat,
  },
];

export default projects;
