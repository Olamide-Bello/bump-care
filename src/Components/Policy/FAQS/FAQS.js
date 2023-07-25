import React, {useState} from 'react'
import './FAQS.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons'

function FAQS() {
    const [toggle, setToggle] = useState({
        p1: false,
        p2: false,
        p3: false,
        p4: false,
        p5: false,
        p6: false,
        p7: false,
        p8: false,
        p9: false,
        p10: false

    })
    const showMore = (id) => {
        id === 'p1' && setToggle({...toggle, p1 : !toggle.p1})
        id === 'p2' && setToggle({...toggle, p2 : !toggle.p2})
        id === 'p3' && setToggle({...toggle, p3 : !toggle.p3})
        id === 'p4' && setToggle({...toggle, p4 : !toggle.p4})
        id === 'p5' && setToggle({...toggle, p5 : !toggle.p5})
        id === 'p6' && setToggle({...toggle, p6 : !toggle.p6})
        id === 'p7' && setToggle({...toggle, p7 : !toggle.p7})
        id === 'p8' && setToggle({...toggle, p8 : !toggle.p8})
        id === 'p9' && setToggle({...toggle, p9 : !toggle.p9})
        id === 'p10' && setToggle({...toggle, p10 : !toggle.p10})
    }

    return (
        <div className='faqs' id='faqs'>
            <div className='faqs-hd'>
                <div>
                    <h5>FAQs</h5>
                    <p>Our FAQ's address the most common questions customers have about our
                        app, services, and brand as a whole.
                    </p>
                </div>
            </div>
            <div className='faqs-container'>
                <div className={toggle?.p1 ? "content-faq" : "expanded-faq"}>
                    <div onClick={() => showMore('p1')}>
                        <h5>What services does Bump Care website offer?</h5>{toggle?.p1 ? <FontAwesomeIcon icon={faChevronRight} />:<FontAwesomeIcon icon={faChevronDown} />}
                    </div>
                    <p>The website offers a range of services tailored to the needs of expecting
                        mothers and their babies. This includes information on pregnancy,
                        parenting tips, baby care advice, product recommendations, and the
                        ability to book appointments with gynecologists.
                    </p>
                </div>
                <div className={toggle?.p2 ? "content-faq" : "expanded-faq"}>
                    <div onClick={() => showMore('p2')}>
                        <h5> Is the information on the website up to date and reliable?</h5>{toggle?.p2  ? <FontAwesomeIcon icon={faChevronRight} />:<FontAwesomeIcon icon={faChevronDown} />}
                    </div>
                    <p>We strive to provide accurate and up-to-date information on our website.
                        Our content is reviewed by medical professionals and experts to ensure
                        reliability. However, it's important to note that the information provided
                        is for general knowledge and should not replace personalized medical advice
                        from a healthcare professional.
                    </p>
                </div>
                <div className={toggle?.p3 ? "content-faq" : "expanded-faq"}>
                    <div onClick={() => showMore('p3')}>
                        <h5>When Should I Start Seeing a Gynecologist During Pregnancy?</h5>{toggle?.p3 ? <FontAwesomeIcon icon={faChevronRight} />:<FontAwesomeIcon icon={faChevronDown} />}
                    </div>
                    <p> It's recommended that you schedule your first prenatal visit with a healthcare
                        provider within the first 8 weeks of pregnancy. This is a good time to establish
                        a relationship with a healthcare provider and discuss any questions or concerns
                        you may have about your pregnancy.
                    </p>
                </div>
                <div className={toggle?.p4 ? "content-faq" : "expanded-faq"}>
                    <div onClick={() => showMore('p4')}>
                        <h5>What Should I Eat During Pregnancy?</h5>{toggle?.p4 ? <FontAwesomeIcon icon={faChevronRight} />:<FontAwesomeIcon icon={faChevronDown} />}
                    </div>
                    <p>A balanced and healthy diet is important during pregnancy. You should aim to eat
                        a variety of fruits, vegetables, whole grains, lean proteins, and low-fat dairy
                        products. Avoid foods high in sugar, salt, and saturated fats. Consult with your
                        healthcare provider for more specific dietary recommendations.
                    </p>
                </div>
                <div className={toggle?.p5 ? "content-faq" : "expanded-faq"}>
                    <div onClick={() => showMore('p5')}>
                        <h5>How Can I Choose The Right Gynecologist For Me?</h5>{toggle?.p5 ? <FontAwesomeIcon icon={faChevronRight} />:<FontAwesomeIcon icon={faChevronDown} />}
                    </div>
                    <p>Choosing the right gynecologist is an important decision. You may want to consider
                        factors such as their experience, expertise, bedside manner, and office location.
                        Reading reviews from other patients can also provide helpful insights. Our website
                        allows you to compare gynecologists based on these and other factors to help you
                        make an informed decision.
                    </p>
                </div>
                <div className={toggle?.p6 ? "content-faq" : "expanded-faq"}>
                    <div onClick={() => showMore('p6')}>
                        <h5> Is my personal information secure when using the website?</h5>{toggle?.p6 ? <FontAwesomeIcon icon={faChevronRight} />:<FontAwesomeIcon icon={faChevronDown} />}
                    </div>
                    <p>Absolutely! We take your privacy and security seriously. Our website employs robust
                        security measures to protect your personal information. We adhere to strict data
                        protection policies and ensure that your information is handled in accordance with
                        relevant privacy laws and regulations.
                    </p>
                </div>
                <div className={toggle?.p7 ? "content-faq" : "expanded-faq"}>
                    <div onClick={() => showMore('p7')}>
                        <h5>Can I ask specific questions to the gynecologists through the website?</h5>{toggle?.p7 ? <FontAwesomeIcon icon={faChevronRight} />:<FontAwesomeIcon icon={faChevronDown} />}
                    </div>
                    <p>While you cannot directly ask questions to the gynecologists through the website, you
                        can book an appointment to have a one-on-one consultation with them. During the
                        appointment, you'll have the opportunity to discuss your concerns, ask questions,
                        and receive personalized advice.
                    </p>
                </div>
                <div className={toggle?.p8 ? "content-faq" : "expanded-faq"}>
                    <div onClick={() => showMore('p8')}>
                        <h5> Can I find information on various pregnancy stages and baby development on the website?</h5>{toggle?.p8 ? <FontAwesomeIcon icon={faChevronRight} />:<FontAwesomeIcon icon={faChevronDown} />}
                    </div>
                    <p> Yes, our website provides comprehensive information on different stages of pregnancy,
                        from conception to childbirth. We also offer detailed resources on baby development,
                        including milestones, growth charts, and tips for nurturing your baby's development.
                    </p>
                </div>
                <div className={toggle?.p9 ? "content-faq" : "expanded-faq"}>
                    <div onClick={() => showMore('p9')}>
                        <h5> Are there any fees associated with finding a gynecologist through the website?</h5>{toggle?.p9 ? <FontAwesomeIcon icon={faChevronRight} />:<FontAwesomeIcon icon={faChevronDown} />}
                    </div>
                    <p>Our website provides a convenient platform to search for a gynecologist close to you
                        and  book appointments with gynecologists, but please note that there may be fees associated
                        with the medical services provided by the gynecologists. The specific details regarding
                        fees will be communicated to you during the appointment booking process.
                    </p>
                </div>
                <div className={toggle?.p10 ? "content-faq" : "expanded-faq"}>
                    <div onClick={() => showMore('p10')}>
                        <h5>Are there any additional resources available for new moms?</h5>{toggle?.p10 ? <FontAwesomeIcon icon={faChevronRight} />:<FontAwesomeIcon icon={faChevronDown} />}
                    </div>
                    <p> Absolutely! We understand the challenges new moms face, and we offer a wealth of additional
                        resources on our website. You'll find articles, videos, and guides on breastfeeding,
                        postpartum care, postnatal exercises, mental health, and much more.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default FAQS