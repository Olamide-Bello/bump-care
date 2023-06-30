import React from 'react'
import './Nutrition.css'
import Dish1 from './Dish1.png'
import Dish2 from './Dish2.png'
import Dish3 from './Dish3.png'
import Dish4 from './Dish4.png'
import Dish5 from './Dish5.png'
import Dish6 from './Dish6.png'
import Dish7 from './Dish7.png'

function Nutrition() {
    return (
        <div className='nutrition'>
            <div className='p-dish'>
                <h5>Pregnancy Nutrition</h5>
                <div className='dish'>
                    <img id='dish1' src={Dish1} alt='dish' />
                    <img id='dish2' src={Dish2} alt='dish' />
                    <img id='dish3' src={Dish3} alt='dish' />
                    <img id='dish4' src={Dish4} alt='dish' />
                    <img id='dish5' src={Dish5} alt='dish' />
                    <img id='dish6' src={Dish6} alt='dish' />
                    <img id='dish7' src={Dish7} alt='dish' />
                </div>
            </div>
            <div className='p-nutrition'>
                <p>
                    Eating a balanced and nutritious diet is essential during pregnancy
                    to support both your own health and the growth and development of your baby. Here are some important classes of foods to include in
                    your pregnancy diet:
                </p>

                <ul>
                    <li>
                        Fruits and vegetables: These provide important vitamins, minerals, and fiberthat are essential for both you and your baby. Aim to include a variety of
                        colorful fruits and vegetables in your diet, such as leafy greens, berries,
                        citrus fruits, carrots, and sweet potatoes.
                    </li>
                    <li>
                        Whole grains: These provide important nutrients like fiber, iron, and B
                        vitamins. Choose whole grain breads and cereals, brown rice, quinoa, and
                        oatmeal.
                    </li>
                    <li>
                        Protein: This is essential for building and repairing tissues, and supporting
                        the growth of your baby. Good sources of protein include lean meat, poultry,fish, eggs, beans, and lentils.
                    </li>
                    <li>
                        Dairy: Dairy products like milk, cheese, and yogurt provide important
                        nutrients like calcium and vitamin D that are essential for bone growth and
                        development.
                    </li>
                    <li>
                        Healthy fats: These are important for brain development and can help
                        prevent preterm labor. Good sources of healthy fats include nuts, seeds,
                        avocados, and fatty fish like salmon.
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default Nutrition