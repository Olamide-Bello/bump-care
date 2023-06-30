import React from 'react'
import './Prenatal.css'

function Prenatal() {
    return (
        <div className='prenatal'>
            <h5>Prenatal Tests & Nutrients</h5>
            <div className='p-test-nutr'>

                <div className='tests'>
                    <h5>Tests</h5>
                    <ul>
                        <li>
                            Prenatal genetic screening: Tests that can identify an increased risk
                            of certain genetic disorders in the baby, such as Down syndrome, cystic fibrosis, and spina bifida. These tests are typically done in the first or second trimester.
                        </li>
                        <li>
                            Ultrasound: Uses sound waves to create images of the baby
                            and can help identify potential problems and determine the
                            baby's due date. Typically done at least once during
                            pregnancy.
                        </li>
                        <li>
                            Glucose screening: A test to check for gestational diabetes,
                            which is high blood sugar during pregnancy. Typically done between 24-28 weeks of pregnancy.
                        </li>
                    </ul>
                </div>
                <div className='nutrients'>
                    <h5>Nutrients</h5>
                    <ul>
                        <li>
                            Folic acid: Helps prevent birth defects of the baby's brain
                            and spine. Women should aim for 400-800 micrograms
                            (mcg) of folic acid per day before and during early
                            pregnancy.
                        </li>
                        <li>
                            Iron: Helps the body make extra blood to supply oxygen to
                            the baby. Women should aim for 27 mg of iron per day
                            during pregnancy.
                        </li>
                        <li>
                            Calcium: Helps build strong bones and teeth for the baby.
                            Women should aim for 1000-1300 mg of calcium per day
                            during pregnancy.
                        </li>
                        <li>
                            Vitamin D: Helps the body absorb calcium and supports
                            the baby's bone growth. Women should aim for 600-800
                            International Units (IU) of vitamin D per day during
                            pregnancy.
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Prenatal