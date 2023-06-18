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
      'A virtual ecommerce website using ReactJs,Node js, Express js, and Mongoose. ',
    img: Screenshot,
    link: 'https://www.github.com/arifahmad17/BuyBags',
  },
  {
    id: uuidv4(),
    name: 'Real Time Chat App',
    desc: 'Real Time Chatting application using ChatEngine.io ',
    img: Reactchat,
    link: 'https://www.github.com/arifahmad17/React-Chat-App',
  },
];

export default projects;
