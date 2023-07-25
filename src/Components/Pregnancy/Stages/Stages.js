import React from 'react'
import './Stages.css'
import Stage1 from './Stage1.png'
import Stage4 from './Stage4.png'
import Stage7 from './Stage7.png'

function Stages() {
    return (
        <div className='stages'>
            <h5>Stages of Pregnancy</h5>
            <div className='p-stage'>
                <div>
                    <img src={Stage1} alt='stage1' />
                    <div>
                        <h5>First Trimester (week 0-12)</h5>
                        <p>
                            The first trimester of pregnancy is an exciting time as your body begins
                            to undergo significant changes to support the growth and development
                            of your baby. During this time, you may experience a range of physical
                            and emotional symptoms.<br /><br />
                            One of the earliest signs of pregnancy is a missed period, but other
                            common symptoms of the first trimester include nausea, vomiting,
                            fatigue, breast tenderness, and frequent urination. These symptoms are
                            caused by hormonal changes in your body as it prepares for pregnancy.<br /><br />
                            As your pregnancy progresses, you may notice other changes in your
                            body, such as weight gain, changes in appetite, and an increase in
                            vaginal discharge. Your uterus will also begin to expand to
                            accommodate the growing fetus, which can cause mild cramping and
                            discomfort.<br /><br />
                            In addition to physical changes, you may also experience emotional
                            changes during the first trimester. Many women feel anxious, irritable, ormoody during this time, which is perfectly normal.<br /><br />
                            To support your growing baby and maintain your own health during the
                            first trimester, it's important to eat a healthy, balanced diet, get plenty of
                            rest, and avoid alcohol, tobacco, and other harmful substance
                        </p>
                    </div>
                </div>
                <div>
                    <div>
                        <h5>Second Trimester (week 13-28)</h5>
                        <p>
                            The second trimester of pregnancy is often considered the "honeymoon
                            phase" as many women begin to feel better and more energetic than
                            they did during the first trimester. During this time, your body will
                            continue to undergo significant changes as your baby grows and
                            develops.<br /><br />
                            One of the most noticeable changes during the second trimester is your
                            growing belly. Your uterus will continue to expand, and you may begin tofeel your baby's movements for the first time. Other physical changes
                            may include stretch marks, swollen ankles, and varicose veins.<br /><br />
                            While some symptoms of the first trimester may improve during the
                            second trimester, others may persist or even worsen. For example,
                            heartburn and constipation are common complaints during this time.
                            You may also experience occasional dizziness, headaches, and back
                            pain.<br /><br />
                            Along with physical changes, you may also experience emotional
                            changes during the second trimester. Many women feel more connectedto their baby and may begin to plan for their arrival. However, anxiety
                            and mood swings can still be common.
                        </p>
                    </div>
                    <img src={Stage4} alt='stage4' />
                </div>
                <div>
                    <img src={Stage7} alt='stage7' />
                    <div>
                        <h5>Third Trimester (week 29-40)</h5>
                        <p>
                            The third trimester of pregnancy is the final stretch before your baby's
                            arrival, and your body will undergo some significant changes during thistime. As your baby grows and prepares for birth, you may experience
                            physical and emotional symptoms that can be challenging.<br /><br />
                            One of the most noticeable changes during the third trimester is your
                            growing belly. Your uterus will continue to expand, and you may
                            experience discomfort or pain in your back, hips, or pelvis. You may also
                            experience Braxton Hicks contractions, which are practice contractions
                            that help prepare your body for labor.<br /><br />
                            Other physical symptoms of the third trimester may include shortness of
                            breath, frequent urination, and difficulty sleeping. You may also
                            experience swelling in your feet and ankles, as well as increased fatigue.<br /><br />
                            As your due date approaches, you may also experience emotional
                            symptoms such as anxiety, excitement, and impatience. Many women
                            feel ready for their baby to arrive and may begin to prepare for labor
                            and delivery.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Stages