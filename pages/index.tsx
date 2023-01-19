import {Inter} from '@next/font/google'
import Feedback from "../Components/feedback";
import Navbar from "../Components/Navbar";
import StartSide from "../Components/StartSide";
import style from '../styles/Home.module.scss'
import About from "../Components/About";
import Programs from "../Components/Programs";
import Steps from "../Components/Steps";
import Question from "../Components/question";
import Review from "../Components/review";
import Gallery from "../Components/Gallery";
import Footer from "../Components/footer";


const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <div className={style.wrapper}>
            <div className={style.fullpage}>
                <div className={style.fullpage__bg}>
                    <Navbar/>
                    <StartSide/>
                </div>
            </div>
            <About/>
            <Programs/>
            <Steps/>
            <Question/>
            <Review/>
            <Gallery/>
            <Feedback/>
            <Footer/>




        </div>
    )
}
