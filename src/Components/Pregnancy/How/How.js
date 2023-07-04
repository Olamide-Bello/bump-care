import React, { useState } from 'react'
import './How.css'
import How1 from './How1.png'
import How2 from './How2.png'
import How3 from './How3.png'
import How4 from './How4.png'
import How5 from './How5.png'
import How6 from './How6.png'

function How() {

    const [toggle, setToggle] = useState(false)
    const [chosen, setChosen] = useState("")
    const showMore = (id) => {
        setToggle(true)
        setChosen(id)
    }
    const showLess = () => {
        setToggle(false)
        setChosen("")
    }

    return (
        <div className='how-p'>
            <h5>Getting Pregnant</h5>
            <div className='how-p-container'>
                <div className={toggle && chosen === '1p' ? "expanded-card" : "content-card"}>
                    <img src={How1} alt='icon' />
                    <h5>Track Ovulation</h5>
                    <p>An ovulation tracker is a helpful tool for women who are
                        trying to conceive. It can help you identify your fertile
                        window, which is the time when you're most likely to get
                        pregnant.
                    </p>
                    <p>
                        There are a variety of ovulation trackers available, from
                        simple apps that you can download on your phone to more advanced fertility monitors.<br /><br />
                        Some of the most popular ovulation tracking methods
                        include: Ovulation prediction kit, Basal body temperature,
                        Fertility tracking apps or just by tracking your menstrual
                        cycle.
                    </p>
                    <button className='content-btn' onClick={() => showMore('1p')}><strong>View More</strong></button>
                    <button className='expanded-btn' onClick={showLess}><strong>Show Less</strong></button>
                </div>
                <div className={toggle && chosen === '2p' ? "expanded-card" : "content-card"}>
                    <img src={How2} alt='icon' />
                    <h5>Nutrition</h5>
                    <p>Nutrition is an important factor for women who are trying to
                        get pregnant. A healthy, balanced diet can help support your reproductive health and increase your chances of
                        conceiving.
                    </p>
                    <p>
                        Here are some key nutrients to focus on:
                        Folic Acid, Iron, Calcium, Omega-3 fatty acids.In addition to
                        these key nutrients , it's important to maintain a healthy,
                        balanced diet that includes plenty of fruits, vegetables,
                        whole grains and lean proteins.
                        <br /><br />
                        Avoiding processed foods, sugary drinks, and excessive
                        alcohol intake can also help support your reproductive
                        health.
                    </p>
                    <button className='content-btn' onClick={() => showMore('2p')}><strong>View More</strong></button>
                    <button className='expanded-btn' onClick={showLess}><strong>Show Less</strong></button>
                </div>
                <div className={toggle && chosen === '3p' ? "expanded-card" : "content-card"}>
                    <img src={How3} alt='icon' />
                    <h5>Sex</h5>
                    <p>Sex is a critical factor for women who are trying to get
                        pregnant. In order to conceive, sperm must meet with an egg during a woman's fertile window. Here are some tips to help
                        maximize your chances of getting pregnant:
                    </p>
                    <p>
                        1.Timing; its important to have intercourse during which is
                        typically the 5-day period leading to ovulation.<br /><br />
                        2.Frequency; having intercourse every other day during your
                        fertile window can help ensure that sperm is present when
                        egg is released.<br /><br />
                        3.Positions; some women find that lying on their back with a
                        pillow under their hips after intercourse can help the sperm
                        reach the cervix easily.
                    </p>
                    <button className='content-btn' onClick={() => showMore('3p')}><strong>View More</strong></button>
                    <button className='expanded-btn' onClick={showLess}><strong>Show Less</strong></button>
                </div>
                <div className={toggle && chosen === '4p' ? "expanded-card" : "content-card"}>
                    <img src={How4} alt='icon' />
                    <h5>Health & Fitness</h5>
                    <p>Fitness and health are important factors for women who are
                        trying to get pregnant. Maintaining a healthy lifestyle can
                        help support your reproductive health and increase your
                        chances of conceiving. Here are some tips to help optimize
                        your health and fitness:
                    </p>
                    <p>
                        1.Exercise; regular exercise can help maintain a healthy
                        weight, improve circulation , and reduce stress.<br /><br />
                        2.Weight management; maintaining a healthy weight is
                        important for fertility.<br /><br />
                        3.Smoking & Alcohol; Smoking & excessive alcohol intake can harm fertility and increase the risk of miscarriage.
                    </p>
                    <button className='content-btn' onClick={() => showMore('4p')}><strong>View More</strong></button>
                    <button className='expanded-btn' onClick={showLess}><strong>Show Less</strong></button>
                </div>
                <div className={toggle && chosen === '5p' ? "expanded-card" : "content-card"}>
                    <img src={How5} alt='icon' />
                    <h5>Alternative Therapies</h5>
                    <p>Alternative therapies for getting pregnant refer to a range of
                        non-traditional approaches that some women may consider
                        when trying to conceive. These therapies may include
                        practices such as acupuncture, herbal medicine, dietary
                        changes, and gestational carriers.
                    </p>
                    <p>
                        Acupuncture for example is a chinese practice that involves
                        the insertion of thin needles into specific points of the
                        body. Some studies suggests that acupuncture may improve
                        fertility by increasing blood flow to reproductive organs.<br /><br />
                        Herbal medicine is another alternative therapy that may be
                        used to boost fertility. Certain herbs like red clover, raspberry leaf, and nettle leaf are believed to support hormonal and
                        balance and enhance overall fertility.<br /><br />
                        IVF involves fertilizing eggs outside the body and then
                        implanting them into the uterus, while surrogacy involves
                        using a gestational carrier to carry and give birth to a baby.
                    </p>
                    <button className='content-btn' onClick={() => showMore('5p')}><strong>View More</strong></button>
                    <button className='expanded-btn' onClick={showLess}><strong>Show Less</strong></button>
                </div>
                <div className={toggle && chosen === '6p' ? "expanded-card" : "content-card"}>
                    <img src={How6} alt='icon' />
                    <h5>Stress Management</h5>
                    <p>When trying to get pregnant, managing stress can be an
                        essential part of the process. High levels of stress can
                        interfere with ovulation and the menstrual cycle, making it
                        more challenging to conceive.
                    </p>
                    <p>
                        There are several stress management techniques that can
                        help reduce stress and increase the chances of getting
                        pregnant. One effective technique is mindfulness meditation,which involves focusing on the present moment and being
                        aware of your thoughts and emotions without judgment. This can help you to manage stress and anxiety and reduce the
                        impact it has on your body.<br /><br />
                        Yoga is another stress management technique that can be
                        helpful when trying to conceive. Not only does it help to
                        reduce stress levels, but it can also improve circulation to the
                        reproductive system and promote hormone balance.
                        Additionally, regular exercise such as jogging, swimming, or
                        cycling can help to reduce stress and improve overall health
                    </p>
                    <button className='content-btn' onClick={() => showMore('6p')}><strong>View More</strong></button>
                    <button className='expanded-btn' onClick={showLess}><strong>Show Less</strong></button>
                </div>
            </div>
        </div>
    )
}

export default How