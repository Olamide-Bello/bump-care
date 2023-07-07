import React from 'react'
import './Corner.css'
import Corner1 from './Corner1.png'
import Corner2 from './Corner2.png'
import Corner3 from './Corner3.png'
import Corner4 from './Corner4.png'
import Corner4B from './Corner4B.png'

function Corner() {
  return (
    <div className='corner'>
        <h5>Mom's Corner</h5>
        <p>Welcome to our blog session for moms and babies! Here, we provide you with the 
            latest information, tips, and insights about motherhood and raising healthy and 
            happy babies. Our blog covers a range of topics including pregnancy, baby care, 
            breastfeeding, parenting, and much more. Our aim is to create a community where 
            moms can connect, share their experiences, and learn from one another. So, whether 
            you're a new mom or an experienced one, join us as we navigate the exciting journey 
            of motherhood together.
        </p>
        <div className='corner-info'>
            <div className='info1'>
                <div className='info1-img-container'>
                    <div>
                        <h5>The Importance of Skin-to-Skin Contact with Your Newborn</h5>
                    </div>
                    <img src={Corner1} alt='a mother hugging a baby'/>
                </div>
                <div className='info-dt'>
                    <h5>The Importance of Skin-to-Skin Contact with Your Newborn</h5>
                    <p>Skin-to-skin contact between a mother and her newborn is an important 
                        part of bonding and can have significant benefits for both the baby 
                        and the mother. This contact can regulate the baby's body temperature, 
                        heart rate, and breathing while also helping to establish breastfeeding. 
                        For the mother, skin-to-skin contact can help release hormones that promote 
                        relaxation and bonding with the baby. It is recommended that skin-to-skin 
                        contact begins as soon as possible after birth and continues frequently 
                        throughout the early days and weeks of life.
                    </p>
                </div>
            </div>
            <div className='info2'>
                <div className='info2-img-container'>
                    <img src={Corner2} alt='baby wearing'/>
                    <div>
                        <h5>The utmost benefits of Babywearing </h5>
                    </div>
                </div>
                <div className='info-dt'>
                    <h5>The utmost benefits of Babywearing every mom needs</h5>
                    <p>This article discusses the many benefits of babywearing for both parent and 
                        child. Babywearing can help with bonding, calming fussy babies, and promoting 
                        physical development. It also allows for more freedom and mobility for the 
                        parent while still being able to keep the baby close. Different types of baby 
                        carriers are discussed and tips for safe babywearing are provided.This is 
                        highly recommended for new moms, pro moms and moms to be.
                    </p>
                </div>
            </div>
            <div className='info3'>
                <div className='info3-img-container'>
                    <img src={Corner3} alt='a breastfeeding mom'/>
                </div>
                <div className='info-dt'>
                    <h5>Breastfeeding, Benefits for Baby and Mom</h5>
                    <p>Breastfeeding is an important aspect of infant care that provides numerous benefits 
                        for both the baby and mother. Breast milk contains essential nutrients and antibodies 
                        that help protect the baby from infections and illnesses. It also promotes healthy 
                        growth and development, and has been linked to a reduced risk of Sudden Infant Death 
                        Syndrome (SIDS). For mothers, breastfeeding can help reduce the risk of certain 
                        cancers and may promote faster postpartum weight loss. Additionally, it can create 
                        a special bond between mother and baby. 
                    </p>
                </div>
            </div>
            <div className='info4'>
                <div className='info4-img-container'>
                    <div>
                        <h5>Navigating Breastfeeding Challenges:Tips and Tricks for New Moms</h5>
                    </div>
                    <div>
                        <img src={Corner4B} alt='background'/>
                        <img src={Corner4} alt='mother and child'/>
                    </div>
                </div>
                <div className='info-dt'>
                    <h5>Navigating Breastfeeding Challenges ; Tips and tricks</h5>
                    <p>Breastfeeding can be a wonderful bonding experience between mother and baby, but it can 
                        also come with its own set of challenges. Many new moms may struggle with issues such 
                        as low milk supply, sore nipples, and difficulty latching. However, with the right 
                        techniques and resources, these challenges can be overcome. To start, it is important 
                        to find a comfortable position for both mom and baby during breastfeeding. This can 
                        vary depending on the individual, but many find that the "football hold" or 
                        "cross-cradle hold" are helpful. Making sure that the baby's mouth is properly latched 
                        onto the nipple is also crucial, as an improper latch can cause soreness and pain.
                    </p>
                </div>
            </div>
        </div>
        <div className='more'><button className='yellow-btn'>See More</button></div>
    </div>
  )
}

export default Corner