import svg1 from '../../images/svg-4.svg'
import svg2 from '../../images/svg-6.svg'
import svg3 from '../../images/svg-2.svg'


export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topline: 'Premium Bank',
    headline: 'Unlimited Transactions with zero fees',
    description: 'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.',
    buttonLabel: 'Get started',
    imgStart:false,
    img: svg1,
    alt:'Car',
    dark:true,
    primary: true,
    darkText: false,
}

export const homeObjTwo = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topline: 'Unlimited Access',
    headline: 'Login to your account at any time',
    description: 'We have you coverd matter where you are located.All you need is internet connection and a phone or computer.',
    buttonLabel: 'Learn More',
    imgStart:true,
    img: svg2,
    alt:'Chart',
    dark:false,
    primary: false,
    darkText: true,
}

export const homeObjThree = {
    id: 'signup',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topline: 'Join our Team',
    headline: 'Creating an account is extremely easy',
    description: "Get everything set up and ready in under 10 minutes.All you need to do is add your information and you're ready to go.",
    buttonLabel: 'Start Now',
    imgStart:false,
    img: svg3,
    alt:'team',
    dark:false,
    primary: false,
    darkText: true,
}