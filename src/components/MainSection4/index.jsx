import Stayles from "./mainsection4.module.css"
import imgEcl from "../../assets/images/Ellipse 2.svg"
export const MainSection4 = ({ togglModal }) => {
    return <div className={Stayles.container}>
        <div className={Stayles.content}>
            <div className={Stayles.left}>
                <p className={Stayles.string}>

                    It is a long established fact that a reader will be distracted by
                    the readable content of a page when looking at its layout. The
                    point of using Lorem Ipsum is that it has a more-or-less normal
                    distribution of letters, as opposed to using 'Content here,
                    content here', making it look like readable English. Many
                    desktop publishing packages and web page editors now use Lorem Ipsum
                    as their default model text, and a search for 'lorem ipsum' will
                    uncover many web sites still in their infancy. Various versions
                    have evolved over the years, sometimes by accident, sometimes on
                    purpose injected humour and the lik
                </p>
                <div className={Stayles.left1} >

                    <iframe className={Stayles.iframe} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12186.326796325451!2d44.4898065!3d40.2183669!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406a97fdcaf8fa23%3A0xcbba2dff63d5f1b2!2sVaga%20Pharm!5e0!3m2!1shy!2sam!4v1692474488174!5m2!1shy!2sam"
                        width="500"
                        height="261"
                        style={{ border: 0 }}
                        allowfullScreen = ""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">

                    </iframe>
                    <img className={Stayles.imgEcl} src={imgEcl} alt="imgEcl" />
                </div>
            </div>
            <div className={Stayles.formdiv} >
                <h3 className={Stayles.h3}>ԿԱՊՆՎԵՔ ՄԵԶ ՀԵՏ ՀԻՄԱ</h3>
                <form onSubmit={(e) => e.preventDefault()} className={Stayles.form} >
                    <input
                        placeholder="Անուն"
                        className={Stayles.input}
                        type="text"
                    />
                    <input
                        placeholder="Էլ․հասցե"
                        className={Stayles.input}
                        type="text"
                    />
                    <textarea
                        placeholder="Հաղորդագրություն"
                        className={Stayles.textarea}
                        name=""
                        id=""
                        cols="30"
                        rows="10">
                    </textarea>
                    <button onClick={togglModal} className={Stayles.button}>ՈՒՂԱՐԿԵԼ</button>
                </form>
            </div>
        </div>
    </div>
}